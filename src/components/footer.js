// ==========================================
//           FOOTER A PANTALLA COMPLETA
//      Dos frames: superior 2x, inferior 1x
// ==========================================

export function Footer() {
  // Ajusta estas proporciones para cambiar la altura relativa
  // Se interpretan como fracciones de viewport (vh). Ej.: 0.4 = 40vh, 0.1 = 10vh
  // No se normalizan a 100%: el footer medirá la suma de ambos.
  const TOP_RATIO = 0.15;    // 15vh por defecto
  const BOTTOM_RATIO = 0.06; // 6vh por defecto
  let topVH = Math.max(0, TOP_RATIO * 100);
  const bottomVH = Math.max(0, BOTTOM_RATIO * 100);
  let footerVH = topVH + bottomVH; // altura total del footer en vh

  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.style.cssText = `
   
    position: relative;
    width: 100%;
    min-height: ${footerVH}vh; /* suma directa de tus ratios */
    margin: 4rem 0 0.5rem 0; /* margen superior para separar del contenido */
    padding: 0;
    display: flex;
    flex-direction: column;
    background: transparent; /* deja ver el fondo de la página */
    overflow: visible; /* permite que todo sea visible */
    transition: min-height .4s cubic-bezier(.4,0,.2,1);
  `;

  // Frame superior (doble de alto que el inferior)
  const topFrame = document.createElement('div');
  topFrame.style.cssText = `
    background: #1f1f1f;
    border-top: 1px solid #333;
    border-bottom: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 3rem;
    box-sizing: border-box;
    gap: 2.5rem;
    font-family: system-ui, Arial, sans-serif;
  `;
  // Aplicar altura calculada en vh
  topFrame.style.flex = '0 0 auto';
  topFrame.style.height = `${topVH}vh`;
  topFrame.style.transition = 'height .4s cubic-bezier(.4,0,.2,1)';

  // Contenedor de columnas principales (izq, centro, der)
  const columnsWrapper = document.createElement('div');
  columnsWrapper.style.cssText = `
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 3rem;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  // Estilo común para títulos
  function makeTitle(text) {
    const t = document.createElement('h3');
    t.textContent = text;
    t.style.cssText = `
      margin: 0 0 1rem 0;
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: .5px;
      color: #e5e5e5;
    `;
    return t;
  }

  // Columna izquierda: Contacto
  const leftCol = document.createElement('div');
  leftCol.style.cssText = `
    flex: 1 1 280px;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `;
  leftCol.appendChild(makeTitle('Contáctanos'));
  const socialRow = document.createElement('div');
  socialRow.style.cssText = `
    display: flex;
    flex-direction: row;
    gap: 0.85rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `;
  const socials = [
    { label: 'WhatsApp', icon: '🟢', aria: 'WhatsApp' },
    { label: 'Instagram', icon: '📸', aria: 'Instagram' },
    { label: 'Facebook', icon: '📘', aria: 'Facebook' }
  ];
  function makeCircleBtn(s) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', s.aria);
    btn.textContent = s.icon;
    btn.style.cssText = `
      width: 54px;
      height: 54px;
      border-radius: 50%;
      border: 1px solid #2f2f2f;
      background: #242424;
      color: #fafafa;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease;
    `;
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.1)';
      btn.style.boxShadow = '0 6px 16px rgba(0,0,0,.35)';
      btn.style.background = '#2e2e2e';
      btn.style.borderColor = '#444';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = 'none';
      btn.style.background = '#242424';
      btn.style.borderColor = '#2f2f2f';
    });
    return btn;
  }
  socials.forEach(s => socialRow.appendChild(makeCircleBtn(s)));
  leftCol.appendChild(socialRow);

  // Columna central: Texto explicativo
  const middleCol = document.createElement('div');
  middleCol.style.cssText = `
    flex: 1 1 360px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `;
  middleCol.appendChild(makeTitle('Sobre Nosotros'));
  const middleText = document.createElement('p');
  middleText.textContent = 'Texto placeholder para descripción breve. Aquí podrás añadir información corporativa, misión, valores o cualquier detalle introductorio.';
  middleText.style.cssText = `
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.55;
    color: #b5b5b5;
    max-width: 520px;
  `;
  middleCol.appendChild(middleText);

  // Columna derecha: Legalidades con botones
  const rightCol = document.createElement('div');
  rightCol.style.cssText = `
    flex: 1 1 240px;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `;
  rightCol.appendChild(makeTitle('Legalidades'));
  // Botón hamburguesa que despliega los enlaces de legalidades
  const burgerBtn = document.createElement('button');
  burgerBtn.type = 'button';
  burgerBtn.setAttribute('aria-expanded', 'false');
  burgerBtn.setAttribute('aria-controls', 'legalidades-menu');
  burgerBtn.title = 'Mostrar / ocultar legalidades';
  burgerBtn.style.cssText = `
    position: relative;
    width: 48px;
    height: 48px;
    border: 1.5px solid #2f2f2f;
    background: #242424;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 0 0.75rem 0;
    transition: background .25s ease, border-color .25s ease, box-shadow .25s ease;
    box-sizing: border-box;
  `;
  const lineCommon = `
    position: absolute;
    left: 10px;
    width: 28px;
    height: 3.2px;
    background: #e5e5e5;
    border-radius: 2px;
    transition: transform .35s cubic-bezier(.4,0,.2,1), top .35s cubic-bezier(.4,0,.2,1), opacity .35s cubic-bezier(.4,0,.2,1), background .25s;
    box-sizing: border-box;
  `;
  const l1 = document.createElement('span');
  const l2 = document.createElement('span');
  const l3 = document.createElement('span');
  l1.style.cssText = lineCommon + 'top: 13px;';
  l2.style.cssText = lineCommon + 'top: 22px;';
  l3.style.cssText = lineCommon + 'top: 31px;';
  burgerBtn.appendChild(l1);
  burgerBtn.appendChild(l2);
  burgerBtn.appendChild(l3);

  burgerBtn.addEventListener('mouseenter', () => {
    burgerBtn.style.background = '#2e2e2e';
    burgerBtn.style.borderColor = '#444';
    burgerBtn.style.boxShadow = '0 4px 14px rgba(0,0,0,.4)';
  });
  burgerBtn.addEventListener('mouseleave', () => {
    burgerBtn.style.background = '#242424';
    burgerBtn.style.borderColor = '#2f2f2f';
    burgerBtn.style.boxShadow = 'none';
  });

  rightCol.appendChild(burgerBtn);

  // Contenedor colapsable
  const legalList = document.createElement('div');
  legalList.id = 'legalidades-menu';
  legalList.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height .4s ease, opacity .35s ease;
  `;

  const legalLinks = [
    { text: 'Accesibilidad', type: 'accesibilidad' },
    { text: 'Avisos Legales', type: 'avisos-legales' },
    { text: 'Política de Cookies', type: 'politica-cookies' },
    { text: 'Términos y Condiciones', type: 'terminos-condiciones' },
    { text: 'Reclamos', type: 'reclamos' }
  ];

  function makeLegalLink(item) {
    const a = document.createElement('a');
    a.textContent = item.text;
    a.href = '#';
    a.style.cssText = `
      background: #242424;
      color: #d7d7d7;
      font-size: 0.9rem;
      padding: 0.65rem 0.95rem;
      border: 1px solid #2f2f2f;
      border-radius: 8px;
      text-decoration: none;
      cursor: pointer;
      display: block;
      transition: transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease, color .25s ease;
    `;
    
    // Interceptar el click para abrir el componente JS
    a.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof window.mostrarLegalidad === 'function') {
        window.mostrarLegalidad(item.type);
      } else {
        // Fallback por hash para que main.js lo capture
        window.location.hash = `#legalidad:${item.type}`;
      }
    });
    
    a.addEventListener('mouseenter', () => {
      a.style.transform = 'scale(1.03)';
      a.style.boxShadow = '0 4px 14px rgba(0,0,0,.4)';
      a.style.background = '#2e2e2e';
      a.style.borderColor = '#444';
      a.style.color = '#fff';
    });
    a.addEventListener('mouseleave', () => {
      a.style.transform = 'scale(1)';
      a.style.boxShadow = 'none';
      a.style.background = '#242424';
      a.style.borderColor = '#2f2f2f';
      a.style.color = '#d7d7d7';
    });
    return a;
  }

  legalLinks.forEach(link => legalList.appendChild(makeLegalLink(link)));
  rightCol.appendChild(legalList);

  // Toggle de despliegue
  let expanded = false;
  burgerBtn.addEventListener('click', () => {
    expanded = !expanded;
    burgerBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    if (expanded) {
      legalList.style.maxHeight = legalList.scrollHeight + 'px';
      legalList.style.opacity = '1';
      // Animar líneas a X
      l1.style.top = '22px';
      l1.style.transform = 'rotate(45deg)';
      l2.style.opacity = '0';
      l3.style.top = '22px';
      l3.style.transform = 'rotate(-45deg)';
      // Expandir el topFrame y el footer
      const extraPx = legalList.scrollHeight + 32; // margen extra
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const extraVH = Math.min((extraPx / vh) * 100, 30); // máximo 30vh extra
      topFrame.style.height = `calc(${topVH}vh + ${extraVH}vh)`;
      footer.style.minHeight = `calc(${footerVH}vh + ${extraVH}vh)`;
    } else {
      legalList.style.maxHeight = '0';
      legalList.style.opacity = '0';
      // Restaurar líneas
      l1.style.top = '13px';
      l1.style.transform = 'rotate(0deg)';
      l2.style.opacity = '1';
      l3.style.top = '31px';
      l3.style.transform = 'rotate(0deg)';
      // Restaurar altura original
      topFrame.style.height = `${topVH}vh`;
      footer.style.minHeight = `${footerVH}vh`;
    }
  });

  // Orden solicitado: Izquierda = Contáctanos, Centro = Legalidades, Derecha = Sobre Nosotros
  columnsWrapper.appendChild(leftCol);
  columnsWrapper.appendChild(rightCol); // Legalidades ahora en el centro
  columnsWrapper.appendChild(middleCol); // Texto (Sobre Nosotros) a la derecha
  topFrame.appendChild(columnsWrapper);

  // Frame inferior (más pequeño, al fondo)
  const bottomFrame = document.createElement('div');
  bottomFrame.style.cssText = `
    background: #242424;
    border-top: 1px solid #2a2a2a;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  `;
  // Aplicar altura calculada en vh
  bottomFrame.style.flex = '0 0 auto';
  bottomFrame.style.height = `${bottomVH}vh`;

  // Imagen centrada en el frame inferior (añade el archivo en /public)
  const spainImg = document.createElement('img');
  spainImg.src = '/SpainGoverment.png'; // coloca la imagen en public/spain-footer.png
  spainImg.alt = 'Financiado por la Unión Europea - Plan de Recuperación';
  spainImg.style.cssText = `
    max-width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    filter: none;
  `;
  bottomFrame.appendChild(spainImg);

  footer.appendChild(topFrame);
  footer.appendChild(bottomFrame);

  return footer;
}