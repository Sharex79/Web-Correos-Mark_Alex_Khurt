// ==========================================
//          COMPONENTE FOTO INICIAL
//       Imagen hero horizontal principal
// ==========================================

export function FotoInicial() {
  const section = document.createElement('section');
  section.className = 'foto-inicial-hero';
  section.id = 'inicio';
  
  // Estilos del contenedor - Ancho completo que toca los bordes
  section.style.cssText = `
    width: 100vw;
    height: 600px;
    margin: 0;
    margin-top: -20px;
    padding: 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  `;
  
  // Imagen de fondo (usando una imagen genérica de paisaje)
  const heroImage = document.createElement('div');
  heroImage.style.cssText = `
    width: 100%;
    height: 100%;
    background-image: url('https://www.procuradortomas.com/img/balanza.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 0;
  `;
  
  // Overlay oscuro para mejorar legibilidad del texto
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
    z-index: 1;
  `;
  
  // Contenedor del contenido centrado
  const contentContainer = document.createElement('div');
  contentContainer.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
    color: white;
    max-width: 800px;
    padding: 0 2rem;
  `;
  
  // Título principal
  const title = document.createElement('h1');
  title.textContent = '';
  title.style.cssText = `
    margin: 0 0 1rem 0;
    font-size: 3rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.2;
  `;
  
  // Botón de acción (opcional)
  const actionButton = document.createElement('button');
  actionButton.textContent = 'Explorar Más';
  actionButton.style.cssText = `
    margin-top: 2rem;
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #646cff, #747bff);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(100, 108, 255, 0.3);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
  `;
  
  // Efectos hover del botón
  actionButton.addEventListener('mouseenter', () => {
    actionButton.style.transform = 'translateY(-3px) scale(1.05)';
    actionButton.style.boxShadow = '0 8px 25px rgba(100, 108, 255, 0.5)';
    actionButton.style.background = 'linear-gradient(135deg, #747bff, #8b8fff)';
  });
  
  actionButton.addEventListener('mouseleave', () => {
    actionButton.style.transform = 'translateY(0) scale(1)';
    actionButton.style.boxShadow = '0 4px 15px rgba(100, 108, 255, 0.3)';
    actionButton.style.background = 'linear-gradient(135deg, #646cff, #747bff)';
  });
  
  // Efecto parallax sutil en scroll (opcional)
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    heroImage.style.transform = `translateY(${parallax}px)`;
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick);
  
  // Responsive para móviles
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const handleMobileView = (e) => {
    if (e.matches) {
      // Estilos para móvil
      section.style.height = '400px'; // Más pequeño en móvil
      title.style.fontSize = '2rem';
      actionButton.style.fontSize = '1rem';
      actionButton.style.padding = '0.7rem 1.5rem';
      contentContainer.style.padding = '0 1rem';
    } else {
      // Estilos para desktop
      section.style.height = '600px'; // Más alto en desktop
      title.style.fontSize = '3rem';
      actionButton.style.fontSize = '1.1rem';
      actionButton.style.padding = '0.8rem 2rem';
      contentContainer.style.padding = '0 2rem';
    }
  };
  
  mediaQuery.addListener(handleMobileView);
  handleMobileView(mediaQuery);
  
  // Agregar estilos globales para forzar que toque los bordes
  if (!document.getElementById('foto-inicial-styles')) {
    const globalStyles = document.createElement('style');
    globalStyles.id = 'foto-inicial-styles';
    globalStyles.textContent = `
      .foto-inicial-hero {
        box-sizing: border-box !important;
        margin-left: calc(-50vw + 50%) !important;
        margin-right: calc(-50vw + 50%) !important;
        width: 100vw !important;
        max-width: none !important;
      }
      
      /* Asegurar que no haya márgenes en el contenedor padre */
      .foto-inicial-hero * {
        box-sizing: border-box;
      }
    `;
    document.head.appendChild(globalStyles);
  }

  // Ensamblar el componente
  contentContainer.appendChild(title);
  
  heroImage.appendChild(overlay);
  heroImage.appendChild(contentContainer);
  
  section.appendChild(heroImage);
  
  return section;
}