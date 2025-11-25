// ==========================================
//           FOOTER A PANTALLA COMPLETA
//      Dos frames: superior 2x, inferior 1x
// ==========================================

export function Footer() {
  // Ajusta estas proporciones para cambiar la altura relativa
  // Se interpretan como fracciones de viewport (vh). Ej.: 0.4 = 40vh, 0.1 = 10vh
  // No se normalizan a 100%: el footer medirá la suma de ambos.
  const TOP_RATIO = 0.4;    // 40vh por defecto
  const BOTTOM_RATIO = 0.06; // 10vh por defecto
  const topVH = Math.max(0, TOP_RATIO * 100);
  const bottomVH = Math.max(0, BOTTOM_RATIO * 100);
  const footerVH = topVH + bottomVH; // altura total del footer en vh

  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.style.cssText = `
    position: relative;
    width: 100%;
    height: ${'${footerVH}'}vh; /* suma directa de tus ratios */
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background: transparent; /* deja ver el fondo de la página */
    overflow: hidden; /* evita que se vea nada fuera de los frames */
  `;

  // Frame superior (doble de alto que el inferior)
  const topFrame = document.createElement('div');
  topFrame.style.cssText = `
    background: #1f1f1f;
    border-top: 1px solid #333;
    border-bottom: 1px solid #2a2a2a;
  `;
  // Aplicar altura calculada en vh
  topFrame.style.flex = '0 0 auto';
  topFrame.style.height = `${topVH}vh`;

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