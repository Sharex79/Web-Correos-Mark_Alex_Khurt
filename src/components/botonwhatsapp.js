export function BotonContacto() {
  const boton = document.createElement('button');
  boton.className = 'boton-contacto btn-naranja btn-aloja anim-right';
  boton.title = 'Carrito';
  boton.style.position = 'fixed';
  boton.style.right = '20px';
  boton.style.bottom = '20px';
  boton.style.zIndex = '1000';
  boton.style.background = '#60a5fa';
  boton.style.color = 'white';
  boton.style.width = '75px';
  boton.style.height = '75px';
  boton.style.minWidth = '75px';
  boton.style.minHeight = '75px';
  boton.style.border = 'none';
  boton.style.borderRadius = '50%';
  boton.style.fontSize = '36px';
  boton.style.cursor = 'pointer';
  boton.style.display = 'flex';
  boton.style.alignItems = 'center';
  boton.style.justifyContent = 'center';
  boton.style.boxShadow = '0 4px 12px rgba(96, 165, 250, 0.35)';
  boton.setAttribute('aria-label', 'Abrir carrito');
  boton.innerHTML = `
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1.6"/>
      <circle cx="19" cy="21" r="1.6"/>
      <path d="M2.5 4h2.5l2.2 11.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6l1.2-6.4H6.1"/>
    </svg>`;

  boton.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.mostrarTienda) {
      window.mostrarTienda();
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
        width: 75px !important;
        height: 75px !important;
        min-width: 75px !important;
        min-height: 75px !important;
        border-radius: 50% !important;
        box-shadow: 0 4px 12px rgba(96, 165, 250, 0.35);
        display: flex !important;
        align-items: center;
        justify-content: center;
        background: #60a5fa !important;
        cursor: pointer;
        padding: 0 !important;
        border: none !important;
        font-size: 36px !important;
        color: #fff !important;
        transition: all 0.3s ease;
      }
      .boton-contacto:hover,
      .btn-naranja.btn-aloja:hover {
        background: #3b82f6 !important;
        box-shadow: 0 6px 18px rgba(59, 130, 246, 0.4);
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
          width: 105px !important;
          height: 105px !important;
          min-width: 105px !important;
          min-height: 105px !important;
          right: 20px !important;
          bottom: 20px !important;
          font-size: 48px !important;
        }
      }
      @media (max-width: 600px) {
        .boton-contacto,
        .btn-naranja.btn-aloja {
          width: 72px !important;
          height: 72px !important;
          min-width: 72px !important;
          min-height: 72px !important;
          right: 16px !important;
          bottom: 16px !important;
          font-size: 30px !important;
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