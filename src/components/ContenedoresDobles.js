// ==========================================
//      COMPONENTE CONTENEDORES DOBLES
//  Dos grandes contenedores side-by-side (responsive)
//  Styles are injected only inside this file (no external CSS)
// ==========================================

import { FormularioPaqueteria } from './FormularioPaqueteria.js';
import { TrackingWidget } from './TrackingWidget.js';

export function ContenedoresDobles() {
  const section = document.createElement('section');
  section.className = 'contenedores-dobles';
  section.id = 'contenedores-dobles';

  // Inyectar estilos una sola vez
  if (!document.getElementById('contenedores-dobles-styles')) {
    const style = document.createElement('style');
    style.id = 'contenedores-dobles-styles';
    style.textContent = `
      /* Contenedor principal */
      .contenedores-dobles {
        width: 100%;
        max-width: 1320px;
        margin: 2.25rem auto;
        padding: clamp(1rem, 2.2vw, 2.25rem);
        border-radius: 16px;
        box-shadow: 0 6px 24px rgba(0,0,0,0.25);
        background: linear-gradient(180deg, rgba(30,30,30,0.6), rgba(30,30,30,0.45));
        border: 1px solid rgba(255,255,255,0.04);
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: rgba(255,255,255,0.95);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .contenedores-dobles:hover {
        transform: translateY(-4px);
        box-shadow: 0 14px 40px rgba(0,0,0,0.45);
      }

      /* Título de la sección */
      .contenedores-dobles__title {
        margin: 0 0 1.25rem 0;
        font-size: clamp(1.4rem, 2.2vw, 2rem);
        font-weight: 700;
        color: #ff9f40;
        text-shadow: 0 2px 6px rgba(0,0,0,0.45);
        text-align: center;
      }

      /* Grid flexible para los 2 contenedores */
      .contenedores-dobles__grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(320px, 1fr));
        gap: clamp(1rem, 1.4vw, 1.5rem);
        /* Make both columns equal height and stretch boxes */
        align-items: stretch;
        grid-auto-rows: 1fr; /* ensures rows match height so children can stretch */
      }

      .contenedores-dobles__box {
        min-height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; /* align content at the top */
        flex: 1 1 auto; /* allow boxes to expand evenly and match height */
        box-sizing: border-box;
        border-radius: 14px;
        padding: 1.5rem;
        gap: 1rem;
        border: 1px solid rgba(255,255,255,0.06);
        transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
      }

      .contenedores-dobles__box--left {
        background: linear-gradient(135deg, rgba(250, 126, 44, 0.12), rgba(250, 126, 44, 0.04));
        border: 2px solid rgba(250,126,44,0.12);
      }

      .contenedores-dobles__box--right {
        background: linear-gradient(135deg, rgba(96, 165, 250, 0.08), rgba(96, 165, 250, 0.03));
        border: 2px solid rgba(96,165,250,0.12);
      }

      /* Titulos dentro de las cajas */
      .contenedores-dobles__box h3 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: rgba(255,255,255,0.98);
      }

      .contenedores-dobles__body {
        font-size: 1rem;
        line-height: 1.65;
        color: rgba(255,255,255,0.86);
        flex: 1 1 auto;
        overflow: auto; /* prevents inner content from forcing the box larger */
        min-height: 0; /* allow flex container to size children properly */
      }

      .contenedores-dobles__cta {
        display: flex;
        gap: 0.75rem;
        justify-content: flex-end;
        align-items: center;
      }

      .contenedores-dobles__small {
        font-size: 0.88rem;
        opacity: 0.85;
      }

      /* Responsive: stack on smaller viewports */
      @media (max-width: 1000px) {
        .contenedores-dobles__grid { grid-template-columns: 1fr; }
        .contenedores-dobles__cta { justify-content: flex-start; }
        .contenedores-dobles { padding: clamp(.8rem, 1.6vw, 1.25rem); }
      }

      @media (max-width: 420px) {
        .contenedores-dobles { padding: .85rem; margin: 1rem .75rem; }
        .contenedores-dobles__title { font-size: 1.25rem; }
        .contenedores-dobles__box { padding: .85rem; }
      }
    `;

    document.head.appendChild(style);
  }

  // Título
  const title = document.createElement('h2');
  title.className = 'contenedores-dobles__title';
  title.textContent = '🧩 Sección doble — Contenedores principales';

  // Grid
  const grid = document.createElement('div');
  grid.className = 'contenedores-dobles__grid';

  // Box left
  const boxLeft = document.createElement('article');
  boxLeft.className = 'contenedores-dobles__box contenedores-dobles__box--left';
  boxLeft.setAttribute('role', 'region');
  boxLeft.setAttribute('aria-label', 'Contenedor izquierdo');

  const leftTitle = document.createElement('h3');
  leftTitle.textContent = 'Sigue tu envío';

  // Use new TrackingWidget component for left box content
  const leftBody = TrackingWidget();

  boxLeft.append(leftTitle, leftBody);

  // Box right
  const boxRight = document.createElement('article');
  boxRight.className = 'contenedores-dobles__box contenedores-dobles__box--right';
  boxRight.setAttribute('role', 'region');
  boxRight.setAttribute('aria-label', 'Contenedor derecho');

  const rightTitle = document.createElement('h3');
  rightTitle.textContent = 'Información / Bloque B';

  // Add right side form component (paquetería)
  const rightBody = FormularioPaqueteria();
  // Keep the section title and the form element together
  boxRight.append(rightTitle, rightBody);

  // Montar grid
  grid.append(boxLeft, boxRight);
  section.append(title, grid);

  // Integration-safe accessibility helpers: ensure inner elements have useful ids
  try {
    // id for tracking input (if present)
    const trackingInput = section.querySelector('.tracking-widget__input');
    if (trackingInput && !trackingInput.id) trackingInput.id = 'tracking-input';

    // id for paqueteria form element
    const paqForm = section.querySelector('.form-paqueteria__form');
    if (paqForm && !paqForm.id) paqForm.id = 'form-paqueteria-form';
  } catch (e) {
    // do not break rendering — this is only a best-effort enhancement
    // eslint-disable-next-line no-console
    console.debug('ContenedoresDobles: optional accessibility ids not applied', e);
  }

  return section;
}

export default ContenedoresDobles;
