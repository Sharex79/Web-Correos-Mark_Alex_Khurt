export function Navbar() {
  const nav = document.createElement('nav');
  nav.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background-color: rgba(36, 36, 36, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #404040;
    z-index: 1000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
    gap: 1rem;
  `;
  
  // Sección izquierda - Logo/Imagen
  const logoSection = document.createElement('div');
  logoSection.style.cssText = `
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  `;
  
  const logo = document.createElement('img');
  logo.src = '/Correos_Icon.png';
  logo.alt = 'Correos Logo';
  logo.style.cssText = `
    height: 60px;
    width: auto;
    transition: filter 0.3s ease;
    transform: none;
    cursor: pointer;
    filter: invert(1);
  `;
  
  // Función para volver al inicio con animación
  function volverAlInicioDesdeNavbar() {
    // Desvanecer todo el contenido actual
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    
    // Después de la animación, navegar al inicio
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  }

  // Funcionalidad para ir al inicio al hacer clic en el logo
  logo.addEventListener('click', () => {
    volverAlInicioDesdeNavbar();
  });
  
  logo.addEventListener('mouseenter', () => {
    logo.style.filter = 'invert(1) brightness(1.2)';
  });
  
  logo.addEventListener('mouseleave', () => {
    logo.style.filter = 'invert(1)';
  });
  
  logoSection.appendChild(logo);

  // Separador vertical entre logo y botón
  const separator = document.createElement('div');
  separator.setAttribute('aria-hidden', 'true');
  separator.style.cssText = `
    width: 1px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 0 0.75rem;
  `;
  
  // Sección derecha - Menú hamburguesa
  const menuSection = document.createElement('div');
  menuSection.style.cssText = `
    position: relative;
  `;
  
  // Botón hamburguesa
  const menuButton = document.createElement('button');
  menuButton.innerHTML = '☰';
  menuButton.style.cssText = `
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.87);
    font-size: 2.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    min-width: 64px;
    min-height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  // Panel lateral (slide-out) + overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 90px; /* debajo de la navbar */
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.45);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
    z-index: 990; /* por debajo de la navbar (1000) */
  `;

  const sidePanel = document.createElement('aside');
  sidePanel.style.cssText = `
    position: fixed;
    top: 90px; /* debajo de la navbar */
    left: 0;
    height: calc(100vh - 90px);
    width: min(90vw, 360px);
    background-color: #202020;
    border-right: 1px solid #404040;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 995; /* por debajo de la navbar, por encima del contenido */
    display: flex;
    flex-direction: column;
    padding: 0.75rem 0 0 0; /* eliminar espacio inferior para pegar el footer al fondo */
    box-sizing: border-box;
  `;

  const panelList = document.createElement('nav');
  panelList.style.cssText = `
    display: block;
    padding-top: 0;
    flex: 1 1 auto;
    overflow-y: auto;
  `;

  // Enlaces inferiores (no funcionales): Feedback, Ayuda, Ajustes
  const bottomLinks = document.createElement('div');
  bottomLinks.style.cssText = `
    background-color: #202020;
    border-top: 1px solid #404040;
  `;

  function makeBottomLink(label, url = null) {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = label;
    a.style.cssText = `
      display: block;
      padding: 0.9rem 1.25rem;
      color: rgba(255,255,255,0.87) !important;
      text-decoration: none;
      transition: background-color 0.3s ease, color 0.2s ease;
      cursor: ${url ? 'pointer' : 'default'};
      border-bottom: 1px solid #2b2b2b;
    `;
    
    a.addEventListener('click', (e) => {
      e.preventDefault();
      if (url) {
        // Animación de desvanecimiento antes de navegar
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '0';
        setTimeout(() => {
          window.location.href = url;
        }, 500);
      }
    });
    
    a.addEventListener('mouseenter', () => {
      a.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
      a.style.setProperty('color', '#f97316', 'important');
    });
    a.addEventListener('mouseleave', () => {
      a.style.backgroundColor = 'transparent';
      a.style.setProperty('color', 'rgba(255,255,255,0.87)', 'important');
    });
    return a;
  }

  // Orden de arriba hacia abajo: Feedback, Ayuda, Ajustes
  bottomLinks.appendChild(makeBottomLink('Feedback', '/Feedback.html'));
  bottomLinks.appendChild(makeBottomLink('Ajustes'));

  // Footer de idiomas (al fondo del panel)
  const langFooter = document.createElement('div');
  langFooter.style.cssText = `
    margin-top: auto;
    background-color: #242424;
    padding: 1rem 1.25rem 1.25rem 1.25rem;
    color: rgba(255,255,255,0.92);
    border-top: 1px solid #404040;
  `;

  const langLabel = document.createElement('div');
  langLabel.textContent = 'Idioma:';
  langLabel.style.cssText = `
    font-size: 1rem;
    margin-bottom: 0.6rem;
    opacity: 0.95;
  `;

  const langList = document.createElement('div');
  langList.style.cssText = `
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  `;

  const languages = [
    { code: 'ES', lang: 'es' },
    { code: 'CA', lang: 'ca' },
    { code: 'EU', lang: 'eu' }
  ];
  let selectedLang = 'ES';
  
  languages.forEach((item) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = item.code;
    btn.setAttribute('data-lang', item.code);
    
    // ES siempre iluminado en naranja
    const isSelected = item.code === selectedLang;
    btn.style.cssText = `
      background: transparent;
      border: none;
      outline: none;
      color: ${isSelected ? '#f97316' : 'rgba(255,255,255,0.92)'} !important;
      padding: 0;
      cursor: pointer;
      font-size: 1.05rem;
      font-weight: ${isSelected ? '700' : '500'};
      letter-spacing: 0.02em;
      transition: color 0.2s ease;
    `;
    
    // Remover el círculo de enfoque
    btn.addEventListener('focus', () => {
      btn.style.outline = 'none';
    });
    
    btn.addEventListener('click', () => {
      selectedLang = item.code;
      
      // Actualizar estilos de todos los botones
      Array.from(langList.children).forEach((el) => {
        const isActive = el.getAttribute('data-lang') === selectedLang;
        el.style.setProperty('color', isActive ? '#f97316' : 'rgba(255,255,255,0.92)', 'important');
        el.style.fontWeight = isActive ? '700' : '500';
      });
    });
    
    btn.addEventListener('mouseenter', () => {
      if (item.code !== selectedLang) {
        btn.style.setProperty('color', '#f97316', 'important');
      }
      btn.style.textDecoration = 'underline';
    });
    
    btn.addEventListener('mouseleave', () => {
      if (item.code !== selectedLang) {
        btn.style.setProperty('color', 'rgba(255,255,255,0.92)', 'important');
      }
      btn.style.textDecoration = 'none';
    });
    
    langList.appendChild(btn);
  });

  langFooter.appendChild(langLabel);
  langFooter.appendChild(langList);
  
  // Función para volver al inicio con animación
  function volverAlInicio() {
    // Desvanecer todo el contenido actual
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    
    // Después de la animación, navegar al inicio
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  }

  // Botón "Volver" en el menú
  const volverLink = document.createElement('a');
  volverLink.href = '#';
  volverLink.textContent = 'Volver al Inicio';
  volverLink.style.cssText = `
    display: block;
    padding: 1.2rem 1.5rem;
    color: rgba(255, 255, 255, 0.87) !important;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.2s ease;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.05rem;
  `;
  
  volverLink.addEventListener('click', (e) => {
    e.preventDefault();
    closePanel();
    volverAlInicio();
  });
  
  volverLink.addEventListener('mouseenter', () => {
    volverLink.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
    volverLink.style.setProperty('color', '#f97316', 'important');
  });
  
  volverLink.addEventListener('mouseleave', () => {
    volverLink.style.backgroundColor = 'transparent';
    volverLink.style.setProperty('color', 'rgba(255, 255, 255, 0.87)', 'important');
  });
  
  panelList.appendChild(volverLink);
  
  // Funcionalidad del panel lateral
  let isMenuOpen = false;

  function openPanel() {
    isMenuOpen = true;
    sidePanel.style.transform = 'translateX(0)';
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    menuButton.innerHTML = '✕';
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    isMenuOpen = false;
    sidePanel.style.transform = 'translateX(-100%)';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    menuButton.innerHTML = '☰';
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  
  menuButton.addEventListener('mouseenter', () => {
    menuButton.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
  });
  
  menuButton.addEventListener('mouseleave', () => {
    menuButton.style.backgroundColor = 'transparent';
  });
  
  menuButton.addEventListener('click', () => {
    if (isMenuOpen) closePanel(); else openPanel();
  });
  
  // Cerrar al hacer clic en overlay o tecla ESC
  overlay.addEventListener('click', () => closePanel());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) closePanel();
  });
  
  menuSection.appendChild(menuButton);
  sidePanel.appendChild(panelList);
  sidePanel.appendChild(bottomLinks);
  sidePanel.appendChild(langFooter);
  // Agregar overlay y panel al body para cubrir toda la pantalla
  document.body.appendChild(overlay);
  document.body.appendChild(sidePanel);
  
  // Sección derecha - Icono flecha atrás
  const rightIconsSection = document.createElement('div');
  rightIconsSection.style.cssText = `
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 0.75rem;
    margin-right: 0.5rem;
  `;

  // Icono flecha hacia atrás (SVG)
  const backIcon = document.createElement('button');
  backIcon.innerHTML = `<svg width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:auto;"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`;
  backIcon.style.cssText = `
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.87);
    font-size: 2.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    min-width: 64px;
    min-height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    text-align: center;
    vertical-align: middle;
  `;
  
  backIcon.addEventListener('click', () => {
    volverAlInicioDesdeNavbar();
  });
  
  backIcon.addEventListener('mouseenter', () => {
    backIcon.style.background = 'rgba(249, 115, 22, 0.1)';
    backIcon.style.transform = 'translateX(-3px)';
  });
  
  backIcon.addEventListener('mouseleave', () => {
    backIcon.style.background = 'transparent';
    backIcon.style.transform = 'translateX(0)';
  });

  rightIconsSection.appendChild(backIcon);

  // Ensamblar la navbar
  nav.appendChild(logoSection);
  nav.appendChild(separator);
  nav.appendChild(menuSection);
  nav.appendChild(rightIconsSection);
  
  // ==========================================
  //     FUNCIONALIDAD DE SCROLL INTELIGENTE
  // ==========================================
  
  let lastScrollTop = 0;
  let isScrolling = false;
  
  // Agregar transición suave a la navbar
  nav.style.transition = 'transform 0.3s ease-in-out';
  
  window.addEventListener('scroll', () => {
    // Evitar múltiples ejecuciones simultáneas
    if (isScrolling) return;
    isScrolling = true;
    
    requestAnimationFrame(() => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Si estamos en la parte superior (primeros 100px), siempre mostrar
      if (currentScrollTop <= 100) {
        nav.style.transform = 'translateY(0)';
      }
      // Si bajamos, ocultar navbar
      else if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        nav.style.transform = 'translateY(-100%)';
        
        // Cerrar panel si está abierto al ocultar navbar
        if (isMenuOpen) {
          closePanel();
        }
      }
      // Si subimos, mostrar navbar
      else if (currentScrollTop < lastScrollTop) {
        nav.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = currentScrollTop;
      isScrolling = false;
    });
  });
  
  return nav;
}  
