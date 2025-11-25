// ==========================================
//      COMPONENTE CONTENEDORES DOBLES
//  Dos grandes contenedores side-by-side (responsive)
//  Styles are injected only inside this file (no external CSS)
// ==========================================

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
        max-width: 1200px;
        margin: 2rem 0;
        padding: 2.25rem;
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
        font-size: 2rem;
        font-weight: 700;
        color: #ff9f40;
        text-shadow: 0 2px 6px rgba(0,0,0,0.45);
        text-align: center;
      }

      /* Grid flexible para los 2 contenedores */
      .contenedores-dobles__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        align-items: stretch;
      }

      .contenedores-dobles__box {
        min-height: 320px;
        border-radius: 14px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-between;
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
      @media (max-width: 960px) {
        .contenedores-dobles__grid {
          grid-template-columns: 1fr;
        }
        .contenedores-dobles__cta {
          justify-content: flex-start;
        }
      }

      @media (max-width: 420px) {
        .contenedores-dobles { padding: 1.25rem; }
        .contenedores-dobles__title { font-size: 1.6rem; }
        .contenedores-dobles__box { padding: 1rem; }
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
  leftTitle.textContent = 'Servicio / Bloque A';

  const leftBody = document.createElement('div');
  leftBody.className = 'contenedores-dobles__body';
  leftBody.innerHTML = `<p class="contenedores-dobles__small">Aquí puedes describir un servicio principal, añadir enlaces rápidos, o mostrar una llamada a la acción. Este contenedor está pensado como un bloque grande y sólido en el diseño — se adapta y se expande en pantallas pequeñas para mantener una lectura cómoda.</p>`;

  const leftCta = document.createElement('div');
  leftCta.className = 'contenedores-dobles__cta';
  leftCta.innerHTML = `<button style="background:#ff7a1a;color:white;padding:0.65rem 1rem;border-radius:10px;border:0;font-weight:700;cursor:pointer">Más info</button>`;

  boxLeft.append(leftTitle, leftBody, leftCta);

  // Box right
  const boxRight = document.createElement('article');
  boxRight.className = 'contenedores-dobles__box contenedores-dobles__box--right';
  boxRight.setAttribute('role', 'region');
  boxRight.setAttribute('aria-label', 'Contenedor derecho');

  const rightTitle = document.createElement('h3');
  rightTitle.textContent = 'Información / Bloque B';

  const rightBody = document.createElement('div');
  rightBody.className = 'contenedores-dobles__body';
  rightBody.innerHTML = `<p class="contenedores-dobles__small">Utiliza este lado para destacar otra área (ejemplo — preguntas, tarifas o enlaces a documentos). Si la pantalla es pequeña, esta caja aparecerá debajo de la otra para una lectura cómoda y sencilla (mobile-first friendliness).</p>`;

  const rightCta = document.createElement('div');
  rightCta.className = 'contenedores-dobles__cta';
  rightCta.innerHTML = `<button style="background:linear-gradient(135deg,#60a5fa,#3b82f6);color:white;padding:0.65rem 1rem;border-radius:10px;border:0;font-weight:700;cursor:pointer">Contactar</button>`;

  boxRight.append(rightTitle, rightBody, rightCta);

  // Montar grid
  grid.append(boxLeft, boxRight);
  section.append(title, grid);

  return section;
}

export default ContenedoresDobles;
