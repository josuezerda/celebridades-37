// Inscripción al sorteo: se avisa por WhatsApp (Cloud API). Credenciales solo en variables de entorno.
const clean = (s, n) => String(s ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, n);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  if (b.web) return res.status(200).json({ ok: true });
  const nombre = clean(b.nombre, 80);
  const tel = clean(b.whatsapp, 20).replace(/[^\d+]/g, '');
  if (!nombre || tel.replace(/\D/g, '').length < 8) return res.status(400).json({ error: 'Datos incompletos' });

  const { WA_TOKEN, WA_PHONE_ID, WA_TO } = process.env;
  if (!WA_TOKEN || !WA_PHONE_ID || !WA_TO) return res.status(500).json({ error: 'Servicio no configurado' });

  try {
    const r = await fetch(`https://graph.facebook.com/v21.0/${WA_PHONE_ID}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${WA_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ messaging_product: 'whatsapp', to: WA_TO, type: 'text', text: { body: `🎁 Nuevo participante del sorteo\n👤 ${nombre}\n📱 ${tel}\n— Josué 37 · Sunset` } }),
    });
    if (!r.ok) { console.error('WhatsApp API', r.status, await r.text()); return res.status(502).json({ error: 'No se pudo enviar' }); }
    return res.status(200).json({ ok: true });
  } catch (e) { console.error(e); return res.status(502).json({ error: 'No se pudo enviar' }); }
}
