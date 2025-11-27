// ==========================================
//          COMPONENTE DIRECCIÓN
//         Ubicación y Horarios
// ==========================================

export function DireccionNueva() {
  const section = document.createElement('section');
  section.className = 'direccion-oficina';
  section.id = 'direccion';
  
  // Estilos del contenedor principal - Tema naranja suave con efecto de profundidad
  section.style.cssText = `
    width: 100%;
    max-width: 1000px;
    padding: 4rem 2.5rem;
    margin: 3rem 0;
    background: linear-gradient(135deg, rgba(251, 146, 60, 0.12), rgba(249, 115, 22, 0.06));
    border-radius: 24px;
    border: 2px solid rgba(251, 146, 60, 0.3);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 8px 32px rgba(251, 146, 60, 0.15), 0 0 80px rgba(251, 146, 60, 0.05);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    text-align: center;
    backdrop-filter: blur(10px);
  `;
  
  // Título principal con icono
  const mainTitle = document.createElement('h2');
  mainTitle.innerHTML = '¡¡Envia y Recoge tu paquete con Nosotros!!';
  mainTitle.style.cssText = `
    margin: 0 auto 3rem auto;
    font-size: 2.8rem;
    font-weight: 700;
    max-width: 800px;
    background: linear-gradient(135deg, #fb923c, #f97316, #fb923c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    line-height: 1.3;
    letter-spacing: 0.5px;
    animation: titlePulse 3s ease-in-out infinite;
  `;
  
  // Animación del título
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes titlePulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.95; transform: scale(1.02); }
    }
  `;
  document.head.appendChild(styleSheet);
  
  // Contenedor de información de dirección con diseño mejorado
  const addressContainer = document.createElement('div');
  addressContainer.style.cssText = `
    background: linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(249, 115, 22, 0.08));
    border-radius: 20px;
    padding: 2.5rem 3rem;
    margin: 2.5rem auto;
    border: 2px solid rgba(251, 146, 60, 0.4);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 750px;
    width: 100%;
    box-shadow: 0 4px 20px rgba(251, 146, 60, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  `;
  
  // Efecto de brillo decorativo
  const shine = document.createElement('div');
  shine.style.cssText = `
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  `;
  addressContainer.appendChild(shine);
  
  // Texto informativo sin subtítulo con icono
  const addressText = document.createElement('p');
  addressText.innerHTML = 'Si deseas recoger o enviar algún paquete puedes hacerlo en los siguientes centros';
  addressText.style.cssText = `
    margin: 0;
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 600;
    text-align: center;
    line-height: 1.6;
    position: relative;
    z-index: 1;
  `;
  
  addressContainer.appendChild(addressText);
  
  // Contenedor del mapa con diseño mejorado
  const mapContainer = document.createElement('div');
  mapContainer.style.cssText = `
    margin: 3rem auto;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(251, 146, 60, 0.25), 0 0 60px rgba(251, 146, 60, 0.1);
    border: 3px solid rgba(251, 146, 60, 0.5);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 800px;
    position: relative;
  `;
  
  // Mapa
  const mapFrame = document.createElement('iframe');
  mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d98596.85426888848!2d2.6646639!3d39.5722325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOficina%20de%20Correos!5e0!3m2!1ses!2ses!4v1732563900000!5m2!1ses!2ses';
  mapFrame.style.cssText = `
    width: 100%;
    height: 450px;
    border: none;
    display: block;
    transition: transform 0.3s ease;
  `;
  mapFrame.setAttribute('allowfullscreen', '');
  mapFrame.setAttribute('loading', 'lazy');
  mapFrame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  
  mapContainer.appendChild(mapFrame);
  
  // Efectos hover en el mapa mejorados
  mapContainer.addEventListener('mouseenter', () => {
    mapContainer.style.transform = 'translateY(-8px) scale(1.03)';
    mapContainer.style.boxShadow = '0 16px 50px rgba(251, 146, 60, 0.35), 0 0 80px rgba(251, 146, 60, 0.15)';
    mapContainer.style.borderColor = 'rgba(251, 146, 60, 0.7)';
  });
  
  mapContainer.addEventListener('mouseleave', () => {
    mapContainer.style.transform = 'translateY(0) scale(1)';
    mapContainer.style.boxShadow = '0 12px 40px rgba(251, 146, 60, 0.25), 0 0 60px rgba(251, 146, 60, 0.1)';
    mapContainer.style.borderColor = 'rgba(251, 146, 60, 0.5)';
  });
  
  // Contenedor de horarios con diseño premium
  const scheduleContainer = document.createElement('div');
  scheduleContainer.style.cssText = `
    background: linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(249, 115, 22, 0.08));
    border-radius: 20px;
    padding: 2.5rem 2rem;
    margin: 3rem auto;
    border: 2px solid rgba(251, 146, 60, 0.4);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 550px;
    width: 100%;
    box-shadow: 0 8px 30px rgba(251, 146, 60, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  `;
  
  // Título de horarios con efecto gradiente
  const scheduleTitle = document.createElement('h3');
  scheduleTitle.textContent = 'Nuestro Horario Habitual';
  scheduleTitle.style.cssText = `
    margin: 0 0 2rem 0;
    font-size: 2.2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #fb923c, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 2px 8px rgba(251, 146, 60, 0.3));
  `;
  
  // Contenedor de horarios específicos
  const scheduleDetails = document.createElement('div');
  scheduleDetails.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  `;
  
  // Horario de semana
  const weekdaySchedule = document.createElement('div');
  weekdaySchedule.style.cssText = `
    background: rgba(146, 251, 60, 0.2);
    padding: 1rem 2rem;
    border-radius: 25px;
    border: 1px solid rgba(130, 251, 60, 0.4);
    transition: all 0.3s ease;
  `;
  
  const weekdayText = document.createElement('p');
  weekdayText.textContent = 'Lunes a Viernes: 8:30 AM - 20:30 PM';
  weekdayText.style.cssText = `
    margin: 0;
    font-size: 1.3rem;
    color: #84fd74ff;
    font-weight: 600;
  `;
  
  weekdaySchedule.appendChild(weekdayText);
  
  // Horario de fin de semana
  const weekendSchedule = document.createElement('div');
  weekendSchedule.style.cssText = `
    background: rgba(239, 68, 68, 0.2);
    padding: 1rem 2rem;
    border-radius: 25px;
    border: 1px solid rgba(239, 68, 68, 0.4);
    transition: all 0.3s ease;
  `;
  
  const weekendText = document.createElement('p');
  weekendText.textContent = 'Sábados & Domingos: Cerrado';
  weekendText.style.cssText = `
    margin: 0;
    font-size: 1.3rem;
    color: #fca5a5;
    font-weight: 600;
  `;
  
  weekendSchedule.appendChild(weekendText);
  
  // Efectos hover en los horarios
  [weekdaySchedule, weekendSchedule].forEach(scheduleItem => {
    scheduleItem.addEventListener('mouseenter', () => {
      scheduleItem.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    scheduleItem.addEventListener('mouseleave', () => {
      scheduleItem.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  scheduleDetails.appendChild(weekdaySchedule);
  scheduleDetails.appendChild(weekendSchedule);
  
  scheduleContainer.appendChild(scheduleTitle);
  scheduleContainer.appendChild(scheduleDetails);
  
  // Efectos hover en los contenedores con animación de brillo
  addressContainer.addEventListener('mouseenter', () => {
    addressContainer.style.background = 'linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(249, 115, 22, 0.12))';
    addressContainer.style.transform = 'translateY(-4px)';
    addressContainer.style.boxShadow = '0 8px 30px rgba(251, 146, 60, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
    shine.style.left = '100%';
  });
  
  addressContainer.addEventListener('mouseleave', () => {
    addressContainer.style.background = 'linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(249, 115, 22, 0.08))';
    addressContainer.style.transform = 'translateY(0)';
    addressContainer.style.boxShadow = '0 4px 20px rgba(251, 146, 60, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
    shine.style.left = '-100%';
  });
  
  scheduleContainer.addEventListener('mouseenter', () => {
    scheduleContainer.style.background = 'linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(249, 115, 22, 0.12))';
    scheduleContainer.style.transform = 'translateY(-4px)';
    scheduleContainer.style.boxShadow = '0 12px 40px rgba(251, 146, 60, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
  });
  
  scheduleContainer.addEventListener('mouseleave', () => {
    scheduleContainer.style.background = 'linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(249, 115, 22, 0.08))';
    scheduleContainer.style.transform = 'translateY(0)';
    scheduleContainer.style.boxShadow = '0 8px 30px rgba(251, 146, 60, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
  });
  
  // ==========================================
  //           RESPONSIVE DESIGN
  // ==========================================
  const mediaQuery = window.matchMedia('(max-width: 800px)');
  const handleMobileView = (e) => {
    if (e.matches) {
      // Móvil
      section.style.padding = '2.5rem 1.5rem';
      mainTitle.style.fontSize = '2rem';
      scheduleTitle.style.fontSize = '1.7rem';
      addressText.style.fontSize = '1.15rem';
      mapFrame.style.height = '300px';
      
    } else {
      // Desktop
      section.style.padding = '4rem 2.5rem';
      mainTitle.style.fontSize = '2.8rem';
      scheduleTitle.style.fontSize = '2.2rem';
      addressText.style.fontSize = '1.4rem';
      mapFrame.style.height = '500px';
    }
  };
  
  mediaQuery.addListener(handleMobileView);
  handleMobileView(mediaQuery);
  
  // Efecto hover en toda la sección mejorado
  section.addEventListener('mouseenter', () => {
    section.style.transform = 'rotateX(1deg) translateY(-8px)';
    section.style.boxShadow = '0 16px 60px rgba(251, 146, 60, 0.3), 0 0 100px rgba(251, 146, 60, 0.1)';
    section.style.borderColor = 'rgba(251, 146, 60, 0.5)';
  });
  
  section.addEventListener('mouseleave', () => {
    section.style.transform = 'rotateX(0deg) translateY(0)';
    section.style.boxShadow = '0 8px 32px rgba(251, 146, 60, 0.15), 0 0 80px rgba(251, 146, 60, 0.05)';
    section.style.borderColor = 'rgba(251, 146, 60, 0.3)';
  });
  
  // Ensamblar componente
  section.appendChild(mainTitle);
  section.appendChild(addressContainer);
  section.appendChild(mapContainer);
  section.appendChild(scheduleContainer);
  
  return section;
}