export function Feedback() {
  const container = document.createElement('div');
  container.className = 'container margen-navbar';
  
  container.innerHTML = `
    <style>
      .feedback-form {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
      }
      
      .feedback-title {
        font-size: 3rem;
        font-weight: 700;
        color: #f97316 !important;
        text-align: center;
        margin-bottom: 1.5rem;
        font-family: system-ui, Arial, sans-serif !important;
      }
      
      .feedback-description {
        text-align: center;
        color: rgba(255, 255, 255, 0.87);
        margin-bottom: 2.5rem;
        font-size: 1.1rem;
      }
      
      .form-group {
        margin-bottom: 1.8rem;
      }
      
      .form-label {
        display: block;
        color: #f97316;
        font-weight: 600;
        font-size: 1.1rem;
        margin-bottom: 0.6rem;
      }
      
      .form-input,
      .form-select,
      .form-textarea {
        width: 100%;
        padding: 0.9rem 1.2rem;
        background: #2a2a2a;
        border: 2px solid #404040;
        border-radius: 8px;
        color: #fff;
        font-size: 1rem;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        box-sizing: border-box;
      }
      
      .form-input:focus,
      .form-select:focus,
      .form-textarea:focus {
        outline: none;
        border-color: #f97316;
        box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.2);
      }
      
      .form-input.error,
      .form-select.error,
      .form-textarea.error {
        border-color: #ef4444;
      }
      
      .form-textarea {
        resize: vertical;
        min-height: 150px;
        font-family: inherit;
      }
      
      .form-select {
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23f97316' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 1.2rem;
        padding-right: 3rem;
      }
      
      .error-message {
        color: #ef4444;
        font-size: 0.9rem;
        margin-top: 0.4rem;
        display: none;
      }
      
      .error-message.show {
        display: block;
      }
      
      .submit-btn {
        width: 100%;
        padding: 1rem 2rem;
        background: #f97316;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        margin-top: 1rem;
      }
      
      .submit-btn:hover {
        background: #ea580c;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
      }
      
      .submit-btn:active {
        transform: translateY(0);
      }
      
      .submit-btn:disabled {
        background: #6b7280;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }
      
      .success-message {
        display: none;
        background: #10b981;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        margin-top: 1rem;
        font-weight: 600;
      }
      
      .success-message.show {
        display: block;
      }
      
      .feedback-image {
        width: 100%;
        max-width: 600px;
        height: auto;
        display: block;
        margin: 0 auto 2rem auto;
      }
      
      @media (max-width: 768px) {
        .feedback-title {
          font-size: 2rem;
        }
        
        .feedback-form {
          padding: 1rem;
        }
        
        .feedback-image {
          margin-bottom: 1.5rem;
        }
      }
    </style>
    
    <div class="feedback-form">
      <h1 class="feedback-title">Formulario de Feedback</h1>
      <p class="feedback-description">
        Ayúdanos a mejorar nuestro servicio. Comparte tu experiencia o reporta cualquier problema que hayas encontrado.
      </p>
      
      <img src="/feedback.png" alt="Correos Express" class="feedback-image" />
      
      <form id="feedbackForm">
        <div class="form-group">
          <label class="form-label" for="nombre">Nombre *</label>
          <input 
            type="text" 
            id="nombre" 
            class="form-input" 
            placeholder="Ingresa tu nombre (mínimo 3 caracteres)"
            required
          />
          <div class="error-message" id="nombreError">El nombre debe tener al menos 3 caracteres</div>
        </div>
        
        <div class="form-group">
          <label class="form-label" for="correo">Correo Electrónico *</label>
          <input 
            type="email" 
            id="correo" 
            class="form-input" 
            placeholder="ejemplo@correo.com"
            required
          />
          <div class="error-message" id="correoError">Por favor ingresa un correo electrónico válido</div>
        </div>
        
        <div class="form-group">
          <label class="form-label" for="prioridad">Tipo de Problema *</label>
          <select id="prioridad" class="form-select" required>
            <option value="">-- Selecciona una opción --</option>
            <option value="web">Problema en la web</option>
            <option value="correos">Problema con correos</option>
          </select>
          <div class="error-message" id="prioridadError">Por favor selecciona el tipo de problema</div>
        </div>
        
        <div class="form-group">
          <label class="form-label" for="descripcion">Descripción del Problema *</label>
          <textarea 
            id="descripcion" 
            class="form-textarea" 
            placeholder="Describe el problema encontrado (mínimo 30 caracteres)"
            required
          ></textarea>
          <div class="error-message" id="descripcionError">La descripción debe tener al menos 30 caracteres</div>
        </div>
        
        <button type="submit" class="submit-btn">Enviar Feedback</button>
        
        <div class="success-message" id="successMessage">
          ¡Gracias por tu feedback! Tu mensaje ha sido enviado correctamente.
        </div>
      </form>
    </div>
  `;
  
  // Agregar validación del formulario
  setTimeout(() => {
    const form = document.getElementById('feedbackForm');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const prioridadSelect = document.getElementById('prioridad');
    const descripcionTextarea = document.getElementById('descripcion');
    
    const nombreError = document.getElementById('nombreError');
    const correoError = document.getElementById('correoError');
    const prioridadError = document.getElementById('prioridadError');
    const descripcionError = document.getElementById('descripcionError');
    const successMessage = document.getElementById('successMessage');
    
    // Función de validación de email
    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
    
    // Validación en tiempo real
    nombreInput.addEventListener('input', () => {
      if (nombreInput.value.length < 3) {
        nombreInput.classList.add('error');
        nombreError.classList.add('show');
      } else {
        nombreInput.classList.remove('error');
        nombreError.classList.remove('show');
      }
    });
    
    correoInput.addEventListener('input', () => {
      if (!validarEmail(correoInput.value)) {
        correoInput.classList.add('error');
        correoError.classList.add('show');
      } else {
        correoInput.classList.remove('error');
        correoError.classList.remove('show');
      }
    });
    
    prioridadSelect.addEventListener('change', () => {
      if (prioridadSelect.value === '') {
        prioridadSelect.classList.add('error');
        prioridadError.classList.add('show');
      } else {
        prioridadSelect.classList.remove('error');
        prioridadError.classList.remove('show');
      }
    });
    
    descripcionTextarea.addEventListener('input', () => {
      if (descripcionTextarea.value.length < 30) {
        descripcionTextarea.classList.add('error');
        descripcionError.classList.add('show');
      } else {
        descripcionTextarea.classList.remove('error');
        descripcionError.classList.remove('show');
      }
    });
    
    // Manejo del envío del formulario
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      
      // Validar nombre
      if (nombreInput.value.length < 3) {
        nombreInput.classList.add('error');
        nombreError.classList.add('show');
        isValid = false;
      }
      
      // Validar correo
      if (!validarEmail(correoInput.value)) {
        correoInput.classList.add('error');
        correoError.classList.add('show');
        isValid = false;
      }
      
      // Validar prioridad
      if (prioridadSelect.value === '') {
        prioridadSelect.classList.add('error');
        prioridadError.classList.add('show');
        isValid = false;
      }
      
      // Validar descripción
      if (descripcionTextarea.value.length < 30) {
        descripcionTextarea.classList.add('error');
        descripcionError.classList.add('show');
        isValid = false;
      }
      
      if (!isValid) {
        return;
      }
      
      // Si todo es válido, mostrar mensaje de éxito
      successMessage.classList.add('show');
      
      // Resetear el formulario después de 2 segundos
      setTimeout(() => {
        form.reset();
        successMessage.classList.remove('show');
      }, 3000);
    });
  }, 100);
  
  return container;
}
