// ==========================================
//      COMPONENTE EXPLICACIÓN – VERSIÓN FINAL 100% COMPLETA
// ==========================================

export function Explicacion() {
  const section = document.createElement('section');
  section.className = 'explicacion-servicios';
  section.id = 'explicacion';
  
  section.style.cssText = `
    width: 100%;
    max-width: 1300px;
    padding: 4rem 2rem;
    margin: 2rem auto;
    background: linear-gradient(135deg, rgba(255, 159, 64, 0.08), rgba(251, 146, 60, 0.03));
    border-radius: 20px;
    border: 1px solid rgba(255, 159, 64, 0.25);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  `;

  const title = document.createElement('h2');
  title.textContent = 'Correos España';
  title.style.cssText = `
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;
    color: #ff9f40;
    margin-bottom: 4rem;
    margin-top: -1rem;
    text-shadow: 0 3px 8px rgba(0,0,0,0.3);
  `;

  const mosaicContainer = document.createElement('div');
  mosaicContainer.style.cssText = `display: flex; flex-direction: column; gap: 5rem;`;

  // ==========================================
  //             DATOS COMPLETOS
  // ==========================================
  const mosaicData = [
    // TRIPLE
    { type: 'triple', title: 'Gestión Aduanera', text: `Infórmate sobre cómo realizar los trámites aduaneros que necesitas para tus envíos internacionales. En Correos te ayudamos con todos los documentos y procedimientos necesarios.`, image: 'https://www.correos.es/content/dam/correos/imagenes/ilustraciones/ilustraciones-aduanas/ilustraciones_aduanas_2.jpg', buttonText: 'Consulta aduanera', buttonSubject: 'Consulta sobre trámites aduaneros', buttonBody: `¡Hola Correos!\n\nNecesito información sobre gestión aduanera para un envío.\n\nDetalles:\n• Tipo de envío:\n• Origen/Destino:\n• Valor aproximado:\n\nGracias.` },
    { type: 'triple', title: 'Trámites de la DGT', text: `Realiza tus trámites de la Dirección General de Tráfico (DGT) online de forma fácil y sencilla o acércate a cualquiera de nuestras oficinas. Desde renovaciones hasta certificados.`, image: 'https://www.correos.es/content/dam/correos/imagenes/ilustraciones/howto/distintivos_ambientales.svg', buttonText: 'Iniciar trámite DGT', buttonSubject: 'Solicitud trámite DGT', buttonBody: `¡Hola!\n\nQuiero realizar un trámite DGT a través de Correos.\n\n• Tipo de trámite:\n• DNI:\n• Teléfono:\n\nSaludos.` },
    { type: 'triple', title: 'Trámites con la Administración Pública', text: `Haz tus trámites de forma rápida y segura con la Administración Pública. En Correos gestionamos certificados, DNI y más, todo en un solo lugar confiable.`, image: 'https://www.correos.es/content/dam/correos/imagenes/ilustraciones/big/aliados_sectores_publicos.svg', buttonText: 'Gestionar trámite público', buttonSubject: 'Trámite Administración Pública', buttonBody: `Hola equipo,\n\nNecesito ayuda con un trámite administrativo.\n\n• Descripción del trámite:\n• Documentos disponibles:\n• Contacto:\n\n¡Gracias!` },

    // SINGLES
    { type: 'single', title: '¿Estás esperando un envío?', text: `Aquí encontrarás todo lo que necesitas saber sobre el envío que estás esperando. Sigue tu paquete en tiempo real con nuestro localizador de envíos.`, image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', imagePosition: 'right', buttonText: 'Seguir mi envío', buttonSubject: 'Seguimiento de envío', buttonBody: `¡Hola!\n\nEstoy esperando un envío y necesito su estado.\n\n• Código de seguimiento:\n• Nombre:\n• Teléfono:\n\nGracias.` },
    { type: 'single', title: '¿Quieres hacer un envío?', text: `Descubre cómo enviar paquetes, cartas o documentos de cualquier tipo. Elige el servicio que mejor se adapte a tus necesidades: nacional, internacional o urgente.`, image: 'https://images.pexels.com/photos/5052874/pexels-photo-5052874.jpeg?auto=compress&cs=tinysrgb&w=800', imagePosition: 'left', buttonText: 'Preparar envío', buttonSubject: 'Solicitud de envío', buttonBody: `Hola Correos,\n\nQuiero hacer un envío.\n\n• Detalles del paquete:\n• Destino:\n• Tipo de servicio:\n\nUn saludo.` },
    { type: 'single', title: 'Compra en nuestra tienda online', text: `Compra online todo lo necesario para tus envíos postales: sobres, embalajes, sellos, artículos de filatelia y regalos exclusivos de Correos.`, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', imagePosition: 'right', buttonText: 'Ir a la tienda', buttonSubject: 'Consulta tienda online', buttonBody: `¡Hola!\n\nInteresado en productos de la tienda online.\n\n• Artículo de interés:\n• Cantidad:\n• Envío a:\n\nGracias.` },

    // DOUBLE
    { type: 'double', title: 'El Camino con Correos', text: `En Correos te acompañamos antes, durante y después del Camino de Santiago. Transportamos tu mochila, bici o maleta, y almacenamos equipaje en Compostela. Tú solo disfruta la experiencia.`, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', buttonText: 'Reservar servicio Camino', buttonSubject: 'Info El Camino con Correos', buttonBody: `Hola,\n\nInteresado en El Camino con Correos.\n\n• Fecha inicio:\n• Tipo (mochila/bici):\n• Etapas:\n\n¡Gracias!` },
    { type: 'double', title: '¿Quieres comprar en nuestras tiendas o enviar dinero?', text: `Tenemos todo tipo de productos que te ayudarán a realizar compras en tiendas o envíos de dinero de forma fácil. Descubre seguros, pagos y más servicios integrados.`, image: 'https://images.pexels.com/photos/394372/pexels-photo-394372.jpeg?auto=compress&cs=tinysrgb&w=800', buttonText: 'Más info compras/dinero', buttonSubject: 'Consulta compras o envío dinero', buttonBody: `¡Hola equipo!\n\nConsulta sobre compras en tiendas o envío de dinero.\n\n• Servicio específico:\n• Cantidad:\n• Destino:\n\nSaludos.` }
  ];

  // BOTÓN COMÚN
  const createButton = (buttonText, buttonSubject, buttonBody) => {
    const btn = document.createElement('button');
    btn.innerHTML = `${buttonText}`;
    btn.style.cssText = `
      margin-top: 1.5rem;
      align-self: center;
      background: linear-gradient(135deg, #f59f00, #fc9700);
      border: none;
      color: white;
      padding: 0.9rem 2rem;
      border-radius: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 6px 20px rgba(245,159,0,0.4);
    `;
    btn.onmouseenter = () => {
      btn.style.transform = 'translateY(-5px) scale(1.06)';
      btn.style.background = 'linear-gradient(135deg, #ea580c, #c2410c)';
      btn.style.boxShadow = '0 14px 35px rgba(234,88,12,0.6)';
    };
    btn.onmouseleave = () => {
      btn.style.transform = '';
      btn.style.background = 'linear-gradient(135deg, #f59f00, #fc9700)';
      btn.style.boxShadow = '0 6px 20px rgba(245,159,0,0.4)';
    };
    btn.onclick = () => location.href = `mailto:clientes@correos.es?subject=${encodeURIComponent(buttonSubject + ' - ' + new Date().toLocaleDateString('es-ES'))}&body=${encodeURIComponent(buttonBody)}`;
    return btn;
  };

  // ==========================================
  // TRIPLE – INDESTRUCTIBLE Y PRECIOSO
  // ==========================================
  let dataIndex = 0;
  const tripleContainer = document.createElement('div');
  tripleContainer.className = 'triple-grid';
  tripleContainer.style.cssText = `display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem;`;

  for (let i = 0; i < 3; i++) {
    const item = mosaicData[dataIndex++];
    const card = document.createElement('div');
    card.className = 'triple-card';
    card.style.cssText = `
      background: rgba(255,255,255,0.07);
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.4s ease;
      box-shadow: 0 8px 30px rgba(0,0,0,0.15);
      border: 1px solid rgba(255,159,64,0.25);
    `;

    // only render image when one exists for this item
    let imgWrapper, img;
    if (item.image) {
      imgWrapper = document.createElement('div');
      imgWrapper.className = 'triple-img';
      imgWrapper.style.cssText = `
        height: 240px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-bottom: 4px solid #ff9f40;
        transition: all 0.4s ease;
        order: 1;
      `;
      img = document.createElement('img');
      img.src = item.image;
      img.alt = item.title;
      img.style.cssText = `max-width: 95%; max-height: 95%; object-fit: contain; transition: transform 0.6s ease;`;
      imgWrapper.appendChild(img);
    }

    const content = document.createElement('div');
    content.style.cssText = `padding: 1.8rem; display: flex; flex-direction: column; gap: 1.2rem; flex: 1; text-align: center; order: 2;`;
    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    h3.style.cssText = `margin:0; font-size:1.5rem; color:#ff9f40; font-weight:600;`;
    const p = document.createElement('p');
    p.textContent = item.text;
    p.style.cssText = `margin:0; font-size:0.95rem; line-height:1.65; opacity:0.92; flex:1;`;
    content.append(h3, p, createButton(item.buttonText, item.buttonSubject, item.buttonBody));

    if (imgWrapper) card.append(imgWrapper, content); else card.append(content);
    tripleContainer.appendChild(card);

    card.onmouseenter = () => {
      card.style.transform = 'translateY(-14px) scale(1.04)';
      card.style.boxShadow = '0 25px 60px rgba(255,159,64,0.35)';
      if (img) { img.style.transform = 'scale(1.1) rotate(2deg)'; if (imgWrapper) imgWrapper.style.borderBottomColor = '#ffb340'; }
    };
    card.onmouseleave = () => {
      card.style.transform = '';
      card.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
      if (img) { img.style.transform = ''; if (imgWrapper) imgWrapper.style.borderBottomColor = '#ff9f40'; }
    };
  }
  mosaicContainer.appendChild(tripleContainer);

  // ==========================================
  // SINGLES Y DOUBLE – TAL CUAL LOS TENÍAS
  // ==========================================
  for (let i = 0; i < 3; i++) {
    const item = mosaicData[dataIndex++];
    const mosaicItem = document.createElement('div');
    const hasImage = Boolean(item.image);
    const columns = hasImage ? (item.imagePosition === 'right' ? '1fr 400px' : '400px 1fr') : '1fr';
    mosaicItem.style.cssText = `
      display: grid;
      grid-template-columns: ${columns};
      gap: 3rem;
      align-items: center;
      padding: 2rem;
      background: rgba(255, 159, 64, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 159, 64, 0.2);
      transition: all 0.3s ease;
      min-height: 280px;
    `;
    const textContainer = document.createElement('div');
    textContainer.style.cssText = `display:flex;flex-direction:column;gap:1rem;${item.imagePosition==='right'?'order:1':'order:2'}`;
    const serviceTitle = document.createElement('h3');
    serviceTitle.textContent = item.title;
    serviceTitle.style.cssText = `margin:0;font-size:1.8rem;font-weight:600;color:#ff9f40;text-shadow:0 1px 2px rgba(0,0,0,0.2);`;
    const serviceText = document.createElement('p');
    serviceText.textContent = item.text;
    serviceText.style.cssText = `margin:0 0 1rem 0;line-height:1.7;color:rgba(255,255,255,0.9);font-size:1rem;`;
    textContainer.append(serviceTitle, serviceText, createButton(item.buttonText, item.buttonSubject, item.buttonBody));

    // only render an image panel when the item has an image
    let image, imageContainer;
    if (hasImage) {
      imageContainer = document.createElement('div');
      imageContainer.style.cssText = `${item.imagePosition==='right'?'order:2':'order:1'};border-radius:12px;overflow:hidden;box-shadow:0 8px 25px rgba(0,0,0,0.2);transition:all 0.4s ease;`;
      image = document.createElement('img');
      image.src = item.image;
      image.alt = item.title;
      image.style.cssText = `width:100%;height:280px;object-fit:cover;transition:transform 0.6s ease;`;
      imageContainer.appendChild(image);
      mosaicItem.append(textContainer, imageContainer);
    } else {
      // text-only layout
      mosaicItem.append(textContainer);
    }
    mosaicContainer.appendChild(mosaicItem);

    mosaicItem.onmouseenter = () => {
      mosaicItem.style.transform = 'translateY(-8px)';
      mosaicItem.style.boxShadow = '0 20px 45px rgba(255,159,64,0.3)';
      if (image) image.style.transform = 'scale(1.08)';
    };
    mosaicItem.onmouseleave = () => {
      mosaicItem.style.transform = '';
      mosaicItem.style.boxShadow = '';
      if (image) image.style.transform = '';
    };
  }

  // ==========================================
  // RESPONSIVE PERFECTO
  // ==========================================
  const mobile = window.matchMedia('(max-width: 1100px)');
  const veryMobile = window.matchMedia('(max-width: 700px)');

  const adaptLayout = () => {
    // Triple
    tripleContainer.style.gridTemplateColumns = mobile.matches ? '1fr' : 'repeat(3, 1fr)';
    const imgs = tripleContainer.querySelectorAll('.triple-img');
    imgs.forEach(img => {
      img.style.order = veryMobile.matches ? '2' : '1';
      img.style.height = veryMobile.matches ? '190px' : '240px';
      img.style.padding = veryMobile.matches ? '15px' : '20px';
    });
  };
  mobile.addListener(adaptLayout);
  veryMobile.addListener(adaptLayout);
  adaptLayout();

  // Hover sección
  section.onmouseenter = () => section.style.boxShadow = '0 16px 50px rgba(255,159,64,0.25)';
  section.onmouseleave = () => section.style.boxShadow = '0 10px 40px rgba(0,0,0,0.15)';

  section.append(title, mosaicContainer);
  return section;
}