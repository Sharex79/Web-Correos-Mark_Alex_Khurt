// ==========================================
//          COMPONENTE EXPLICACIÓN
//        Servicios legales mosaico
// ==========================================

export function Explicacion() {
  const section = document.createElement('section');
  section.className = 'explicacion-servicios';
  section.id = 'explicacion';
  
  // Estilos propios - Layout mosaico - Tema naranja dorado
  section.style.cssText = `
    width: 100%;
    max-width: 1200px;
    padding: 3rem 2rem;
    margin: 2rem 0;
    background: linear-gradient(135deg, rgba(255, 159, 64, 0.08), rgba(251, 146, 60, 0.03));
    border-radius: 16px;
    border: 1px solid rgba(255, 159, 64, 0.2);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  `;
  
  // Título principal centrado
  const title = document.createElement('h2');
  title.textContent = '⚖️ Servicios de Procurador';
  title.style.cssText = `
    margin: 0 0 3rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    color: #ff9f40;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    text-align: center;
  `;
  
  // Contenedor de mosaico
  const mosaicContainer = document.createElement('div');
  mosaicContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 4rem;
  `;
  
  // Datos del mosaico
  const mosaicData = [
    {
      title: 'Agilización de Procesos Judiciales',
      text: `Los Procuradores agilizan los procesos judiciales siguiendo meticulosamente todos los procedimientos desde la presentación de la demanda hasta la sentencia final.

Nos ocupamos de solucionar buena parte de los obstáculos técnicos y administrativos que podrían retrasar el procedimiento, garantizando que tu caso avance de manera eficiente y sin demoras innecesarias.`,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'right'
    },
    {
      title: 'Gestión Integral de Trámites',
      text: `Nos responsabilizamos de todos los trámites judiciales en tu representación: recibimos y firmamos emplazamientos, citaciones, notificaciones y toda la documentación procesal.

Asistimos a todas las diligencias y actos necesarios del pleito en tu nombre, manteniéndote informado en todo momento y actuando siempre en defensa de tus intereses.`,
      image: 'https://naturehospitalityconsulting.com/wp-content/uploads/2024/07/Gestion-Integral-de-Tramites-Legales-casa-rural.png',
      imagePosition: 'left'
    },
    {
      title: 'Transparencia en Costes y Comunicación',
      text: `Te informamos desde el inicio del coste aproximado del procedimiento y de las posibles consecuencias económicas, incluyendo el riesgo de ser condenado al pago de las costas procesales.

Mantenemos comunicación constante con tu abogado, transmitiendo todas las resoluciones judiciales y coordinando la presentación de escritos para asegurar la mejor defensa de tu caso.`,
      image: 'https://www.abogacia.es/wp-content/uploads/2019/06/Contrato-2-300x200.jpg',
      imagePosition: 'right'
    }
  ];
  
  // Crear elementos del mosaico
  mosaicData.forEach((item, index) => {
    const mosaicItem = document.createElement('div');
    mosaicItem.style.cssText = `
      display: grid;
      grid-template-columns: ${item.imagePosition === 'right' ? '1fr 400px' : '400px 1fr'};
      gap: 3rem;
      align-items: center;
      padding: 2rem;
      background: rgba(255, 159, 64, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 159, 64, 0.2);
      transition: all 0.3s ease;
      min-height: 280px;
    `;
    
    // Contenedor de texto
    const textContainer = document.createElement('div');
    textContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 1rem;
      ${item.imagePosition === 'right' ? 'order: 1;' : 'order: 2;'}
    `;
    
    // Título del servicio
    const serviceTitle = document.createElement('h3');
    serviceTitle.textContent = item.title;
    serviceTitle.style.cssText = `
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
      color: #ff9f40;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    `;
    
    // Texto descriptivo
    const serviceText = document.createElement('div');
    serviceText.innerHTML = item.text.split('\n\n').map(paragraph => 
      `<p style="margin: 0 0 1rem 0; line-height: 1.7; color: rgba(255, 255, 255, 0.9); font-size: 1rem;">${paragraph.trim()}</p>`
    ).join('');
    

    textContainer.appendChild(serviceTitle);
    textContainer.appendChild(serviceText);

    
    // Contenedor de imagen
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
      ${item.imagePosition === 'right' ? 'order: 2;' : 'order: 1;'}
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    `;
    
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    image.style.cssText = `
      width: 100%;
      height: 280px;
      object-fit: cover;
      transition: transform 0.4s ease;
    `;
    
    // Efectos hover en imagen
    imageContainer.addEventListener('mouseenter', () => {
      image.style.transform = 'scale(1.08)';
      imageContainer.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.3)';
    });
    
    imageContainer.addEventListener('mouseleave', () => {
      image.style.transform = 'scale(1)';
      imageContainer.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
    });
    
    imageContainer.appendChild(image);
    
    // Efectos hover del item completo
    mosaicItem.addEventListener('mouseenter', () => {
      mosaicItem.style.transform = 'translateY(-5px)';
      mosaicItem.style.boxShadow = '0 12px 35px rgba(255, 159, 64, 0.15)';
      mosaicItem.style.background = 'rgba(255, 159, 64, 0.08)';
    });
    
    mosaicItem.addEventListener('mouseleave', () => {
      mosaicItem.style.transform = 'translateY(0)';
      mosaicItem.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      mosaicItem.style.background = 'rgba(255, 159, 64, 0.05)';
    });
    
    // Ensamblar el item del mosaico
    mosaicItem.appendChild(textContainer);
    mosaicItem.appendChild(imageContainer);
    mosaicContainer.appendChild(mosaicItem);
  });
  
  // Responsive design
  const mediaQuery = window.matchMedia('(max-width: 900px)');
  const handleMobileView = (e) => {
    const mosaicItems = mosaicContainer.children;
    Array.from(mosaicItems).forEach(item => {
      if (e.matches) {
        // Móvil: columna única
        item.style.gridTemplateColumns = '1fr';
        item.style.gap = '1.5rem';
        item.style.padding = '1.5rem';
        item.style.textAlign = 'center';
        
        // Resetear orden para móvil
        const textContainer = item.children[0];
        const imageContainer = item.children[1];
        textContainer.style.order = '1';
        imageContainer.style.order = '2';
      } else {
        // Desktop: restaurar grid original
        const isRightImage = item.dataset.imagePosition === 'right';
        item.style.gridTemplateColumns = isRightImage ? '1fr 400px' : '400px 1fr';
        item.style.gap = '3rem';
        item.style.padding = '2rem';
        item.style.textAlign = 'left';
      }
    });
  };
  
  // Marcar posición de imagen para responsive
  mosaicData.forEach((item, index) => {
    mosaicContainer.children[index].dataset.imagePosition = item.imagePosition;
  });
  
  mediaQuery.addListener(handleMobileView);
  handleMobileView(mediaQuery);
  
  // Efecto hover en toda la sección - Igual que botones respuestas
  section.addEventListener('mouseenter', () => {
    section.style.transform = 'rotateX(2deg) translateY(-5px)';
    section.style.boxShadow = '0 12px 40px rgba(255, 159, 64, 0.2)';
  });
  
  section.addEventListener('mouseleave', () => {
    section.style.transform = 'rotateX(0deg) translateY(0)';
    section.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  });
  
  // Ensamblar el componente
  section.appendChild(title);
  section.appendChild(mosaicContainer);
  
  return section;
}