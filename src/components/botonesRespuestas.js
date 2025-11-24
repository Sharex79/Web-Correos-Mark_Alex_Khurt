// ==========================================
//        COMPONENTE BOTONES RESPUESTAS
//         Acordeones desplegables
// ==========================================

export function BotonesRespuestas() {
  const section = document.createElement('section');
  section.className = 'botones-respuestas';
  section.id = 'botones-respuestas';
  
  // Estilos propios - Tema naranja/energético
  section.style.cssText = `
    width: 100%;
    max-width: 900px;
    padding: 3rem 2rem;
    margin: 2rem 0;
    background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.05));
    border-radius: 12px;
    border: 1px solid rgba(249, 115, 22, 0.3);
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
  `;
  
  // Crear contenido del componente
  const title = document.createElement('h2');
  title.textContent = '❓ Preguntas Frecuentes';
  title.style.cssText = `
    margin: 0 0 1rem 0;
    font-size: 2.2rem;
    font-weight: 600;
    color: #f97316;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  `;
  
  const description = document.createElement('p');
  
  // Crear contenedor de botones desplegables
  const accordionContainer = document.createElement('div');
  accordionContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  `;
  
  // Datos de los desplegables
  const accordionData = [
    {
      title: '¿Qué es el servicio integral?',
      icon: '🏢',
      content: `El servicio integral es una modalidad de atención jurídica que abarca todos los aspectos necesarios para resolver tu caso de manera completa y eficiente. 

Incluye desde la consulta inicial, análisis del caso, preparación de documentación, representación legal, hasta el seguimiento post-resolución. 

Nuestro equipo multidisciplinario trabaja de forma coordinada para brindarte una solución completa, ahorrándote tiempo y garantizando la mejor defensa de tus intereses.`,
      image: '/Servicio_integral.png'
    },
    {
      title: 'Actos de comunicación',
      icon: '📋',
      content: `Los actos de comunicación son procedimientos legales mediante los cuales se notifican oficialmente las decisiones judiciales, citaciones, emplazamientos y otros documentos legales a las partes involucradas.

Incluyen notificaciones, citaciones, emplazamientos, requerimientos y embargos. Cada tipo tiene sus propios plazos y formalidades específicas que deben cumplirse estrictamente.

Nuestros profesionales se encargan de gestionar todos estos trámites con la máxima precisión y dentro de los plazos establecidos por la ley.`,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  // Array para guardar referencias a todos los acordeones
  const allAccordions = [];
  
  accordionData.forEach((item, index) => {
    // Contenedor principal del accordion
    const accordionItem = document.createElement('div');
    accordionItem.style.cssText = `
      background: rgba(249, 115, 22, 0.08);
      border-radius: 12px;
      border: 1px solid rgba(249, 115, 22, 0.3);
      overflow: hidden;
      transition: all 0.3s ease;
      width: 100%;
      margin-bottom: 0;
    `;
    
    // Botón header (burger button)
    const accordionHeader = document.createElement('button');
    accordionHeader.innerHTML = `
      <span style="display: flex; align-items: center; gap: 0.8rem;">
        <span style="font-size: 1.5rem;">${item.icon}</span>
        <span style="flex: 1; text-align: left;">${item.title}</span>
        <span class="burger-icon" style="font-size: 1.2rem; transition: transform 0.3s ease;">☰</span>
      </span>
    `;
    accordionHeader.style.cssText = `
      width: 100%;
      background: rgba(249, 115, 22, 0.15);
      border: none;
      padding: 1.2rem 1.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: 600;
      color: #f97316;
      transition: all 0.3s ease;
      text-align: left;
      border-bottom: 1px solid rgba(249, 115, 22, 0.2);
    `;
    
    // Contenido desplegable
    const accordionContent = document.createElement('div');
    accordionContent.style.cssText = `
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
      background: rgba(249, 115, 22, 0.05);
      opacity: 0;
    `;
    
    const contentInner = document.createElement('div');
    contentInner.style.cssText = `
      padding: 1.5rem;
    `;
    
    // Texto del contenido
    const textContent = document.createElement('div');
    textContent.innerHTML = item.content.split('\n\n').map(paragraph => 
      `<p style="margin: 0 0 1rem 0; line-height: 1.6; color: rgba(255, 255, 255, 0.9);">${paragraph.trim()}</p>`
    ).join('');
    
    // Imagen horizontal al final
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
      margin-top: 1.5rem;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    image.style.cssText = `
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      transition: transform 0.3s ease;
    `;
    
    // Efecto hover en la imagen
    image.addEventListener('mouseenter', () => {
      image.style.transform = 'scale(1.05)';
    });
    
    image.addEventListener('mouseleave', () => {
      image.style.transform = 'scale(1)';
    });
    
    imageContainer.appendChild(image);
    contentInner.appendChild(textContent);
    contentInner.appendChild(imageContainer);
    accordionContent.appendChild(contentInner);
    
    // Funcionalidad del desplegable mejorada
    let isOpen = false;
    
    // Función para cerrar este acordeón
    const closeAccordion = () => {
      accordionContent.style.maxHeight = '0';
      accordionContent.style.opacity = '0';
      burgerIcon.style.transform = 'rotate(0deg)';
      burgerIcon.textContent = '☰';
      accordionHeader.style.background = 'rgba(249, 115, 22, 0.15)';
      isOpen = false;
    };
    
    // Función para abrir este acordeón
    const openAccordion = () => {
      // Primero cerrar todos los otros acordeones
      allAccordions.forEach(accordion => {
        if (accordion !== accordionItem && accordion.closeFunction) {
          accordion.closeFunction();
        }
      });
      
      // Calcular altura real del contenido
      accordionContent.style.maxHeight = 'none';
      accordionContent.style.display = 'block';
      const scrollHeight = accordionContent.scrollHeight;
      accordionContent.style.maxHeight = '0';
      
      // Usar requestAnimationFrame para una transición suave
      requestAnimationFrame(() => {
        accordionContent.style.maxHeight = scrollHeight + 'px';
        accordionContent.style.opacity = '1';
      });
      
      burgerIcon.style.transform = 'rotate(90deg)';
      burgerIcon.textContent = '✕';
      accordionHeader.style.background = 'rgba(249, 115, 22, 0.25)';
      isOpen = true;
    };
    
    // Guardar referencias para control global
    accordionItem.closeFunction = closeAccordion;
    accordionItem.openFunction = openAccordion;
    accordionItem.isOpen = () => isOpen;
    
    const burgerIcon = accordionHeader.querySelector('.burger-icon');
    
    accordionHeader.addEventListener('click', () => {
      if (isOpen) {
        closeAccordion();
      } else {
        openAccordion();
      }
    });
    
    // Efectos hover del header
    accordionHeader.addEventListener('mouseenter', () => {
      if (!isOpen) {
        accordionHeader.style.background = 'rgba(249, 115, 22, 0.2)';
      }
      accordionHeader.style.transform = 'translateY(-1px)';
    });
    
    accordionHeader.addEventListener('mouseleave', () => {
      if (!isOpen) {
        accordionHeader.style.background = 'rgba(249, 115, 22, 0.15)';
      }
      accordionHeader.style.transform = 'translateY(0)';
    });
    
    // Ensamblar accordion item
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionContent);
    accordionContainer.appendChild(accordionItem);
    
    // Agregar al array de control
    allAccordions.push(accordionItem);
  });
  
  // Agregar interactividad general
  section.addEventListener('mouseenter', () => {
    section.style.transform = 'rotateX(2deg) translateY(-5px)';
    section.style.boxShadow = '0 12px 40px rgba(249, 115, 22, 0.2)';
  });
  
  section.addEventListener('mouseleave', () => {
    section.style.transform = 'rotateX(0deg) translateY(0)';
    section.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  });
  
  // Ensamblar el componente
  section.appendChild(title);
  section.appendChild(accordionContainer);
  
  return section;
}