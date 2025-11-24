export function PoliticaCookies() {
  const container = document.createElement('div');
  container.className = 'container margen-navbar';
  container.id = 'contenido-cookies';
  
  // Agregar estilos
  if (!document.getElementById('legalidades-styles')) {
    const style = document.createElement('style');
    style.id = 'legalidades-styles';
    style.textContent = `
      .container.margen-navbar {
        color: #fff !important;
        max-width: 1200px;
        padding: 2rem;
        background: rgba(42, 42, 42, 0.95);
        border-radius: 15px;
        margin-top: 2rem;
      }
      .container.margen-navbar h1,
      .container.margen-navbar h2,
      .container.margen-navbar h3,
      .container.margen-navbar h4,
      .top_legalidades,
      .Inicio-Informacion {
        color: #f97316 !important;
      }
      .container.margen-navbar p,
      .container.margen-navbar li,
      .container.margen-navbar td,
      .container.margen-navbar th {
        color: #fff !important;
      }
      .container.margen-navbar a {
        color: #60a5fa !important;
        text-decoration: underline;
      }
      .container.margen-navbar a:hover {
        color: #93c5fd !important;
      }
      .container.margen-navbar hr {
        border-color: rgba(249, 115, 22, 0.3);
      }
      .tabla-cookie {
        background: rgba(30, 30, 30, 0.8);
        border-collapse: collapse;
        width: 100%;
      }
      .tabla-cookie th {
        background: rgba(249, 115, 22, 0.2);
        padding: 1rem;
        text-align: left;
        border: 1px solid rgba(249, 115, 22, 0.3);
      }
      .tabla-cookie td {
        padding: 0.75rem 1rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .tabla-scroll {
        overflow-x: auto;
        margin: 1rem 0;
      }
    `;
    document.head.appendChild(style);
  }
  
  container.innerHTML = `
    <h1 class="Inicio-Informacion top_legalidades">Política de Cookies</h1>
    <p><b>Última actualización: 10 de noviembre de 2025</b></p>

    <p>
      Esta Política de Cookies explica qué son las cookies y cómo las utilizamos en nuestro sitio web profesional. 
      Le recomendamos leer esta política para comprender qué tipo de cookies empleamos, la información que recopilamos mediante cookies y cómo se utiliza dicha información en el marco de nuestros servicios jurídicos.
    </p>
    <p>
      Las cookies son fundamentales para el correcto funcionamiento de nuestro sitio web profesional y para mejorar su experiencia de navegación cuando consulta información sobre nuestros servicios legales.
    </p>
    <br>
    <hr/>
    <h2 class="top_legalidades">¿Qué son las cookies?</h2>
    <p>
      Las cookies son pequeños archivos de texto que nuestro sitio web coloca en su dispositivo cuando lo visita. 
      Se utilizan para garantizar el correcto funcionamiento de nuestro sitio web profesional, mejorar la navegación y recordar sus preferencias durante la consulta de información jurídica.
    </p>
    <br>
    <hr/>
    <h2 class="top_legalidades">Tipos de cookies que utilizamos</h2>
    <ol>
        <li class="NumeraciónCookies"><h3 class="top_legalidades">Cookies técnicas y necesarias</h3></li>
        <p>
          Estas cookies son imprescindibles para el correcto funcionamiento de nuestro sitio web profesional y no pueden ser desactivadas. 
          Se configuran en respuesta a acciones realizadas por usted, como la navegación por diferentes secciones o el envío de formularios de contacto.
        </p>
        <li class="NumeraciónCookies"><h3 class="top_legalidades">Cookies de funcionalidad</h3></li>
        <p>
          Permiten que nuestro sitio web recuerde sus preferencias de navegación y proporciona funcionalidades mejoradas para una mejor experiencia durante la consulta de información jurídica.
        </p>
        <li class="NumeraciónCookies"><h3 class="top_legalidades">Cookies de análisis web</h3></li>
        <p>
          Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web profesional, permitiéndonos mejorar continuamente nuestros servicios digitales. Actualmente utilizamos cookies analíticas básicas.
        </p>
    </ol>
    <br>
    <hr/>
    <h3 class="top_legalidades">Detalle de cookies utilizadas</h3>
    <div class="tabla-scroll">
      <table class="tabla-cookie">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Finalidad</th>
            <th>Duración</th>
            <th>Tipo</th>
            <th>Obligatoria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>session_web</td>
            <td>Mantiene la sesión activa durante la navegación por el sitio web.</td>
            <td>Sesión</td>
            <td>Técnica</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>contact_form</td>
            <td>Almacena datos del formulario de contacto para consultas jurídicas.</td>
            <td>24 horas</td>
            <td>Funcional</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>navigation_prefs</td>
            <td>Recuerda preferencias de navegación y secciones visitadas.</td>
            <td>30 días</td>
            <td>Funcional</td>
            <td>No</td>
          </tr>
          <tr>
              <td>cookie_consent</td>
              <td>Registra el consentimiento del usuario sobre la política de cookies.</td>
              <td>365 días</td>
              <td>Técnica</td>
              <td>Sí</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <hr/>
    <h2 class="top_legalidades">Cookies de terceros</h2>
    <p>
      Nuestro sitio web profesional puede utilizar servicios de terceros que instalan sus propias cookies para funcionalidades específicas como mapas de ubicación del despacho, fuentes tipográficas web, o servicios de análisis básico de navegación.
    </p>
    <p>
      Estas cookies de terceros no son gestionadas directamente por nuestro despacho. Si desea información específica sobre estas cookies, puede consultar las políticas de privacidad de los respectivos proveedores de servicios.
    </p>
    <p>
      Al utilizar nuestro sitio web y aceptar esta política de cookies, usted consiente también el uso de estas cookies de terceros necesarias para el funcionamiento del sitio.
    </p>
    <br>
    <hr/>
    <h2 class="top_legalidades">Control y gestión de cookies</h2>
    <p>
      Usted puede controlar y gestionar las cookies de diversas maneras. Tenga en cuenta que eliminar o bloquear cookies puede afectar su experiencia de navegación y algunas funcionalidades del sitio web pueden no funcionar correctamente.
    </p>
    <p>
      La mayoría de los navegadores web aceptan cookies automáticamente, pero puede configurar su navegador para rechazar cookies si lo prefiere. 
      Las instrucciones para controlar las cookies se encuentran generalmente en el menú "Herramientas" o "Preferencias" de su navegador.
    </p>
    <p>
      Para gestionar las cookies en los navegadores más utilizados, puede acceder a:
    </p>
    <ul>
      <li><a href="https://support.google.com/accounts/answer/32050" target="_blank">Google Chrome</a></li>
      <li><a href="http://support.microsoft.com/kb/278835" target="_blank">Internet Explorer</a></li>
      <li><a href="https://support.mozilla.org/es/kb/borrar-cookies-eliminar-info-websites-guardada" target="_blank">Mozilla Firefox</a></li>
      <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank">Safari</a></li>
    </ul>
    <br>
    <hr/>
    <h2 class="top_legalidades">Base legal y normativa aplicable</h2>
    <p>
      El uso de cookies en nuestro sitio web profesional se fundamenta en el cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).
    </p>
    <p>
      Las cookies técnicas y necesarias se utilizan en base a nuestro interés legítimo en garantizar el correcto funcionamiento del sitio web. Para las cookies no esenciales, solicitamos su consentimiento previo conforme a la normativa vigente.
    </p>
    <br>
    <hr/>
    <h2 class="top_legalidades">Actualizaciones de la política</h2>
    <p>
      Esta Política de Cookies puede ser actualizada periódicamente para reflejar cambios en nuestro uso de cookies o modificaciones en la legislación aplicable. Le recomendamos revisar esta página regularmente para mantenerse informado.
    </p>
    <br>
    <hr/>
    <h2 class="top_legalidades">Contacto</h2>
    <p>
      Si tiene cualquier pregunta sobre esta Política de Cookies o sobre el uso de cookies en nuestro sitio web, puede contactar con nuestro despacho:
    </p>
    <ul>
      <li>Correo electrónico: <a href="mailto:luraproyecto@gmail.com">luraproyecto@gmail.com</a></li>
      <li>Teléfono: 613 95 96 89</li>
      <li class="FinalLegalidades">Horario de consultas: Lunes a Viernes de 9:00h a 18:00h</li>
    </ul>
  `;
  
  return container;
}
