// ==========================================
//           COMPONENTE FOOTER
//      75% ancho con bordes suaves
// ==========================================

export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'custom-footer';
  footer.id = 'footer';
  
  // Estilos propios del footer - Fondo sólido oscuro
  footer.style.cssText = `
    width: 75%;
    max-width: 1200px;
    margin: 3rem auto -2rem auto;
    padding: 2.5rem 2rem;
    background: rgba(36, 36, 36, 0.95);
    border-radius: 25px 25px 0 0;
    position: relative;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(255, 255, 255, 0.9);
  `;
  

  
  // Contenedor principal del footer
  const footerContent = document.createElement('div');
  footerContent.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 2;
    gap: 2rem;
  `;
  
  // ==========================================
  //         SECCIÓN PRINCIPAL - ACERCA DE
  // ==========================================
  const aboutSection = document.createElement('div');
  aboutSection.style.cssText = `
    text-align: center;
    max-width: 900px;
    width: 100%;
  `;
  
  const aboutTitle = document.createElement('h3');
  aboutTitle.textContent = '🚀 Acerca de 🚀';
  aboutTitle.style.cssText = `
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ff9100ff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    text-decoration: underline overline;
    text-underline-offset: 12px;        /* Subrayado más separado */
    text-decoration-thickness: 1.5px;  /* Líneas más gruesas */
    text-decoration-color: #f79c138f  /* Color con opacidad */
  `;
  
  const aboutText = document.createElement('p');
  aboutText.textContent = 'Ofrecemos servicios jurídicos profesionales con más de 15 años de experiencia en los tribunales de Mallorca. Representación legal confiable y especializada en todos los partidos judiciales de las Islas Baleares.';
  aboutText.style.cssText = `
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.8;
    color: rgba(255, 255, 255, 0.7);
  `;
  
  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(aboutText);
  
  // ==========================================
  //            SECCIÓN SÍGUEME
  // ==========================================
  const socialSection = document.createElement('div');
  socialSection.style.cssText = `
    text-align: center;
  `;
  
  const socialTitle = document.createElement('h3');
  socialTitle.textContent = '🌐 Sígueme 🌐';
  socialTitle.style.cssText = `
  
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ff9100ff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    text-decoration: underline overline;
    text-underline-offset: 12px;        /* Subrayado más separado */
    text-decoration-thickness: 1.5px;  /* Líneas más gruesas */
    text-decoration-color: #f79c138f;  /* Color con opacidad */
  `;
  
  const socialLinks = document.createElement('div');
  socialLinks.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  `;
  
  const socials = [
    { name: 'LinkedIn', icon: '💼', color: '#f97316', url: 'https://linkedin.com/in/tu-perfil' },
    { name: 'Email', icon: '📧', color: '#fb923c', url: 'mailto:tu-email@ejemplo.com' }
  ];
  
  socials.forEach(social => {
    const socialLink = document.createElement('a');
    socialLink.href = social.url;
    socialLink.target = '_blank';  // Abrir en nueva pestaña
    socialLink.rel = 'noopener noreferrer';  // Seguridad
    socialLink.innerHTML = `${social.icon} ${social.name}`;
    socialLink.style.cssText = `
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.15s ease;
      padding: 0.6rem 1.2rem;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      display: inline-block;
      white-space: nowrap;
    `;
    
    socialLink.addEventListener('mouseenter', () => {
      socialLink.style.color = social.color;
      socialLink.style.borderColor = social.color + '40';
      socialLink.style.backgroundColor = social.color + '10';
      socialLink.style.transform = 'translateY(-3px) scale(1.05)';
      socialLink.style.boxShadow = `0 6px 20px ${social.color}40`;
    });
    
    socialLink.addEventListener('mouseleave', () => {
      socialLink.style.color = 'rgba(255, 255, 255, 0.7)';
      socialLink.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      socialLink.style.backgroundColor = 'transparent';
      socialLink.style.transform = 'translateY(0) scale(1)';
      socialLink.style.boxShadow = 'none';
    });
    
    socialLinks.appendChild(socialLink);
  });
  
  socialSection.appendChild(socialTitle);
  socialSection.appendChild(socialLinks);
  
  // ==========================================
  //            SECCIÓN LEGALIDAD
  // ==========================================
  const legalSection = document.createElement('div');
  legalSection.style.cssText = `
    text-align: center;
    position: relative;
    transition: all 0.15s ease;
  `;
  
  // Botón principal de Legalidad
  const legalButton = document.createElement('button');
  legalButton.innerHTML = '⚖️ Legalidad';
  legalButton.style.cssText = `
    background: linear-gradient(135deg, #f59f00ff, #fc9700ff);
    border: none;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0.8rem 2rem;
    border-radius: 12px;
    transition: all 0.15s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
    position: relative;
    z-index: 10;
  `;
  
  // Contenedor de opciones legales (inicialmente oculto)
  const legalDropdown = document.createElement('div');
  legalDropdown.style.cssText = `
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    max-height: 0;
    overflow: hidden;
  `;
  
  // Opciones legales
  const legalOptions = [
    { name: 'Accesibilidad', icon: '📋', color: '#f97316', tipo: 'accesibilidad' },
    { name: 'Avisos Legales', icon: '⚠️', color: '#fb923c', tipo: 'avisos-legales' },
    { name: 'Política Cookies', icon: '🍪', color: '#ea580c', tipo: 'politica-cookies' },
    { name: 'Términos y Condiciones', icon: '🛡️', color: '#ff9f40', tipo: 'terminos-condiciones' },
  ];
  
  legalOptions.forEach((option, index) => {
    const optionButton = document.createElement('button');
    optionButton.innerHTML = `${option.icon} ${option.name}`;
    optionButton.style.cssText = `
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.15s ease;
      padding: 0.6rem 1.5rem;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(5px);
      display: inline-block;
      transform: translateY(10px);
      opacity: 0;
      transition-delay: ${index * 0.05}s;
      cursor: pointer;
    `;
    
    // Click para mostrar el componente legal
    optionButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (window.mostrarLegalidad) {
        window.mostrarLegalidad(option.tipo);
      }
    });
    
    // Efectos hover para cada opción
    optionButton.addEventListener('mouseenter', () => {
      optionButton.style.color = option.color;
      optionButton.style.borderColor = option.color + '60';
      optionButton.style.backgroundColor = option.color + '15';
      optionButton.style.transform = 'translateY(0) scale(1.05)';
      optionButton.style.boxShadow = `0 4px 15px ${option.color}40`;
    });
    
    optionButton.addEventListener('mouseleave', () => {
      optionButton.style.color = 'rgba(255, 255, 255, 0.8)';
      optionButton.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      optionButton.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      optionButton.style.transform = 'translateY(0) scale(1)';
      optionButton.style.boxShadow = 'none';
    });
    
    legalDropdown.appendChild(optionButton);
  });
  
  // Funcionalidad del dropdown (similar al navbar)
  let isLegalOpen = false;
  
  // Efecto hover del botón principal
  legalButton.addEventListener('mouseenter', () => {
    if (!isLegalOpen) {
      legalButton.style.background = 'linear-gradient(135deg, #ea580c, #c2410c)';
      legalButton.style.transform = 'translateY(-2px)';
      legalButton.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.4)';
    }
  });
  
  legalButton.addEventListener('mouseleave', () => {
    if (!isLegalOpen) {
      legalButton.style.background = 'linear-gradient(135deg, #f59f00ff, #fc9700ff)';
      legalButton.style.transform = 'translateY(0)';
      legalButton.style.boxShadow = '0 4px 15px rgba(249, 159, 0, 0.3)';
    }
  });
  
  // Click para abrir/cerrar dropdown
  legalButton.addEventListener('click', () => {
    isLegalOpen = !isLegalOpen;
    
    if (isLegalOpen) {
      // Abrir dropdown
      legalDropdown.style.opacity = '1';
      legalDropdown.style.visibility = 'visible';
      legalDropdown.style.transform = 'translateY(0)';
      legalDropdown.style.maxHeight = '400px';
      
      // Animar botones individuales
      const options = legalDropdown.children;
      Array.from(options).forEach((option, index) => {
        setTimeout(() => {
          option.style.opacity = '1';
          option.style.transform = 'translateY(0)';
        }, index * 50);
      });
      
      // Cambiar apariencia del botón principal
      legalButton.innerHTML = '✕ Cerrar';
      legalButton.style.background = 'linear-gradient(135deg, #c2410c, #9a3412)';
      legalButton.style.boxShadow = '0 6px 20px rgba(194, 65, 12, 0.4)';
      
    } else {
      // Cerrar dropdown
      legalDropdown.style.opacity = '0';
      legalDropdown.style.visibility = 'hidden';
      legalDropdown.style.transform = 'translateY(-20px)';
      legalDropdown.style.maxHeight = '0';
      
      // Ocultar botones individuales
      const options = legalDropdown.children;
      Array.from(options).forEach((option) => {
        option.style.opacity = '0';
        option.style.transform = 'translateY(10px)';
      });
      
      // Restaurar botón principal
      legalButton.innerHTML = '⚖️ Legalidad';
      legalButton.style.background = 'linear-gradient(135deg, #f59f00ff, #fc9700ff)';
      legalButton.style.boxShadow = '0 4px 15px rgba(249, 159, 0, 0.3)';
    }
  });
  
  // Cerrar al hacer clic fuera (como en el navbar)
  document.addEventListener('click', (e) => {
    if (!legalSection.contains(e.target) && isLegalOpen) {
      // Simular click en el botón para cerrar
      legalButton.click();
    }
  });
  
  legalSection.appendChild(legalButton);
  legalSection.appendChild(legalDropdown);
  
  // ==========================================
  //          LÍNEA DIVISORIA 1 (ENTRE ABOUT Y SOCIAL)
  // ==========================================
  const divider1 = document.createElement('div');
  divider1.style.cssText = `
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    margin: 1.5rem 0;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 3px rgba(255, 255, 255, 0.1);
  `;
  
  // ==========================================
  //          LÍNEA DIVISORIA 2 (ENTRE SOCIAL Y LEGALIDAD)
  // ==========================================
  const divider2 = document.createElement('div');
  divider2.style.cssText = `
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    margin: 1.5rem 0;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 3px rgba(255, 255, 255, 0.1);
  `;
  
  // ==========================================
  //          LÍNEA DIVISORIA 3 (ANTES DEL COPYRIGHT)
  // ==========================================
  const divider3 = document.createElement('div');
  divider3.style.cssText = `
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    margin: 1rem 0;
    position: relative;
    z-index: 2;
  `;
  
  // ==========================================
  //              COPYRIGHT
  // ==========================================
  const copyright = document.createElement('div');
  copyright.style.cssText = `
    text-align: center;
    position: relative;
    z-index: 2;
  `;
  
  const copyrightText = document.createElement('p');
  copyrightText.innerHTML = '© 2025 <span style="color: #646cff; font-weight: 600;">Sharex</span> - Hecho con Vite : JavaScript';
  copyrightText.style.cssText = `
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.6;
    color: rgba(255, 255, 255, 0.6);
  `;
  
  copyright.appendChild(copyrightText);
  
  // ==========================================
  //            EFECTOS INTERACTIVOS
  // ==========================================
  
  // Responsive para móviles
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const handleMobileView = (e) => {
    if (e.matches) {
      footer.style.width = '90%';
      socialLinks.style.gap = '1rem';
    } else {
      footer.style.width = '75%';
      socialLinks.style.gap = '1.5rem';
    }
  };
  
  mediaQuery.addListener(handleMobileView);
  handleMobileView(mediaQuery);
  
  // ==========================================
  //              ENSAMBLAR FOOTER
  // ==========================================
  
  footerContent.appendChild(aboutSection);    // 🚀 Acerca de + texto
  footerContent.appendChild(divider1);        // ─── Línea divisoria 1
  footerContent.appendChild(socialSection);   // 🌐 Sígueme + redes sociales
  footerContent.appendChild(divider2);        // ─── Línea divisoria 2
  footerContent.appendChild(legalSection);    // ⚖️ Legalidad + dropdown
  footerContent.appendChild(divider3);        // ─── Línea divisoria 3
  footerContent.appendChild(copyright);       // © Copyright
  
  footer.appendChild(footerContent);
  
  return footer;
}