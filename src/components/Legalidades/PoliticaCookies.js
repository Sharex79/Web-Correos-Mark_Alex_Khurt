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
    <p><b>Última actualización: 27 de noviembre de 2025</b></p>

    <p>
      Esta Política de Cookies explica de forma clara y transparente qué son las cookies, cómo las utilizamos en el sitio web de Correos Express, qué tipo de información recopilamos a través de ellas y cómo puede usted configurar o deshabilitar las cookies según sus preferencias.
    </p>
    <p>
      Le recomendamos leer detenidamente esta política para comprender qué cookies empleamos, la finalidad de cada una y cómo se utiliza la información que recopilamos para mejorar su experiencia de usuario al contratar nuestros servicios de mensajería y paquetería, realizar seguimiento de envíos y navegar por nuestro portal.
    </p>
    <p>
      El uso de cookies es fundamental para el correcto funcionamiento de nuestro sitio web, permitiéndonos ofrecer servicios personalizados, mejorar la experiencia de navegación, facilitar el proceso de contratación online y analizar el comportamiento de los usuarios para optimizar continuamente nuestros servicios digitales.
    </p>
    <br>
    <hr/>
    <h2 class="top_legalidades">¿Qué son las cookies?</h2>
    <p>
      Las cookies son pequeños archivos de texto que se almacenan en su ordenador, tablet o dispositivo móvil cuando visita nuestro sitio web. 
      Estos archivos contienen información sobre su navegación y permiten al sitio web recordar sus preferencias, mantener su sesión activa durante el proceso de contratación, recordar el contenido de su carrito de compra, y proporcionar funcionalidades mejoradas adaptadas a sus necesidades.
    </p>
    <p>
      Las cookies son ampliamente utilizadas por la gran mayoría de sitios web para mejorar la experiencia del usuario, ya que permiten que los sitios web funcionen de manera más eficiente y proporcionen información a los propietarios del sitio sobre cómo los usuarios interactúan con sus páginas.
    </p>
    <br>
    <hr/>
    <h2 class="top_legalidades">Tipos de cookies que utilizamos</h2>
    <p>
      En Correos Express utilizamos diferentes tipos de cookies según su finalidad y características. A continuación, detallamos las categorías de cookies que empleamos:
    </p>
    <ol>
        <li class="NumeraciónCookies"><h3 class="top_legalidades">Cookies técnicas y estrictamente necesarias</h3></li>
        <p>
          Estas cookies son esenciales e imprescindibles para el correcto funcionamiento de nuestro sitio web y no pueden ser desactivadas en nuestros sistemas. 
          Se configuran automáticamente en respuesta a acciones realizadas por usted, como establecer sus preferencias de privacidad, iniciar sesión en su área de cliente, añadir servicios al carrito de compra, completar formularios de envío o gestionar el seguimiento de sus paquetes.
        </p>
        <p>
          Sin estas cookies, algunos servicios básicos del sitio web no podrían funcionar correctamente, como el proceso de contratación online, el acceso a áreas seguras o la visualización del estado de sus envíos.
        </p>
        
        <li class="NumeraciónCookies"><h3 class="top_legalidades">Cookies de funcionalidad y personalización</h3></li>
        <p>
          Estas cookies permiten que nuestro sitio web recuerde las elecciones que usted realiza (como su nombre de usuario, idioma preferido, región desde la que accede, o las oficinas de Correos Express más cercanas a su ubicación) y proporcionan características mejoradas y más personalizadas.
        </p>
        <p>
          Por ejemplo, estas cookies pueden recordar sus últimas direcciones de envío, sus servicios contratados habitualmente, o sus preferencias de notificación sobre el estado de los envíos. La información que recopilan estas cookies puede incluir datos personales que usted haya proporcionado.
        </p>
        
        <li class="NumeraciónCookies"><h3 class="top_legalidades">Cookies analíticas y de rendimiento</h3></li>
        <p>
          Estas cookies nos permiten contabilizar las visitas y conocer las fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio web. 
          Nos ayudan a saber qué páginas son las más o menos populares, cómo se mueven los usuarios por el sitio, qué servicios son más consultados o contratados, y en qué puntos del proceso de contratación los usuarios abandonan más frecuentemente.
        </p>
        <p>
          Toda la información que recogen estas cookies es agregada y, por lo tanto, anónima. Si no permite estas cookies, no sabremos cuándo ha visitado nuestro sitio y no podremos monitorizar su rendimiento para mejorarlo.
        </p>
        
        <li class="NumeraciónCookies"><h3 class="top_legalidades">Cookies de publicidad y marketing</h3></li>
        <p>
          Estas cookies pueden ser establecidas a través de nuestro sitio web por nuestros socios publicitarios. Pueden ser utilizadas por esas empresas para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios web.
        </p>
        <p>
          No almacenan directamente información personal, sino que se basan en la identificación única de su navegador y dispositivo de internet. Si no permite estas cookies, experimentará publicidad menos dirigida a sus intereses.
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
            <td>PHPSESSID / session_id</td>
            <td>Mantiene la sesión activa del usuario durante la navegación y el proceso de contratación de servicios.</td>
            <td>Sesión (se elimina al cerrar el navegador)</td>
            <td>Técnica</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>shipping_cart</td>
            <td>Almacena los servicios y envíos añadidos al carrito de compra durante el proceso de contratación.</td>
            <td>7 días</td>
            <td>Técnica</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>user_preferences</td>
            <td>Recuerda preferencias del usuario: idioma, oficina preferida, tipo de servicio habitual, direcciones frecuentes.</td>
            <td>90 días</td>
            <td>Funcional</td>
            <td>No</td>
          </tr>
          <tr>
            <td>tracking_history</td>
            <td>Guarda el historial de números de seguimiento consultados para facilitar consultas posteriores.</td>
            <td>30 días</td>
            <td>Funcional</td>
            <td>No</td>
          </tr>
          <tr>
            <td>login_token</td>
            <td>Token de autenticación para clientes registrados que acceden a su área privada.</td>
            <td>14 días o hasta cierre de sesión</td>
            <td>Técnica</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>cookie_consent</td>
            <td>Registra el consentimiento del usuario sobre la política de cookies y sus preferencias de cookies.</td>
            <td>365 días</td>
            <td>Técnica</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>_ga, _gid, _gat</td>
            <td>Cookies de Google Analytics para análisis de tráfico web, comportamiento de usuarios y rendimiento del sitio.</td>
            <td>2 años (_ga), 24 horas (_gid), 1 minuto (_gat)</td>
            <td>Analítica</td>
            <td>No</td>
          </tr>
          <tr>
            <td>notifications_pref</td>
            <td>Almacena las preferencias sobre notificaciones de estado de envíos (email, SMS, push).</td>
            <td>180 días</td>
            <td>Funcional</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <hr/>
    <h2 class="top_legalidades">Cookies de terceros</h2>
    <p>
      Además de nuestras propias cookies, Correos Express utiliza servicios de terceros que pueden instalar sus propias cookies para proporcionar funcionalidades específicas que mejoran la experiencia del usuario. Entre estos servicios se incluyen:
    </p>
    <ul>
      <li><b>Google Maps:</b> Para mostrar la ubicación de nuestras oficinas y puntos de recogida cercanos a su domicilio.</li>
      <li><b>Google Analytics:</b> Para análisis estadístico del tráfico web y comportamiento de usuarios de forma agregada y anónima.</li>
      <li><b>Redes sociales (Facebook, Twitter, Instagram, LinkedIn):</b> Para compartir contenidos y mostrar widgets sociales.</li>
      <li><b>Plataformas de pago online:</b> Para procesar pagos de forma segura (PayPal, tarjetas bancarias, etc.).</li>
      <li><b>Servicios de atención al cliente y chat en vivo:</b> Para proporcionar asistencia inmediata a través de chat.</li>
      <li><b>Plataformas publicitarias (Google Ads, Facebook Ads):</b> Para mostrar anuncios personalizados basados en sus intereses.</li>
    </ul>
    <p>
      Estas cookies de terceros no son gestionadas directamente por Correos Express, por lo que para obtener información detallada sobre su funcionamiento, finalidad y duración, le recomendamos consultar las políticas de privacidad y cookies de los respectivos proveedores de servicios.
    </p>
    <p>
      Al aceptar esta Política de Cookies, usted consiente el uso de cookies de terceros necesarias para el correcto funcionamiento de nuestro sitio web y la prestación de servicios integrados. Para cookies de terceros no esenciales (publicitarias, analíticas), solicitamos su consentimiento específico a través del banner de cookies.
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
    <h2 class="top_legalidades">Contacto y consultas sobre cookies</h2>
    <p>
      Si tiene cualquier pregunta, duda o consulta sobre esta Política de Cookies, sobre el uso de cookies en nuestro sitio web de Correos Express, o sobre cómo ejercitar sus derechos en materia de protección de datos relacionados con cookies, puede contactar con nosotros a través de los siguientes canales:
    </p>
    <ul>
      <li><b>Correo electrónico de atención al cliente:</b> <a href="mailto:atencioncliente@correosexpress.com">atencioncliente@correosexpress.com</a></li>
      <li><b>Delegado de Protección de Datos:</b> <a href="mailto:dpd@correosexpress.com">dpd@correosexpress.com</a></li>
      <li><b>Teléfono de atención:</b> 902 100 102 / 613 95 96 89</li>
      <li><b>Dirección postal:</b> Correos Express - Servicio de Atención al Cliente, Avenida del Correo, 50, 28080 Madrid</li>
      <li class="FinalLegalidades"><b>Horario de atención telefónica:</b> Lunes a Viernes de 8:00h a 20:00h, Sábados de 9:00h a 14:00h</li>
    </ul>
  `;
  
  return container;
}
