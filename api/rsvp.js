// Recibe la confirmación y la envía por WhatsApp Cloud API (Meta).
// Credenciales SOLO en variables de entorno de Vercel: WA_TOKEN, WA_PHONE_ID, WA_TO
const clean = (s, n) => String(s ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, n);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  if (b.web) return res.status(200).json({ ok: true }); // honeypot anti-bots

  const nombre = clean(b.nombre, 80);
  if (!nombre) return res.status(400).json({ error: 'Falta el nombre' });
  const asiste = b.asiste === 'no' ? 'no' : 'si';
  const personas = Math.min(10, Math.max(1, parseInt(b.personas, 10) || 1));
  const mensaje = clean(b.mensaje, 300);

  const { WA_TOKEN, WA_PHONE_ID, WA_TO } = process.env;
  if (!WA_TOKEN || !WA_PHONE_ID || !WA_TO) {
    console.error('Faltan variables de entorno de WhatsApp');
    return res.status(500).json({ error: 'Servicio no configurado' });
  }

  const body =
    (asiste === 'si' ? '✅ Confirmó asistencia' : '❌ No asiste') +
    `\n👤 ${nombre}` +
    (asiste === 'si' ? `\n👥 ${personas} ${personas === 1 ? 'persona' : 'personas'}` : '') +
    (mensaje ? `\n💬 ${mensaje}` : '') +
    '\n— Josué 37 · Sunset';

  try {
    const r = await fetch(`https://graph.facebook.com/v21.0/${WA_PHONE_ID}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${WA_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ messaging_product: 'whatsapp', to: WA_TO, type: 'text', text: { body } }),
    });
    if (!r.ok) {
      console.error('WhatsApp API', r.status, await r.text());
      return res.status(502).json({ error: 'No se pudo enviar' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ error: 'No se pudo enviar' });
  }
}
