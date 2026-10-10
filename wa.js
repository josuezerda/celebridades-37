// Globito flotante de WhatsApp (asistente del evento)
(()=>{const N='5493855061691',M='¡Hola! Quiero consultar por el cumpleaños Josué 37 🎉';
const css=document.createElement('style');css.textContent=`
#wab{position:fixed;left:max(14px,env(safe-area-inset-left));bottom:max(14px,env(safe-area-inset-bottom));z-index:90;display:flex;align-items:center;gap:10px;text-decoration:none;font-family:'Montserrat',sans-serif}
#wab .ic{width:58px;height:58px;border-radius:50%;background:#25d366;display:grid;place-items:center;box-shadow:0 6px 24px rgba(37,211,102,.45);animation:wapulse 2.4s infinite}
#wab svg{width:32px;height:32px;fill:#fff}
#wab .tip{background:rgba(22,13,7,.92);color:#f6ebdc;border:1px solid rgba(240,194,122,.4);border-radius:14px;padding:8px 14px;font-size:.78rem;letter-spacing:.04em;opacity:0;transform:translateX(-8px);transition:.4s;pointer-events:none;white-space:nowrap}
#wab.tp .tip{opacity:1;transform:none}
@keyframes wapulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.55)}70%{box-shadow:0 0 0 18px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}
@media(max-width:380px){#wab .tip{display:none}}`;document.head.appendChild(css);
const a=document.createElement('a');a.id='wab';a.href=`https://wa.me/${N}?text=${encodeURIComponent(M)}`;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','Escribinos por WhatsApp');
a.innerHTML='<span class="ic"><svg viewBox="0 0 32 32"><path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.19 1.6 6.01L4 28l7.1-1.86a12 12 0 0 0 4.94 1.06h.01C22.68 27.2 28 21.8 28 15.17 28 8.4 22.68 3 16.04 3zm0 21.94h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-4.21 1.1 1.13-4.1-.24-.38a9.9 9.9 0 0 1-1.52-5.27c0-5.5 4.48-9.97 10-9.97 5.5 0 9.96 4.47 9.96 9.97 0 5.49-4.47 9.94-9.96 9.94zm5.46-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg></span><span class="tip">¿Dudas? Escribinos 💬</span>';
const add=()=>{document.body.appendChild(a);setTimeout(()=>a.classList.add('tp'),2500);setTimeout(()=>a.classList.remove('tp'),9000)};
document.body?add():addEventListener('DOMContentLoaded',add)})();
