export function BotonContacto() {
  const boton = document.createElement('button');
  boton.className = 'boton-contacto btn-naranja btn-aloja anim-right';
  boton.title = 'Consulta Jurídica';
  boton.style.position = 'fixed';
  boton.style.right = '20px';
  boton.style.bottom = '20px';
  boton.style.zIndex = '1000';
  boton.style.background = '#f97316';
  boton.style.color = 'white';
  boton.style.width = '50px';
  boton.style.height = '50px';
  boton.style.minWidth = '50px';
  boton.style.minHeight = '50px';
  boton.style.border = 'none';
  boton.style.borderRadius = '50%';
  boton.style.fontSize = '24px';
  boton.style.cursor = 'pointer';
  boton.style.display = 'flex';
  boton.style.alignItems = 'center';
  boton.style.justifyContent = 'center';
  boton.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.3)';
  boton.innerHTML = '📞';

  boton.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.mostrarFormulario) {
      window.mostrarFormulario();
    }
  };

  document.body.appendChild(boton);

  if (!document.getElementById('botonwhatsapp-anim-css')) {
    const style = document.createElement('style');
    style.id = 'botonwhatsapp-anim-css';
    style.textContent = `
      .boton-contacto,
      .btn-naranja.btn-aloja {
        position: fixed !important;
        right: 20px !important;
        bottom: 20px !important;
        z-index: 1000 !important;
        width: 50px !important;
        height: 50px !important;
        min-width: 50px !important;
        min-height: 50px !important;
        border-radius: 50% !important;
        box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
        display: flex !important;
        align-items: center;
        justify-content: center;
        background: #f97316 !important;
        cursor: pointer;
        padding: 0 !important;
        border: none !important;
        font-size: 24px !important;
        color: white !important;
        transition: all 0.3s ease;
      }
      .boton-contacto:hover,
      .btn-naranja.btn-aloja:hover {
        background: #ea580c !important;
        box-shadow: 0 6px 18px rgba(234, 88, 12, 0.4);
        transform: translateY(-2px) scale(1.05);
      }
      .anim-right {
        opacity: 0;
        transform: translateX(60px);
        transition: opacity 0.8s, transform 0.8s cubic-bezier(.4,2,.6,1);
      }
      .anim-visible {
        opacity: 1 !important;
        transform: translateX(0) translateY(0) !important;
      }
      @media (max-width: 1200px) and (min-width: 601px) {
        .boton-contacto,
        .btn-naranja.btn-aloja {
          width: 70px !important;
          height: 70px !important;
          min-width: 70px !important;
          min-height: 70px !important;
          right: 20px !important;
          bottom: 20px !important;
          font-size: 32px !important;
        }
      }
      @media (max-width: 600px) {
        .boton-contacto,
        .btn-naranja.btn-aloja {
          width: 48px !important;
          height: 48px !important;
          min-width: 48px !important;
          min-height: 48px !important;
          right: 16px !important;
          bottom: 16px !important;
          font-size: 20px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    boton.classList.add('anim-visible');
  }, 100);

  return document.createElement('div'); // Return para main.js
}

// Exportar también con el nombre anterior para compatibilidad
export const BotonVerde = BotonContacto;