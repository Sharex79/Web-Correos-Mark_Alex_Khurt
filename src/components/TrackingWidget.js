// ==========================================
//        COMPONENTE TRACKING WIDGET
//  Widget modular para seguimiento, búsqueda y utilidades
//  Estilos y lógica encapsulados en este archivo (no CSS externo)
// ==========================================

export function TrackingWidget() {
  const root = document.createElement('div');
  root.className = 'tracking-widget';

  // Inject styles once
  if (!document.getElementById('tracking-widget-styles')) {
    const style = document.createElement('style');
    style.id = 'tracking-widget-styles';
    style.textContent = `
      .tracking-widget{ width:100%; display:flex; flex-direction:column; gap:1rem; box-sizing:border-box; }
      .tracking-widget__title{ margin:0; color:#ff9f40; font-size:1.3rem; font-weight:800; text-shadow:0 2px 6px rgba(0,0,0,0.35); }
      .tracking-widget__desc{ margin:0; color:rgba(255,255,255,0.88); font-size:0.95rem; }

      .tracking-widget__search{ display:flex; gap:0.65rem; align-items:center; }
      .tracking-widget__input{ flex:1; padding:0.65rem 0.8rem; border-radius:12px; border:1px solid rgba(255,255,255,0.06); background:rgba(255,255,255,0.03); color:rgba(255,255,255,0.96); font-weight:600; }
      .tracking-widget__button{ padding:0.65rem 0.95rem; border-radius:12px; border:0; cursor:pointer; font-weight:700; background:linear-gradient(135deg,#ff7a1a,#fb923c); color:white; box-shadow:0 8px 22px rgba(0,0,0,0.25); }
      .tracking-widget__mini{ display:flex; gap:0.6rem; flex-direction:column; margin-top:0.25rem; }

      .tracking-widget__card{ width:100%; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.04); padding:0.9rem; border-radius:10px; display:flex; flex-direction:column; gap:0.4rem; cursor:pointer; transition:transform .12s ease, box-shadow .12s ease; box-sizing:border-box; }
      .tracking-widget__card:hover{ transform: translateY(-4px); box-shadow:0 12px 30px rgba(0,0,0,0.34); }
      .tracking-widget__card h4{ margin:0; font-size:1rem; font-weight:700; color:rgba(255,255,255,0.95); }
      .tracking-widget__card p{ margin:0; color:rgba(255,255,255,0.78); font-size:0.9rem; }

      .tracking-widget__result{ margin-top:0.8rem; padding:0.8rem; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border-radius:10px; border:1px solid rgba(255,255,255,0.03); color:rgba(255,255,255,0.92); font-size:0.95rem; }
      .tracking-widget__error{ color:#ffd1c2; font-weight:700; }
      .tracking-widget__input.invalid{ border-color:#ff6b6b; box-shadow: 0 0 0 4px rgba(255,107,107,0.06) inset; }
      .tracking-widget__linkbtn{ display:inline-block; margin-top:.65rem; padding:.5rem .85rem; border-radius:8px; text-decoration:none; background:linear-gradient(135deg,#60a5fa,#3b82f6); color:white; font-weight:700; box-shadow:0 8px 20px rgba(59,130,246,0.12); }

      @media (max-width:720px){ .tracking-widget__search{ flex-direction:column; align-items:stretch; } .tracking-widget__button{ width:100%; } .tracking-widget__mini{ gap:0.5rem; } }

      /* make sure long labels or content wrap and don't overflow */
      .tracking-widget__card h4, .tracking-widget__card p{ word-wrap: break-word; overflow-wrap: anywhere; }
      .tracking-widget__result{ word-break: break-word; }
    `;

    document.head.appendChild(style);
  }

  // Title and description
  const title = document.createElement('h3');
  title.className = 'tracking-widget__title';
  title.textContent = 'Seguimiento de envío';

  const desc = document.createElement('p');
  desc.className = 'tracking-widget__desc';
  desc.textContent = 'Introduce el número de seguimiento para ver el estado de tu envío, localizar oficinas, comprobar códigos postales o verificar un email.';

  // Search area
  const searchRow = document.createElement('div');
  searchRow.className = 'tracking-widget__search';

  const input = document.createElement('input');
  input.className = 'tracking-widget__input';
  input.placeholder = 'Núm. de seguimiento o guía (p. ej. 1Z999AA10123456784)';

  const btn = document.createElement('button');
  btn.className = 'tracking-widget__button';
  btn.type = 'button';
  btn.textContent = 'Buscar';

  searchRow.append(input, btn);

  // Quick action cards
  const mini = document.createElement('div');
  mini.className = 'tracking-widget__mini';

  function createCard(titleText, bodyText, hrefPlaceholder) {
    // create a non-functional link-style block for future wiring
    const card = document.createElement('div');
    card.className = 'tracking-widget__card tracking-widget__card--link';
    const h = document.createElement('h4'); h.textContent = titleText;
    const p = document.createElement('p'); p.textContent = bodyText;
    card.append(h, p);
    // mark visually/semantically as a link (no click behavior now)
    card.setAttribute('role', 'link');
    card.tabIndex = 0; // keyboard focusable, but NO action attached yet
    // store placeholder for future wiring (no effect today)
    if (hrefPlaceholder) card.dataset.href = hrefPlaceholder;
    return card;
  }

  // Placeholder handlers
  const resultBox = document.createElement('div');
  resultBox.className = 'tracking-widget__result';
  resultBox.hidden = true;

  function showResult(html) {
    resultBox.innerHTML = html;
    resultBox.hidden = false;
  }

  // Four static buttons (non-functional for now) stacked vertically
  const card1 = createCard('Localitza oficines, bústies i Citypaq', 'Localiza puntos cercanos (oficinas, buzones, Citypaq).', '/localitza');
  const card2 = createCard('Troba codis postals', 'Busca códigos postales por dirección o localidad.', '/codis-postals');
  const card3 = createCard('Verificador de correu electrònic', 'Comprobar formato y disponibilidad de un correo.', '/verificador-email');
  const card4 = createCard('Mis envíos', 'Historial y detalles de tus paquetes.', '/mis-paquetes.html');

  mini.append(card1, card2, card3, card4);

  // Tracking handler (mock)
  // Basic validation for tracking inputs: allow letters, digits, dash and spaces, require minimum length
  function isValidTracking(s) { return /^[A-Za-z0-9\-\s]{5,}$/.test(String(s || '').trim()); }

  btn.addEventListener('click', () => {
    const val = String(input.value || '').trim();

    // clear previous invalid state
    input.classList.remove('invalid');
    resultBox.hidden = true;

    if (!val) {
      input.classList.add('invalid');
      showResult('<span class="tracking-widget__error">Error:</span> Introduce un número de seguimiento.');
      return;
    }

    if (!isValidTracking(val)) {
      input.classList.add('invalid');
      showResult('<span class="tracking-widget__error">Error:</span> Formato inválido. Usa solo letras, números, espacios o guiones (mín. 5 caracteres).');
      return;
    }

    // Mock result — replace later with API call
    const now = new Date().toLocaleString();
    showResult(`<strong>Seguimiento: ${val}</strong><br/><em>Última actualización:</em> ${now}<br/><br/>Estado: En tránsito<br/>Origen: Oficina central<br/>Destino: Tu ciudad (estimado 2-3 días)`);
  });

  // clear error as user types
  input.addEventListener('input', () => {
    input.classList.remove('invalid');
    if (!resultBox.hidden) { resultBox.hidden = true; }
  });

  // removed the extra 'Buscar CP' button — quick actions are now the vertical buttons above

  // Compose
  root.append(title, desc, searchRow, mini, resultBox);

  return root;
}

export default TrackingWidget;
