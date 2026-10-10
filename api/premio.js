// Resultado del tragamonedas: queda en los logs de Vercel (no se avisa a ningún WhatsApp personal).
const clean = (s, n) => String(s ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, n);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  if (b.web) return res.status(200).json({ ok: true });
  const nombre = clean(b.nombre, 80);
  const tel = clean(b.whatsapp, 20).replace(/[^\d+]/g, '');
  const premio = clean(b.premio, 120);
  if (!nombre || tel.replace(/\D/g, '').length < 8 || !premio) return res.status(400).json({ error: 'Datos incompletos' });

  const mayor = b.mayor === true;
  console.log('PREMIO ' + JSON.stringify({ nombre, tel, premio, mayor, fecha: new Date().toISOString() }));
  return res.status(200).json({ ok: true });
}
