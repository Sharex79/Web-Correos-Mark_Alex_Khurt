// ==========================================
//          COMPONENTE DIRECCIÓN
//         Ubicación y Horarios
// ==========================================

export function DireccionNueva() {
  const section = document.createElement('section');
  section.className = 'direccion-oficina';
  section.id = 'direccion';
  
  // Estilos del contenedor principal - Tema naranja suave
  section.style.cssText = `
    width: 100%;
    max-width: 900px;
    padding: 3rem 2rem;
    margin: 2rem 0;
    background: linear-gradient(135deg, rgba(251, 146, 60, 0.08), rgba(249, 115, 22, 0.04));
    border-radius: 16px;
    border: 1px solid rgba(251, 146, 60, 0.2);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    text-align: center;
  `;
  
  // Título principal
  const mainTitle = document.createElement('h2');
  mainTitle.textContent = '📍 Visítanos en nuestra oficina';
  mainTitle.style.cssText = `
    margin: 0 0 2rem 0;
    font-size: 2.5rem;
    font-weight: 500;
    max-width: 700px;
    color: #fb923c;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    line-height: 1.2;
  `;
  
  // Contenedor de información de dirección
  const addressContainer = document.createElement('div');
  addressContainer.style.cssText = `
    background: rgba(251, 146, 60, 0.1);
    border-radius: 12px;
    padding: 2rem;
    margin: 2rem auto;
    border: 1px solid rgba(251, 146, 60, 0.3);
    transition: all 0.3s ease;
    max-width: 700px;
    width: 100%;
  `;
  
  // Subtítulo de dirección
  const addressTitle = document.createElement('h3');
  addressTitle.textContent = 'Nuestra dirección:';
  addressTitle.style.cssText = `
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fb923c;
  `;
  
  // Dirección
  const addressText = document.createElement('p');
  addressText.textContent = 'Carrer Carles I, 6, Nord, 07003 Palma, Illes Balears';
  addressText.style.cssText = `
    margin: 0;
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
  `;
  
  addressContainer.appendChild(addressTitle);
  addressContainer.appendChild(addressText);
  
  // Contenedor del mapa
  const mapContainer = document.createElement('div');
  mapContainer.style.cssText = `
    margin: 2.5rem auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border: 3px solid rgba(251, 146, 60, 0.3);
    transition: all 0.3s ease;
    max-width: 700px;

  `;
  
  // Mapa
  const mapFrame = document.createElement('iframe');
  mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.7094436846766!2d2.6454878!3d39.578077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129793fce043025d%3A0x6fcb837f29f687f4!2sLURA!5e0!3m2!1sen!2ses!4v1699999999999!5m2!1sen!2ses';
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
  
  // Efectos hover en el mapa
  mapContainer.addEventListener('mouseenter', () => {
    mapContainer.style.transform = 'translateY(-5px) scale(1.02)';
    mapContainer.style.boxShadow = '0 12px 35px rgba(251, 146, 60, 0.2)';
  });
  
  mapContainer.addEventListener('mouseleave', () => {
    mapContainer.style.transform = 'translateY(0) scale(1)';
    mapContainer.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
  });
  
  // Contenedor de horarios
  const scheduleContainer = document.createElement('div');
  scheduleContainer.style.cssText = `
    background: rgba(251, 146, 60, 0.1);
    border-radius: 12px;
    padding: 2rem;
    margin: 2rem auto;
    border: 1px solid rgba(251, 146, 60, 0.3);
    transition: all 0.3s ease;
    max-width: 500px;
    width: 100%;
  `;
  
  // Título de horarios
  const scheduleTitle = document.createElement('h3');
  scheduleTitle.textContent = '🕒 Nuestro Horario Habitual';
  scheduleTitle.style.cssText = `
    margin: 0 0 1.5rem 0;
    font-size: 2rem;
    font-weight: 700;
    color: #fb923c;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
  weekdayText.textContent = 'Lunes a Viernes: 8:00 AM - 19:00 PM';
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
  
  // Efectos hover en los contenedores
  [addressContainer, scheduleContainer].forEach(container => {
    container.addEventListener('mouseenter', () => {
      container.style.background = 'rgba(251, 146, 60, 0.15)';
      container.style.transform = 'translateY(-2px)';
    });
    
    container.addEventListener('mouseleave', () => {
      container.style.background = 'rgba(251, 146, 60, 0.1)';
      container.style.transform = 'translateY(0)';
    });
  });
  
  // ==========================================
  //           RESPONSIVE DESIGN
  // ==========================================
  const mediaQuery = window.matchMedia('(max-width: 800px)');
  const handleMobileView = (e) => {
    if (e.matches) {
      // Móvil
      section.style.padding = '2rem 1rem';
      mainTitle.style.fontSize = '2rem';
      scheduleTitle.style.fontSize = '1.6rem';
      addressTitle.style.fontSize = '1.3rem';
      mapFrame.style.height = '250px';
      
    } else {
      // Desktop
      section.style.padding = '3rem 2rem';
      mainTitle.style.fontSize = '2.5rem';
      scheduleTitle.style.fontSize = '2rem';
      addressTitle.style.fontSize = '1.5rem';
      mapFrame.style.height = '350px';
    }
  };
  
  mediaQuery.addListener(handleMobileView);
  handleMobileView(mediaQuery);
  
  // Efecto hover en toda la sección - Igual que botones respuestas
  section.addEventListener('mouseenter', () => {
    section.style.transform = 'rotateX(2deg) translateY(-5px)';
    section.style.boxShadow = '0 12px 40px rgba(251, 146, 60, 0.2)';
  });
  
  section.addEventListener('mouseleave', () => {
    section.style.transform = 'rotateX(0deg) translateY(0)';
    section.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  });
  
  // Ensamblar componente
  section.appendChild(mainTitle);
  section.appendChild(addressContainer);
  section.appendChild(mapContainer);
  section.appendChild(scheduleContainer);
  
  return section;
}