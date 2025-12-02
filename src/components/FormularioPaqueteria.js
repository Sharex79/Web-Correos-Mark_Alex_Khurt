// ==========================================
//   COMPONENTE FORMULARIO PAQUETERÍA
//  Formulario modular para la sección derecha
//  CSS inyectado y contenido EN ESPAÑOL
// ==========================================

export function FormularioPaqueteria() {
  const container = document.createElement('div');
  container.className = 'form-paqueteria';

  // inyectar estilos una sola vez
  if (!document.getElementById('form-paqueteria-styles')) {
    const style = document.createElement('style');
    style.id = 'form-paqueteria-styles';
    style.textContent = `
      :root{ --accent-orange: #ff9f40; --accent-blue-1: #60a5fa; --accent-blue-2: #3b82f6; }
      .form-paqueteria{ display:flex; flex-direction:column; gap:1rem; width:100%; box-sizing:border-box; }

      .form-paqueteria__header{ display:flex; flex-direction:column; gap:.25rem; }
      .form-paqueteria__header h3{ margin:0; font-size:1.1rem; font-weight:800; color:var(--accent-orange); }
      .form-paqueteria__subtitle{ color:rgba(255,255,255,0.9); font-size:.95rem; }

      .form-paqueteria__form{ display:flex; flex-direction:column; gap:.85rem; padding:1rem; border-radius:12px; background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015)); border:1px solid rgba(255,255,255,0.04); box-shadow: 0 6px 18px rgba(0,0,0,0.35); max-width:100%; box-sizing:border-box; }

      .form-paqueteria__row{ display:flex; gap:.75rem; align-items:center; }
      .form-paqueteria__col{ flex:1 1 auto; min-width:0; }

      label{ display:block; font-weight:600; font-size:.95rem; color:rgba(255,255,255,0.95); margin-bottom: .35rem; }

      input[type=text], select{ width:100%; padding:.6rem .75rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06); background:rgba(255,255,255,0.03); color:rgba(255,255,255,0.96); font-size:.96rem; box-sizing:border-box; min-width:0; }
      input[type=text]::placeholder{ color:rgba(255,255,255,0.5); }
      input[type=text]:focus, select:focus{ outline: none; box-shadow: 0 6px 18px rgba(50,50,50,0.35) inset, 0 0 0 4px rgba(96,165,250,0.06); border-color: rgba(96,165,250,0.35); }

      .form-paqueteria__sizegrid{ display:grid; grid-template-columns: repeat(2, minmax(120px, 1fr)); gap:.6rem; }
      .form-paqueteria__size{ padding:.6rem .85rem; border-radius:12px; background:linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border:1px solid rgba(255,255,255,0.04); display:flex; flex-direction:row; justify-content:space-between; align-items:center; gap:.5rem; cursor:pointer; transition: transform .12s ease, box-shadow .12s ease; min-width:0; }
      .form-paqueteria__size:hover{ transform: translateY(-3px); box-shadow: 0 8px 22px rgba(0,0,0,0.25); }
      .form-paqueteria__size strong{ font-size: .95rem; display:block; }
      .form-paqueteria__size span{ font-size: .85rem; color: rgba(255,255,255,0.78); }

      .form-paqueteria__radiowrap{ display:flex; align-items:center; gap:.5rem; }
      .form-paqueteria__size input[type=radio]{ width:18px; height:18px; }

      .form-paqueteria__cta{ display:flex; justify-content:space-between; align-items:center; gap:.5rem; margin-top:.5rem; }
      .form-paqueteria__btn{ padding:.6rem 1rem; border-radius:10px; border:0; cursor:pointer; font-weight:700; min-width:110px; }
      .form-paqueteria__btn--primary{ background:linear-gradient(135deg,var(--accent-blue-1),var(--accent-blue-2)); color:#fff; box-shadow:0 6px 18px rgba(59,130,246,0.15); }
      .form-paqueteria__btn--ghost{ background:transparent; color:rgba(255,255,255,0.93); border:1px solid rgba(255,255,255,0.06); }

      .form-paqueteria__small{ font-size:.92rem; color: rgba(255,255,255,0.82); }

      /* validation styles */
      .form-paqueteria__error{ color: #ffd1c2; font-size: .86rem; margin-top: .3rem; display:block; }
      .form-paqueteria input.invalid, .form-paqueteria select.invalid{ border-color: #ff6b6b; box-shadow: 0 0 0 3px rgba(255,107,107,0.06) inset; }

      /* modal / popup for customer confirmation */
      .form-paqueteria__modal-overlay{ position:fixed; inset:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:9999; }
      .form-paqueteria__modal{ width:100%; max-width:520px; background:linear-gradient(180deg, #0f1724, #0b1220); border-radius:12px; padding:1rem; border:1px solid rgba(255,255,255,0.04); box-shadow:0 18px 60px rgba(0,0,0,0.6); }
      .form-paqueteria__modal h4{ margin:0 0 0.6rem 0; color:var(--accent-orange); font-weight:800; }
      .form-paqueteria__modal p{ margin:0 0 1rem 0; color:rgba(255,255,255,0.85); font-size:.95rem; }
      .form-paqueteria__modal-field{ display:flex; flex-direction:column; gap:.35rem; margin-bottom:.65rem; }
      .form-paqueteria__modal-field input{ padding:.6rem .8rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06); background:rgba(255,255,255,0.02); color:rgba(255,255,255,0.96); }
      .form-paqueteria__modal-actions{ display:flex; gap:.6rem; justify-content:flex-end; margin-top:.5rem; }
      .form-paqueteria__modal-actions .form-paqueteria__btn{ min-width:120px; }
      .form-paqueteria__modal .error{ color:#ffd1c2; font-size:.88rem; }

      @media (max-width: 900px){
        .form-paqueteria__row{ flex-direction:column; }
        .form-paqueteria__sizegrid{ grid-template-columns: 1fr 1fr; }
        .form-paqueteria__form{ padding: .8rem; }
      }

      @media (max-width: 520px){
        .form-paqueteria__sizegrid{ grid-template-columns: 1fr; }
        .form-paqueteria__cta{ flex-direction:column-reverse; align-items:stretch; }
        .form-paqueteria__btn{ width:100%; }
        .form-paqueteria__form{ padding: .6rem; }
      }
    `;
    document.head.appendChild(style);
  }

  // Header text
  const header = document.createElement('div');
  header.className = 'form-paqueteria__header';

  const heroTitle = document.createElement('h3');
  heroTitle.textContent = '';
  heroTitle.style.cssText = 'margin:0;color:#ff9f40;font-size:1.2rem;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.4)';

  const heroSubtitle = document.createElement('div');
  heroSubtitle.className = 'form-paqueteria__subtitle';
  heroSubtitle.textContent = 'Envíos rápidos y económicos para todo el mundo — Desde 5,63€';

  header.append(heroTitle, heroSubtitle);

  // Form element
  const form = document.createElement('form');
  form.className = 'form-paqueteria__form';
  form.setAttribute('autocomplete','off');

  // Helper to add labeled inputs
  function addField(labelText, inputEl) {
    const wrapper = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = labelText;
    wrapper.appendChild(label);
    wrapper.appendChild(inputEl);

    // Add an inline error span (hidden by default) so we can show validation errors
    const err = document.createElement('span');
    err.className = 'form-paqueteria__error';
    err.hidden = true;
    wrapper.appendChild(err);
    return wrapper;
  }

  // Producto select
  const productoSelect = document.createElement('select');
  productoSelect.innerHTML = `<option>Paquetería</option><option>Documentos</option>`;
  form.appendChild(addField('Indica el producto que quieres enviar', productoSelect));

  // Dirección de Origen
  const direccionOrigen = document.createElement('input');
  direccionOrigen.type = 'text'; direccionOrigen.placeholder = 'Dirección de origen (calle, nº, referencia)';
  form.appendChild(addField('Dirección de origen', direccionOrigen));

  // Dirección de Destinación
  const direccionDest = document.createElement('input');
  direccionDest.type = 'text'; direccionDest.placeholder = 'Dirección de destino (calle, nº, referencia)';
  form.appendChild(addField('Dirección de destino', direccionDest));

  // Codi postal origen
  const codiOrigen = document.createElement('input');
  codiOrigen.type = 'text'; codiOrigen.placeholder = 'Código postal origen';
  form.appendChild(addField('Código postal origen', codiOrigen));

  // Codi postal destinación
  const codiDest = document.createElement('input');
  codiDest.type = 'text'; codiDest.placeholder = 'Código postal destino';
  form.appendChild(addField('Código postal destino', codiDest));

  // Helper validation functions
  function showErrorFor(inputEl, message) {
    const container = inputEl.parentElement;
    if (!container) return;
    const err = container.querySelector('.form-paqueteria__error');
    if (err) { err.textContent = message; err.hidden = false; }
    inputEl.classList.add('invalid');
  }

  function clearErrorFor(inputEl) {
    const container = inputEl.parentElement;
    if (!container) return;
    const err = container.querySelector('.form-paqueteria__error');
    if (err) { err.textContent = ''; err.hidden = true; }
    inputEl.classList.remove('invalid');
  }

  function validatePostal(code) {
    // Strict Spain postal code rule: exactly 5 numeric digits
    return /^[0-9]{5}$/.test(String(code || '').trim());
  }

  function validateTextMin(value, minLen = 3) { return String(value || '').trim().length >= minLen; }

  // Add real-time listeners to clear errors as user types
  [direccionOrigen, direccionDest, codiOrigen, codiDest, productoSelect].forEach((el) => {
    el.addEventListener('input', () => clearErrorFor(el));
  });

  // DNI / NIE validation (basic format): 8 digits + letter OR X/Y/Z + 7 digits + letter
  function validateDni(value) {
    const s = String(value || '').trim();
    if (!s) return false;
    const pattern = /^(?:\d{8}|[XxYyZz]\d{7})[A-Za-z]$/;
    return pattern.test(s);
  }

  // Build and show a modal to ask for full name and DNI/NIE, then call onConfirm with {name,dni}
  function showCustomerModal(onConfirm, onCancel, onAfterConfirm) {
    const previousFocus = document.activeElement;

    const overlay = document.createElement('div');
    overlay.className = 'form-paqueteria__modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    const modal = document.createElement('div');
    modal.className = 'form-paqueteria__modal';

    const h = document.createElement('h4');
    h.textContent = 'Confirma tus datos para continuar';
    const p = document.createElement('p');
    p.textContent = 'Necesitamos tu nombre completo y DNI/NIE para calcular tarifas con precisión. Solo se almacenará localmente por ahora (mock).';

    // Two name fields: remitente (sender) and destinatario (receiver)
    const fieldRemitente = document.createElement('div');
    fieldRemitente.className = 'form-paqueteria__modal-field';
    const labelRemitente = document.createElement('label'); labelRemitente.textContent = 'Nombre del remitente';
    const inputRemitente = document.createElement('input'); inputRemitente.type = 'text'; inputRemitente.placeholder = 'Nombre del remitente';
    const errRemitente = document.createElement('div'); errRemitente.className = 'error'; errRemitente.style.display = 'none';
    fieldRemitente.append(labelRemitente, inputRemitente, errRemitente);

    const fieldDestinatario = document.createElement('div');
    fieldDestinatario.className = 'form-paqueteria__modal-field';
    const labelDestinatario = document.createElement('label'); labelDestinatario.textContent = 'Nombre del destinatario';
    const inputDestinatario = document.createElement('input'); inputDestinatario.type = 'text'; inputDestinatario.placeholder = 'Nombre del destinatario';
    const errDestinatario = document.createElement('div'); errDestinatario.className = 'error'; errDestinatario.style.display = 'none';
    fieldDestinatario.append(labelDestinatario, inputDestinatario, errDestinatario);

    const fieldDni = document.createElement('div');
    fieldDni.className = 'form-paqueteria__modal-field';
    const labelDni = document.createElement('label'); labelDni.textContent = 'DNI / NIE';
    const inputDni = document.createElement('input'); inputDni.type = 'text'; inputDni.placeholder = 'Ej: 12345678A o X1234567B';
    const errDni = document.createElement('div'); errDni.className = 'error'; errDni.style.display = 'none';
    fieldDni.append(labelDni, inputDni, errDni);

    const actions = document.createElement('div'); actions.className = 'form-paqueteria__modal-actions';
    const cancelBtn = document.createElement('button'); cancelBtn.type = 'button'; cancelBtn.className = 'form-paqueteria__btn form-paqueteria__btn--ghost'; cancelBtn.textContent = 'Cancelar';
    const confirmBtn = document.createElement('button'); confirmBtn.type = 'button'; confirmBtn.className = 'form-paqueteria__btn form-paqueteria__btn--primary'; confirmBtn.textContent = 'Confirmar';
    actions.append(cancelBtn, confirmBtn);

    modal.append(h, p, fieldRemitente, fieldDestinatario, fieldDni, actions);
    overlay.append(modal);
    document.body.appendChild(overlay);

    // Focus handling
    // Focus first field (remitente)
    setTimeout(() => inputRemitente.focus(), 40);

    function cleanup() {
      try { overlay.remove(); } catch (e) { /* ignore */ }
      if (previousFocus && previousFocus.focus) previousFocus.focus();
      document.removeEventListener('keydown', onKeyDown);
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') { e.preventDefault(); onCancel && onCancel(); cleanup(); }
      if (e.key === 'Enter') { e.preventDefault(); confirm(); }
    }

    document.addEventListener('keydown', onKeyDown);

    cancelBtn.addEventListener('click', () => { onCancel && onCancel(); cleanup(); });

    function validateAndShowErrors() {
      let ok = true;
      if (!validateTextMin(inputRemitente.value, 3)) { errRemitente.textContent = 'Introduce el nombre del remitente (mín. 3 caracteres).'; errRemitente.style.display = 'block'; ok = false; } else { errRemitente.textContent = ''; errRemitente.style.display = 'none'; }
      if (!validateTextMin(inputDestinatario.value, 3)) { errDestinatario.textContent = 'Introduce el nombre del destinatario (mín. 3 caracteres).'; errDestinatario.style.display = 'block'; ok = false; } else { errDestinatario.textContent = ''; errDestinatario.style.display = 'none'; }
      if (!validateDni(inputDni.value)) { errDni.textContent = 'DNI/NIE inválido (ej: 12345678A o X1234567B).'; errDni.style.display = 'block'; ok = false; } else { errDni.textContent = ''; errDni.style.display = 'none'; }
      return ok;
    }

    confirmBtn.addEventListener('click', confirm);

    function confirm() {
      if (!validateAndShowErrors()) {
        // focus first invalid
        if (errName.style.display === 'block') inputName.focus(); else if (errDni.style.display === 'block') inputDni.focus();
        return;
      }
      const result = { remitente: inputRemitente.value.trim(), destinatario: inputDestinatario.value.trim(), dni: inputDni.value.trim() };

      // call the onConfirm hook first (for payload updates, logging, UI toggles)
      onConfirm && onConfirm(result);

      // Replace modal content with a small confirmation ('pedido guardado') view
      modal.innerHTML = '';
      const okH = document.createElement('h4'); okH.textContent = 'Pedido guardado';
      const okP = document.createElement('p'); okP.textContent = `Pedido guardado para ${result.remitente} → ${result.destinatario} (DNI/NIE: ${result.dni}).`;
      const okInfo = document.createElement('div'); okInfo.style.marginTop = '.6rem'; okInfo.style.color = 'rgba(255,255,255,0.9)'; okInfo.style.fontSize = '.95rem'; okInfo.textContent = 'Se ha guardado localmente — en próximas versiones se mandará al servidor.';
      const okActions = document.createElement('div'); okActions.className = 'form-paqueteria__modal-actions';
      const closeBtn = document.createElement('button'); closeBtn.type = 'button'; closeBtn.className = 'form-paqueteria__btn form-paqueteria__btn--primary'; closeBtn.textContent = 'Cerrar';
      okActions.append(closeBtn);

      modal.append(okH, okP, okInfo, okActions);

      // call after-confirm hook (reset UI / form) so the form resets while the success modal is visible
      try { onAfterConfirm && onAfterConfirm(result); } catch (e) { /* don't break the UI flow */ }

      // close modal only when the user clicks 'Cerrar' or clicks outside the modal
      closeBtn.addEventListener('click', () => { cleanup(); });

      // Clicking outside the modal (on the overlay) also closes it; clicks inside modal do not
      overlay.addEventListener('click', (ev) => {
        if (ev.target === overlay) cleanup();
      });
    }

    // clear field errors as user types
    inputRemitente.addEventListener('input', () => { errRemitente.style.display = 'none'; });
    inputDestinatario.addEventListener('input', () => { errDestinatario.style.display = 'none'; });
    inputDni.addEventListener('input', () => { errDni.style.display = 'none'; });

    // return overlay so caller can manipulate if needed
    return overlay;
  }

  // País
  const pais = document.createElement('input');
  pais.type = 'text'; pais.placeholder = 'País';
  // País — campo fijo (España)
  // set both value and defaultValue so form.reset() and custom clears keep it as España
  pais.value = 'España';
  pais.defaultValue = 'España';
  pais.readOnly = true;
  pais.setAttribute('aria-label', 'País');
  form.appendChild(addField('País', pais));

  // Size selection grid with radio buttons
  const sizeGrid = document.createElement('div');
  sizeGrid.className = 'form-paqueteria__sizegrid';

  const sizes = [
    { code: 'XS', weight: 'Hasta 2 kg', dims: '30x20x20' },
    { code: 'S', weight: 'Hasta 5 kg', dims: '35x35x24' },
    { code: 'M', weight: 'Hasta 10 kg', dims: '40x40x37' },
    { code: 'L', weight: 'Hasta 20 kg', dims: '55x55x39' }
  ];

  sizes.forEach((s, i) => {
    const card = document.createElement('label');
    card.className = 'form-paqueteria__size';
    card.htmlFor = `size-${s.code}`;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'size';
    radio.id = `size-${s.code}`;
    radio.value = s.code;
    if (i === 0) radio.checked = true;

    const strong = document.createElement('strong');
    strong.textContent = `${s.code} — ${s.weight}`;

    const dims = document.createElement('span');
    dims.className = 'form-paqueteria__small';
    dims.textContent = `Dimensiones: ${s.dims}`;

    card.append(radio, strong, dims);
    sizeGrid.appendChild(card);
  });

  form.appendChild(addField('¿Qué tamaño y peso tiene el paquete?', sizeGrid));

  // CTAs
  const cta = document.createElement('div');
  cta.className = 'form-paqueteria__cta';

  const btnGhost = document.createElement('button');
  btnGhost.type = 'button';
  btnGhost.className = 'form-paqueteria__btn form-paqueteria__btn--ghost';
  btnGhost.textContent = 'Borrar';
  // Clear everything except the country which should remain "España".
  btnGhost.onclick = () => {
    // Reset select to first option
    if (productoSelect) productoSelect.selectedIndex = 0;

    // Clear text inputs
    direccionOrigen.value = '';
    direccionDest.value = '';
    codiOrigen.value = '';
    codiDest.value = '';

    // Reset radios to first option
    const radios = form.querySelectorAll('input[name="size"]');
    radios.forEach((r, i) => r.checked = i === 0);

    // Make sure the country stays España
    pais.value = pais.defaultValue || 'España';

    // Reset primary button text back to default
    btnPrimary.textContent = 'Calcular envío';
  };

  // reset form helper used by both the "Borrar" button and after successful confirmation
  function resetForm() {
    if (productoSelect) productoSelect.selectedIndex = 0;
    direccionOrigen.value = '';
    direccionDest.value = '';
    codiOrigen.value = '';
    codiDest.value = '';
    const radios = form.querySelectorAll('input[name="size"]');
    radios.forEach((r, i) => r.checked = i === 0);
    pais.value = pais.defaultValue || 'España';
    btnPrimary.textContent = 'Calcular envío';
  }

  const btnPrimary = document.createElement('button');
  btnPrimary.type = 'submit';
  btnPrimary.className = 'form-paqueteria__btn form-paqueteria__btn--primary';
  btnPrimary.textContent = 'Calcular envío';

  cta.append(btnGhost, btnPrimary);
  form.appendChild(cta);

  // Prevent default submit and show console-friendly object for now
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // basic validation before creating payload
    let ok = true;

    // basic address validation
    if (!validateTextMin(direccionOrigen.value)) { showErrorFor(direccionOrigen, 'Introduce una dirección de origen válida (mín. 3 caracteres).'); ok = false; }
    if (!validateTextMin(direccionDest.value)) { showErrorFor(direccionDest, 'Introduce una dirección de destino válida (mín. 3 caracteres).'); ok = false; }

    // postal codes: only numbers and exact length 5
    if (!validatePostal(codiOrigen.value)) { showErrorFor(codiOrigen, 'Código postal inválido — debe contener exactamente 5 números.'); ok = false; }
    if (!validatePostal(codiDest.value)) { showErrorFor(codiDest, 'Código postal inválido — debe contener exactamente 5 números.'); ok = false; }

    if (!ok) {
      // focus the first invalid field for quick correction
      const firstInvalid = form.querySelector('input.invalid, select.invalid');
      if (firstInvalid) firstInvalid.focus();
      console.warn('Formulario Paquetería: validación fallida');
      return;
    }

    // simple payload
    const payload = {
      producto: productoSelect.value,
      direccion_origen: direccionOrigen.value || '',
      direccion_destino: direccionDest.value || '',
      codigo_postal_origen: codiOrigen.value || '',
      codigo_postal_destino: codiDest.value || '',
      pais: 'España',
      talla: form.querySelector('input[name="size"]:checked')?.value || ''
    };
    // At this point base validations passed — ask the user for name and DNI/NIE
    // disable button to avoid double clicks while modal is open
    try { btnPrimary.disabled = true; } catch (e) { /* ignore */ }

    showCustomerModal(
      (customer) => {
        try {
          payload.nombre_remitente = customer.remitente;
          payload.nombre_destinatario = customer.destinatario;
          payload.dni_nie = customer.dni;
          // TODO: connect to price API or calculation — payload now includes customer data
          console.info('Formulario Paquetería (final):', payload);

          // show a simple visual confirmation
            // When the modal confirm flow finishes, caller will set the UI; keep this behavior here for successful immediate calculation
            btnPrimary.textContent = 'Calculado ✓';
            setTimeout(() => (btnPrimary.textContent = 'Calcular envío'), 1400);
        } finally {
          btnPrimary.disabled = false;
        }
      },
      () => {
        // user cancelled — re-enable primary button and keep form untouched
        try { btnPrimary.disabled = false; } catch (e) { /* ignore */ }
      }
      ,
      (customer) => {
        // after-confirm: modal has been swapped to a short "pedido guardado" message by the modal
        // reset the form now (user has confirmed their identity)
        try {
          resetForm();
          console.info('Pedido guardado localmente:', { payload });
        } catch (e) { /* ignore */ }
      }
    );
  });

  container.append(header, form);
  return container;
}

export default FormularioPaqueteria;
