export function Contacto() {
  const container = document.createElement('div');
  container.className = 'container-formulario';
  
  // Inyectar estilos específicos del formulario
  if (!document.getElementById('formulario-styles')) {
    const style = document.createElement('style');
    style.id = 'formulario-styles';
    style.textContent = `
      .container-formulario {
        max-width: 800px !important;
        margin: 140px auto 2rem auto !important;
        padding: 3rem 2rem !important;
        background: #2a2a2a;
        border-radius: 20px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        color: #fff;
      }

      .titulo-formulario {
        text-align: center;
        color: #f97316 !important;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      .subtitulo-formulario {
        text-align: center;
        color: #ccc;
        margin-bottom: 3rem;
        font-size: 1.1rem;
      }

      .form-group {
        margin-bottom: 1.5rem;
        width: 100%;
      }

      .form-label {
        color: #f97316;
        font-weight: 600;
        margin-bottom: 0.5rem;
        display: block;
      }

      .form-control {
        background: #1a1a1a !important;
        border: 2px solid #404040 !important;
        color: #fff !important;
        border-radius: 10px !important;
        padding: 0.75rem 1rem !important;
        font-size: 1rem;
        transition: all 0.3s ease;
        width: 100%;
        box-sizing: border-box;
      }

      .form-control:focus {
        border-color: #f97316 !important;
        box-shadow: 0 0 0 0.2rem rgba(249, 115, 22, 0.25) !important;
        background: #1a1a1a !important;
        color: #fff !important;
        outline: none;
      }

      .form-control::placeholder {
        color: #999 !important;
      }

      textarea.form-control {
        min-height: 120px;
        resize: vertical;
      }

      .btn-enviar {
        background: linear-gradient(135deg, #f97316, #ea580c);
        border: none;
        color: white;
        padding: 1rem 3rem;
        font-size: 1.2rem;
        font-weight: 600;
        border-radius: 50px;
        width: 100%;
        transition: all 0.3s ease;
        margin-top: 2rem;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .btn-enviar:hover {
        background: linear-gradient(135deg, #ea580c, #dc2626);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(249, 115, 22, 0.4);
      }

      .btn-enviar:active {
        transform: translateY(0);
      }

      .btn-enviar:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      .btn-volver {
        background: linear-gradient(135deg, #6b7280, #4b5563);
        border: none;
        color: white;
        padding: 0.875rem 2.5rem;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 50px;
        width: 100%;
        transition: all 0.3s ease;
        margin-top: 1rem;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .btn-volver:hover {
        background: linear-gradient(135deg, #4b5563, #374151);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(107, 114, 128, 0.4);
      }

      .btn-volver:active {
        transform: translateY(0);
      }

      .campo-requerido {
        color: #f97316;
      }

      .info-contacto {
        background: #333;
        padding: 1.5rem;
        border-radius: 10px;
        margin-bottom: 2rem;
        border-left: 4px solid #f97316;
      }

      .info-contacto h4 {
        color: #f97316;
        margin-bottom: 1rem;
      }

      .info-contacto p {
        margin-bottom: 0.5rem;
        color: #ccc;
      }

      .email-validation, .telefono-validation, .nombre-validation {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        font-weight: 500;
      }

      .email-valid, .telefono-valid, .nombre-valid {
        color: #10b981;
      }

      .email-invalid, .telefono-invalid, .nombre-invalid {
        color: #ef4444;
      }

      .email-checking {
        color: #f59e0b;
      }

      .form-control.email-valid-input, .form-control.telefono-valid-input, .form-control.nombre-valid-input {
        border-color: #10b981 !important;
      }

      .form-control.email-invalid-input, .form-control.telefono-invalid-input, .form-control.nombre-invalid-input {
        border-color: #ef4444 !important;
      }

      .form-control.email-checking-input {
        border-color: #f59e0b !important;
      }

      .row {
        display: flex;
        gap: 1rem;
        margin-bottom: 0;
      }

      .col-md-6 {
        flex: 1;
        min-width: 0;
      }

      @media (max-width: 768px) {
        .container-formulario {
          margin: 120px 1rem 2rem 1rem !important;
          padding: 2rem 1.5rem !important;
        }
        
        .titulo-formulario {
          font-size: 2rem;
        }
        
        .btn-enviar {
          padding: 0.875rem 2rem;
          font-size: 1.1rem;
        }

        .row {
          flex-direction: column;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  container.innerHTML = `
    <h1 class="titulo-formulario">Consulta Jurídica</h1>
    <p class="subtitulo-formulario">Complete el formulario y nos pondremos en contacto con usted a la brevedad</p>
    
    <div class="info-contacto">
      <h4>📞 Información de Contacto</h4>
      <p><strong>Teléfono:</strong> 613 95 96 89</p>
      <p><strong>Email:</strong> luraproyecto@gmail.com</p>
      <p><strong>Horario:</strong> Lunes a Viernes de 9:00h a 18:00h</p>
    </div>

    <form id="formulario-contacto" method="POST">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="nombre" class="form-label">Nombre <span class="campo-requerido">*</span></label>
            <input type="text" 
                   class="form-control" 
                   id="nombre" 
                   name="nombre" 
                   placeholder="Su nombre"
                   required>
            <div id="nombre-validation" class="nombre-validation"></div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="form-group">
            <label for="apellidos" class="form-label">Apellidos <span class="campo-requerido">*</span></label>
            <input type="text" 
                   class="form-control" 
                   id="apellidos" 
                   name="apellidos" 
                   placeholder="Sus apellidos"
                   required>
            <div id="apellidos-validation" class="nombre-validation"></div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="telefono" class="form-label">Número de Teléfono <span class="campo-requerido">*</span></label>
            <input type="tel" 
                   class="form-control" 
                   id="telefono" 
                   name="telefono" 
                   placeholder="+34 123 45 67 89"
                   maxlength="18"
                   required>
            <div id="telefono-validation" class="telefono-validation"></div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="form-group">
            <label for="email" class="form-label">Correo Electrónico <span class="campo-requerido">*</span></label>
            <input type="email" 
                   class="form-control" 
                   id="email" 
                   name="email" 
                   placeholder="su.email@ejemplo.com"
                   required>
            <div id="email-validation" class="email-validation"></div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="caso" class="form-label">Breve Explicación del Caso <span class="campo-requerido">*</span></label>
        <textarea class="form-control" 
                  id="caso" 
                  name="caso" 
                  placeholder="Describa brevemente su situación legal, el tipo de consulta que necesita y cualquier detalle relevante que considere importante..."
                  required></textarea>
      </div>

      <button type="submit" class="btn-enviar">
        ✉️ Enviar Consulta
      </button>

      <button type="button" class="btn-volver" id="btn-volver-inicio">
        🏠 Volver al Inicio
      </button>
    </form>
    
    <div style="text-align: center; margin-top: 2rem; color: #999; font-size: 0.9rem;">
      <p>Sus datos serán tratados de forma confidencial conforme a nuestra Política de Cookies</p>
    </div>
  `;

  // Inicializar funcionalidad del formulario después de que se monte en el DOM
  setTimeout(() => {
    initFormulario();
  }, 0);
  
  return container;
}

// Variables globales para validación
let emailValido = false;
let validacionEnProceso = false;

// Función para validar email
async function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: '❌ Formato de email inválido' };
  }

  if (email.includes('@gmail.com')) {
    try {
      const localPart = email.split('@')[0];
      if (localPart.length < 3) {
        return { valid: false, message: '❌ El email de Gmail debe tener al menos 3 caracteres antes del @' };
      }
      if (!/^[a-zA-Z0-9._%+-]+$/.test(localPart)) {
        return { valid: false, message: '❌ El email contiene caracteres no válidos' };
      }
      
      await new Promise(resolve => setTimeout(resolve, 800));
      return { valid: true, message: '✅ Email válido' };
    } catch (error) {
      return { valid: false, message: '❌ Error al validar el email' };
    }
  } else {
    return { valid: true, message: '✅ Email válido' };
  }
}

// Función para formatear número de teléfono
function formatearTelefono(input) {
  let value = input.value.replace(/\D/g, '');
  
  if (value.length === 0) {
    input.value = '';
    return;
  }

  if (!input.value.startsWith('+')) {
    if (value.startsWith('34')) {
      value = value;
    } else if (value.startsWith('6') || value.startsWith('7') || value.startsWith('9')) {
      value = '34' + value;
    } else {
      value = '34' + value;
    }
  }

  let formatted = '+';
  
  if (value.length >= 2) {
    formatted += value.substring(0, 2);
  }
  if (value.length >= 3) {
    formatted += ' ' + value.substring(2, 5);
  }
  if (value.length >= 6) {
    formatted += ' ' + value.substring(5, 7);
  }
  if (value.length >= 8) {
    formatted += ' ' + value.substring(7, 9);
  }
  if (value.length >= 10) {
    formatted += ' ' + value.substring(9, 11);
  }

  input.value = formatted;
}

// Función para validar teléfono
function validarTelefono(telefono) {
  const telefonoPattern = /^\+\d{1,4} \d{3} \d{2} \d{2} \d{2}$/;
  return telefonoPattern.test(telefono);
}

// Función para validar nombres
function validarNombre(nombre) {
  if (nombre.includes('#')) {
    return { valid: false, message: '❌ El nombre no puede contener el símbolo #' };
  }
  
  if (nombre.trim().length < 2) {
    return { valid: false, message: '❌ Debe tener al menos 2 caracteres' };
  }
  
  const nombrePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
  if (!nombrePattern.test(nombre)) {
    return { valid: false, message: '❌ Solo se permiten letras y espacios' };
  }
  
  return { valid: true, message: '✅ Formato correcto' };
}

// Función para enviar a Google Sheets
async function enviarAGoogleSheets(datos) {
  try {
    const response = await fetch('https://sheetdb.io/api/v1/5oo9m0fkuyqzf', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          "Nombre": datos.nombre,
          "Apellidos": datos.apellidos,
          "Número": datos.telefono,
          "Correo": datos.email,
          "Explicación": datos.caso
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const resultado = await response.json();
    return { success: true, data: resultado };
  } catch (error) {
    console.error('Error al enviar a Google Sheets:', error);
    return { success: false, error: error.message };
  }
}

// Inicializar toda la funcionalidad del formulario
function initFormulario() {
  const emailInput = document.getElementById('email');
  const telefonoInput = document.getElementById('telefono');
  const nombreInput = document.getElementById('nombre');
  const apellidosInput = document.getElementById('apellidos');
  const formulario = document.getElementById('formulario-contacto');
  const btnVolver = document.getElementById('btn-volver-inicio');

  if (!emailInput || !telefonoInput || !nombreInput || !apellidosInput || !formulario) {
    return;
  }

  // Event listener para el botón de volver al inicio
  if (btnVolver) {
    btnVolver.addEventListener('click', function() {
      if (window.volverAlInicio) {
        window.volverAlInicio();
      }
    });
  }

  // Event listener para email
  emailInput.addEventListener('input', async function(e) {
    const email = e.target.value.trim();
    const validationDiv = document.getElementById('email-validation');

    if (email.length === 0) {
      validationDiv.textContent = '';
      e.target.className = 'form-control';
      emailValido = false;
      return;
    }

    if (validacionEnProceso) return;
    validacionEnProceso = true;

    validationDiv.textContent = '🔄 Validando email...';
    validationDiv.className = 'email-validation email-checking';
    e.target.className = 'form-control email-checking-input';

    try {
      const resultado = await validarEmail(email);
      
      validationDiv.textContent = resultado.message;
      if (resultado.valid) {
        validationDiv.className = 'email-validation email-valid';
        e.target.className = 'form-control email-valid-input';
        emailValido = true;
      } else {
        validationDiv.className = 'email-validation email-invalid';
        e.target.className = 'form-control email-invalid-input';
        emailValido = false;
      }
    } catch (error) {
      validationDiv.textContent = '❌ Error al validar email';
      validationDiv.className = 'email-validation email-invalid';
      e.target.className = 'form-control email-invalid-input';
      emailValido = false;
    }

    validacionEnProceso = false;
  });

  // Event listener para teléfono
  telefonoInput.addEventListener('input', function(e) {
    formatearTelefono(e.target);
    
    const telefono = e.target.value.trim();
    const validationDiv = document.getElementById('telefono-validation');

    if (telefono.length === 0) {
      validationDiv.textContent = '';
      validationDiv.className = 'telefono-validation';
      e.target.className = 'form-control';
      return;
    }

    const esValido = validarTelefono(telefono);
    
    if (esValido) {
      validationDiv.textContent = '✅ Formato de teléfono correcto';
      validationDiv.className = 'telefono-validation telefono-valid';
      e.target.className = 'form-control telefono-valid-input';
    } else {
      validationDiv.textContent = '❌ Formato: +34 123 45 67 89';
      validationDiv.className = 'telefono-validation telefono-invalid';
      e.target.className = 'form-control telefono-invalid-input';
    }
  });

  // Event listener para borrado de teléfono
  telefonoInput.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace' && e.target.value.length <= 1) {
      e.target.value = '';
      const validationDiv = document.getElementById('telefono-validation');
      validationDiv.textContent = '';
      validationDiv.className = 'telefono-validation';
      e.target.className = 'form-control';
    }
  });

  // Event listener para nombre
  nombreInput.addEventListener('input', function(e) {
    const nombre = e.target.value;
    const validationDiv = document.getElementById('nombre-validation');

    if (nombre.length === 0) {
      validationDiv.textContent = '';
      validationDiv.className = 'nombre-validation';
      e.target.className = 'form-control';
      return;
    }

    const resultado = validarNombre(nombre);
    
    validationDiv.textContent = resultado.message;
    if (resultado.valid) {
      validationDiv.className = 'nombre-validation nombre-valid';
      e.target.className = 'form-control nombre-valid-input';
    } else {
      validationDiv.className = 'nombre-validation nombre-invalid';
      e.target.className = 'form-control nombre-invalid-input';
    }
  });

  // Event listener para apellidos
  apellidosInput.addEventListener('input', function(e) {
    const apellidos = e.target.value;
    const validationDiv = document.getElementById('apellidos-validation');

    if (apellidos.length === 0) {
      validationDiv.textContent = '';
      validationDiv.className = 'nombre-validation';
      e.target.className = 'form-control';
      return;
    }

    const resultado = validarNombre(apellidos);
    
    validationDiv.textContent = resultado.message;
    if (resultado.valid) {
      validationDiv.className = 'nombre-validation nombre-valid';
      e.target.className = 'form-control nombre-valid-input';
    } else {
      validationDiv.className = 'nombre-validation nombre-invalid';
      e.target.className = 'form-control nombre-invalid-input';
    }
  });

  // Event listener para submit del formulario
  formulario.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!emailValido) {
      alert('Por favor, ingrese un email válido antes de enviar el formulario.');
      emailInput.focus();
      return;
    }

    if (!validarTelefono(telefonoInput.value.trim())) {
      alert('Por favor, ingrese un número de teléfono en el formato correcto: +34 123 45 67 89');
      telefonoInput.focus();
      return;
    }

    const resultadoNombre = validarNombre(nombreInput.value.trim());
    if (!resultadoNombre.valid) {
      alert(`Error en el nombre: ${resultadoNombre.message.replace('❌ ', '')}`);
      nombreInput.focus();
      return;
    }

    const resultadoApellidos = validarNombre(apellidosInput.value.trim());
    if (!resultadoApellidos.valid) {
      alert(`Error en los apellidos: ${resultadoApellidos.message.replace('❌ ', '')}`);
      apellidosInput.focus();
      return;
    }
    
    const formData = new FormData(this);
    const datos = {
      nombre: formData.get('nombre'),
      apellidos: formData.get('apellidos'),
      telefono: formData.get('telefono'),
      email: formData.get('email'),
      caso: formData.get('caso')
    };
    
    const btnEnviar = document.querySelector('.btn-enviar');
    const textoOriginal = btnEnviar.innerHTML;
    btnEnviar.innerHTML = '📤 Enviando...';
    btnEnviar.disabled = true;
    
    try {
      btnEnviar.innerHTML = '📊 Guardando datos...';
      const resultadoSheet = await enviarAGoogleSheets(datos);
      
      if (!resultadoSheet.success) {
        throw new Error('Error al guardar en Google Sheets');
      }
      
      btnEnviar.innerHTML = '✅ Consulta Enviada';
      btnEnviar.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      
      alert(`¡Consulta enviada exitosamente!\n\n✅ Datos guardados correctamente\n\nNos pondremos en contacto con usted pronto.`);
      
      setTimeout(() => {
        btnEnviar.innerHTML = textoOriginal;
        btnEnviar.disabled = false;
        btnEnviar.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
        formulario.reset();
        document.getElementById('email-validation').textContent = '';
        emailInput.className = 'form-control';
        emailValido = false;
      }, 4000);
      
    } catch (error) {
      btnEnviar.innerHTML = '❌ Error al Enviar';
      btnEnviar.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      
      alert('Error al enviar la consulta. Por favor, inténtelo nuevamente o contacte directamente por teléfono al 613 95 96 89.');
      
      setTimeout(() => {
        btnEnviar.innerHTML = textoOriginal;
        btnEnviar.disabled = false;
        btnEnviar.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
      }, 3000);
    }
  });
}
