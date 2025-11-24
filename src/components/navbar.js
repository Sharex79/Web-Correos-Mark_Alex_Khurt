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
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
  `;
  
  // Sección izquierda - Logo/Imagen
  const logoSection = document.createElement('div');
  logoSection.style.cssText = `
    display: flex;
    align-items: center;
  `;
  
  const logo = document.createElement('img');
  logo.src = '/Logo.png';
  logo.alt = 'Law Firm Logo';
  logo.style.cssText = `
    height: 60px;
    width: auto;
    transition: filter 0.3s ease;
    transform: translateX(-20px);
    cursor: pointer;
    filter: invert(1);
  `;
  
  // Funcionalidad para ir al inicio al hacer clic en el logo
  logo.addEventListener('click', () => {
    // Siempre recargar la página para restaurar todo
    if (window.volverAlInicio) {
      window.volverAlInicio();
    }
  });
  
  logo.addEventListener('mouseenter', () => {
    logo.style.filter = 'invert(1) brightness(1.2)';
  });
  
  logo.addEventListener('mouseleave', () => {
    logo.style.filter = 'invert(1)';
  });
  
  logoSection.appendChild(logo);
  
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
  
  // Menú desplegable
  const dropdownMenu = document.createElement('div');
  dropdownMenu.style.cssText = `
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #2a2a2a;
    border: 1px solid #404040;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    min-width: 200px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    margin-top: 0.5rem;
  `;
  
  // Opciones del menú con funcionalidad de navegación
  const menuItems = [
    { name: 'Inicio', target: 'inicio' },
    { name: 'Procuradores Mallorca', target: 'presentacion' },
    { name: 'Servicios Legales', target: 'explicacion' },
    { name: 'Preguntas', target: 'botones-respuestas' },
    { name: 'Dirección', target: 'direccion' },
    { name: 'Contacto', target: 'footer' }
  ];
  
  // Función para hacer scroll suave a una sección
  function scrollToSection(targetId) {
    // Verificar si todos los componentes originales están cargados
    const mainContent = document.querySelector('main');
    const formularioContainer = document.getElementById('formulario-container');
    const legalidadContainer = document.getElementById('legalidad-container');
    
    // Si el main no existe O si existe el formulario O si existe legalidad → recargar
    const componentesOriginalesNoCargados = !mainContent || formularioContainer || legalidadContainer;
    
    if (componentesOriginalesNoCargados) {
      // Si no están todos los componentes originales, recargar la página
      if (window.volverAlInicio) {
        window.volverAlInicio();
      }
      return;
    }
    
    // Si todos los componentes originales están cargados, hacer scroll normal
    if (targetId === 'inicio') {
      // Scroll al inicio de la página
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Buscar la sección por clase o ID
      let targetElement = document.getElementById(targetId);
      
      if (!targetElement) {
        // Buscar por clase si no se encuentra por ID
        const classSelectors = {
          'presentacion': '.presentacion-procurador',
          'explicacion': '.explicacion-servicios',
          'botones-respuestas': '.botones-respuestas',
          'direccion': '[class*="direccion"]',
          'footer': 'footer'
        };
        
        if (classSelectors[targetId]) {
          targetElement = document.querySelector(classSelectors[targetId]);
        }
      }
      
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 100; // 100px offset para la navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    
    // Cerrar el menú después de hacer clic
    isMenuOpen = false;
    dropdownMenu.style.opacity = '0';
    dropdownMenu.style.visibility = 'hidden';
    dropdownMenu.style.transform = 'translateY(-10px)';
    menuButton.innerHTML = '☰';
  }
  
  menuItems.forEach((item, index) => {
    const menuLink = document.createElement('a');
    menuLink.href = '#' + item.target;
    menuLink.textContent = item.name;
    menuLink.style.cssText = `
      display: block;
      padding: 1rem 1.5rem;
      color: rgba(255, 255, 255, 0.87);
      text-decoration: none;
      transition: background-color 0.3s ease;
      border-bottom: ${index < menuItems.length - 1 ? '1px solid #404040' : 'none'};
      cursor: pointer;
    `;
    
    // Agregar funcionalidad de navegación
    menuLink.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection(item.target);
    });
    
    menuLink.addEventListener('mouseenter', () => {
      menuLink.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
      menuLink.style.color = '#f97316';
    });
    
    menuLink.addEventListener('mouseleave', () => {
      menuLink.style.backgroundColor = 'transparent';
      menuLink.style.color = 'rgba(255, 255, 255, 0.87)';
    });
    
    dropdownMenu.appendChild(menuLink);
  });
  
  // Funcionalidad del menú desplegable
  let isMenuOpen = false;
  
  menuButton.addEventListener('mouseenter', () => {
    menuButton.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
  });
  
  menuButton.addEventListener('mouseleave', () => {
    menuButton.style.backgroundColor = 'transparent';
  });
  
  menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      dropdownMenu.style.opacity = '1';
      dropdownMenu.style.visibility = 'visible';
      dropdownMenu.style.transform = 'translateY(0)';
      menuButton.innerHTML = '✕';
    } else {
      dropdownMenu.style.opacity = '0';
      dropdownMenu.style.visibility = 'hidden';
      dropdownMenu.style.transform = 'translateY(-10px)';
      menuButton.innerHTML = '☰';
    }
  });
  
  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!menuSection.contains(e.target)) {
      isMenuOpen = false;
      dropdownMenu.style.opacity = '0';
      dropdownMenu.style.visibility = 'hidden';
      dropdownMenu.style.transform = 'translateY(-10px)';
      menuButton.innerHTML = '☰';
    }
  });
  
  menuSection.appendChild(menuButton);
  menuSection.appendChild(dropdownMenu);
  
  // Ensamblar la navbar
  nav.appendChild(logoSection);
  nav.appendChild(menuSection);
  
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
        
        // Cerrar menú si está abierto al ocultar navbar
        if (isMenuOpen) {
          dropdownMenu.style.opacity = '0';
          dropdownMenu.style.visibility = 'hidden';
          dropdownMenu.style.transform = 'translateY(-10px)';
          menuButton.innerHTML = '☰';
          isMenuOpen = false;
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
