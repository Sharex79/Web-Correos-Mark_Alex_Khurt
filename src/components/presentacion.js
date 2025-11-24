// ==========================================
//          COMPONENTE PRESENTACIÓN
//       Perfil Profesional - Procurador
// ==========================================

export function Presentacion() {
  const section = document.createElement('section');
  section.className = 'presentacion-procurador';
  section.id = 'presentacion';
  
  // Estilos del contenedor principal - Tema naranja rojizo
  section.style.cssText = `
    width: 100%;
    max-width: 1000px;
    padding: 3rem 2rem;
    margin: 2rem 0;
    background: linear-gradient(135deg, rgba(234, 88, 12, 0.08), rgba(249, 115, 22, 0.04));
    border-radius: 16px;
    border: 1px solid rgba(234, 88, 12, 0.2);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  `;
  
  // Contenedor del perfil (foto + información)
  const profileContainer = document.createElement('div');
  profileContainer.style.cssText = `
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    align-items: start;
  `;
  
  // ==========================================
  //             SECCIÓN FOTO
  // ==========================================
  const photoContainer = document.createElement('div');
  photoContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `;
  
  // Marco de la foto
  const photoFrame = document.createElement('div');
  photoFrame.style.cssText = `
    width: 280px;
    height: 380px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border: 3px solid rgba(234, 88, 12, 0.3);
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  `;
  
  // Foto del procurador
  const photo = document.createElement('img');
  photo.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
  photo.alt = 'Gabriel Tomás Gili - Procurador';
  photo.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  `;
  
  // Efectos hover en la foto
  photoFrame.addEventListener('mouseenter', () => {
    photoFrame.style.transform = 'translateY(-5px) scale(1.02)';
    photoFrame.style.boxShadow = '0 12px 35px rgba(234, 88, 12, 0.2)';
    photo.style.transform = 'scale(1.05)';
  });
  
  photoFrame.addEventListener('mouseleave', () => {
    photoFrame.style.transform = 'translateY(0) scale(1)';
    photoFrame.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
    photo.style.transform = 'scale(1)';
  });
  
  photoFrame.appendChild(photo);
  photoContainer.appendChild(photoFrame);
  
  // ==========================================
  //          SECCIÓN INFORMACIÓN
  // ==========================================
  const infoContainer = document.createElement('div');
  infoContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;
  `;
  
  // Título principal
  const mainTitle = document.createElement('h2');
  mainTitle.textContent = 'Procuradores Mallorca';
  mainTitle.style.cssText = `
    margin: 0;
    font-size: 2.5rem;
    font-weight: 700;
    color: #ea580c;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    line-height: 1.2;
  `;
  
  // Nombre del procurador
  const procuratorName = document.createElement('h3');
  procuratorName.textContent = 'Gabriel Tomás Gili';
  procuratorName.style.cssText = `
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  `;
  
  // Información profesional
  const professionalInfo = document.createElement('div');
  professionalInfo.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(234, 88, 12, 0.1);
    border-radius: 10px;
    border-left: 4px solid #ea580c;
    width: 100%;
  `;
  
  // Colegiado
  const collegiateInfo = document.createElement('p');
  collegiateInfo.innerHTML = '<strong>Procurador Colegiado ICPIB nº 120</strong>';
  collegiateInfo.style.cssText = `
    margin: 0;
    font-size: 1.2rem;
    color: #fb923c;
    font-weight: 500;
  `;
  
  // Partidos Judiciales
  const judicialParties = document.createElement('div');
  judicialParties.style.cssText = `
    margin-top: 1rem;
  `;
  
  const judicialTitle = document.createElement('h4');
  judicialTitle.textContent = 'Partidos Judiciales:';
  judicialTitle.style.cssText = `
    margin: 0 0 0.8rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
  `;
  
  const partiesList = document.createElement('div');
  partiesList.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  `;
  
  const parties = ['Palma', 'Manacor', 'Inca', 'Otros por encargo'];
  parties.forEach(party => {
    const partyTag = document.createElement('span');
    partyTag.textContent = party;
    partyTag.style.cssText = `
      background: rgba(234, 88, 12, 0.2);
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: 0.95rem;
      border: 1px solid rgba(234, 88, 12, 0.4);
      color: #fdba74;
      font-weight: 500;
      transition: all 0.3s ease;
    `;
    
    // Efecto hover en cada tag
    partyTag.addEventListener('mouseenter', () => {
      partyTag.style.background = 'rgba(234, 88, 12, 0.3)';
      partyTag.style.transform = 'translateY(-1px)';
      partyTag.style.color = '#dbeafe';
    });
    
    partyTag.addEventListener('mouseleave', () => {
      partyTag.style.background = 'rgba(234, 88, 12, 0.2)';
      partyTag.style.transform = 'translateY(0)';
      partyTag.style.color = '#fdba74';
    });
    
    partiesList.appendChild(partyTag);
  });
  
  judicialParties.appendChild(judicialTitle);
  judicialParties.appendChild(partiesList);
  
  professionalInfo.appendChild(collegiateInfo);
  professionalInfo.appendChild(judicialParties);
  
  // Descripción profesional
  const professionalDescription = document.createElement('div');
  professionalDescription.style.cssText = `
    padding: 1.5rem;
    background: rgba(234, 88, 12, 0.05);
    border-radius: 10px;
    border: 1px solid rgba(234, 88, 12, 0.15);
    margin: 1rem 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    display: block;
  `;
  
  const descriptionTitle = document.createElement('h4');
  descriptionTitle.textContent = 'Experiencia Profesional';
  descriptionTitle.style.cssText = `
    margin: 0 0 1.5rem 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #fb923c;
    text-align: center;
  `;
  
  const descriptionText = document.createElement('p');
  descriptionText.innerHTML = `Con más de <strong>15 años de experiencia</strong> en el ejercicio de la procuraduría, Gabriel Tomás Gili ha desarrollado una carrera sólida representando a clientes en los principales juzgados de Mallorca. Su dedicación al detalle y conocimiento profundo del sistema judicial balear lo convierten en un profesional de confianza para la gestión de sus trámites procesales.
  <br><br>
  Especializado en la agilización de procedimientos y la comunicación fluida entre todas las partes del proceso judicial, garantiza un servicio personalizado y eficiente en cada caso.`;
  descriptionText.style.cssText = `
    margin: 0;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    font-size: 1rem;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
  `;
  
  professionalDescription.appendChild(descriptionTitle);
  professionalDescription.appendChild(descriptionText);
  
  // Botón de contacto
  const contactButton = document.createElement('button');
  contactButton.innerHTML = '� Consulta Jurídica';
  contactButton.style.cssText = `
    display: block;
    margin: 2rem auto 0 auto;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #ea580c, #c2410c);
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3);
  `;
  
  contactButton.addEventListener('mouseenter', () => {
    contactButton.style.transform = 'translateY(-3px) scale(1.05)';
    contactButton.style.boxShadow = '0 8px 25px rgba(234, 88, 12, 0.4)';
    contactButton.style.background = 'linear-gradient(135deg, #c2410c, #9a3412)';
  });
  
  contactButton.addEventListener('mouseleave', () => {
    contactButton.style.transform = 'translateY(0) scale(1)';
    contactButton.style.boxShadow = '0 4px 15px rgba(234, 88, 12, 0.3)';
    contactButton.style.background = 'linear-gradient(135deg, #ea580c, #c2410c)';
  });
  
  // Funcionalidad del botón - Abrir formulario de contacto
  contactButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.mostrarFormulario) {
      window.mostrarFormulario();
    }
  });
  
  // Ensamblar información
  infoContainer.appendChild(mainTitle);
  infoContainer.appendChild(procuratorName);
  infoContainer.appendChild(professionalInfo);
  
  // ==========================================
  //           RESPONSIVE DESIGN
  // ==========================================
  const mediaQuery = window.matchMedia('(max-width: 800px)');
  const handleMobileView = (e) => {
    if (e.matches) {
      // Móvil: columna única
      profileContainer.style.gridTemplateColumns = '1fr';
      profileContainer.style.gap = '2rem';
      profileContainer.style.textAlign = 'center';
      
      // Ajustar foto para móvil
      photoFrame.style.width = '220px';
      photoFrame.style.height = '300px';
      photoContainer.style.alignItems = 'center';
      
      // Ajustar títulos
      mainTitle.style.fontSize = '2rem';
      procuratorName.style.fontSize = '1.6rem';
      
    } else {
      // Desktop: restaurar grid
      profileContainer.style.gridTemplateColumns = '300px 1fr';
      profileContainer.style.gap = '3rem';
      profileContainer.style.textAlign = 'left';
      
      // Restaurar foto
      photoFrame.style.width = '280px';
      photoFrame.style.height = '380px';
      
      // Restaurar títulos
      mainTitle.style.fontSize = '2.5rem';
      procuratorName.style.fontSize = '2rem';
    }
  };
  
  mediaQuery.addListener(handleMobileView);
  handleMobileView(mediaQuery);
  
  // Efecto hover en toda la sección - Igual que botones respuestas
  section.addEventListener('mouseenter', () => {
    section.style.transform = 'rotateX(2deg) translateY(-5px)';
    section.style.boxShadow = '0 12px 40px rgba(234, 88, 12, 0.2)';
  });
  
  section.addEventListener('mouseleave', () => {
    section.style.transform = 'rotateX(0deg) translateY(0)';
    section.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  });
  
  // Ensamblar componente principal
  profileContainer.appendChild(photoContainer);
  profileContainer.appendChild(infoContainer);
  section.appendChild(profileContainer);
  
  // Agregar la descripción profesional DESPUÉS del grid, ocupando todo el ancho
  section.appendChild(professionalDescription);
  
  // Agregar el botón DESPUÉS de la descripción profesional, centrado
  section.appendChild(contactButton);
  
  return section;
}