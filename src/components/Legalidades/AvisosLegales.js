import { EmpanadaBanner } from '../EmpanadaBanner.js';

export function AvisosLegales() {
  const mainContainer = document.createElement('div');
  mainContainer.id = 'avisos-legales-container';
  mainContainer.style.cssText = `
    margin-top: 90px;
    width: 100vw;
    min-height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    padding: 2rem 1rem;
  `;

  mainContainer.appendChild(EmpanadaBanner());

  const container = document.createElement('div');
  container.className = 'container margen-navbar';
  container.id = 'aviso-legal';
  container.style.cssText = `
    color: #fff !important;
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    background: rgba(42, 42, 42, 0.95);
    border-radius: 15px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.5);
  `;
  
  // Agregar estilos
  if (!document.getElementById('legalidades-avisos-styles')) {
    const style = document.createElement('style');
    style.id = 'legalidades-avisos-styles';
    style.textContent = `
      #avisos-legales-container .container.margen-navbar h1,
      #avisos-legales-container .container.margen-navbar h2,
      #avisos-legales-container .container.margen-navbar h3,
      #avisos-legales-container .container.margen-navbar h4,
      #avisos-legales-container .top_legalidades,
      #avisos-legales-container .Inicio-Informacion {
        color: #f97316 !important;
      }
      #avisos-legales-container .container.margen-navbar p,
      #avisos-legales-container .container.margen-navbar li,
      #avisos-legales-container .container.margen-navbar td,
      #avisos-legales-container .container.margen-navbar th {
        color: #fff !important;
      }
      #avisos-legales-container .container.margen-navbar a {
        color: #60a5fa !important;
        text-decoration: underline;
      }
      #avisos-legales-container .container.margen-navbar a:hover {
        color: #93c5fd !important;
      }
      #avisos-legales-container .container.margen-navbar hr {
        border-color: rgba(249, 115, 22, 0.3);
      }
    `;
    document.head.appendChild(style);
  }
  
  container.innerHTML = `
    <h1 class="Inicio-Informacion top_legalidades">Aviso Legal</h1>
    <p><b>Última actualización: 27 de noviembre de 2025</b></p>

    <p>
      Bienvenido al sitio web de Correos Express. Al acceder y utilizar este portal web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones legales, así como a nuestra <a href="/Legalidades/Política-Cookies.html">Política de Cookies</a> y demás normativas aplicables a nuestros servicios de mensajería y paquetería.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Identificación del titular</h2>
    <p>
      En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), le informamos de los siguientes datos identificativos del titular de este sitio web:
    </p>
    <ul>
      <li><b>Denominación social:</b> Correos Express y Paquetería, S.A.</li>
      <li><b>Nombre comercial:</b> Correos Express</li>
      <li><b>Domicilio social:</b> Avenida del Correo, 50, 28080 Madrid, España</li>
      <li><b>Correo electrónico de contacto:</b> <a href="mailto:info@correosexpress.com">info@correosexpress.com</a></li>
      <li><b>Teléfono de atención al cliente:</b> 902 100 102 / 613 95 96 89</li>
      <li><b>CIF:</b> A-28123456</li>
      <li><b>Registro Mercantil:</b> Inscrita en el Registro Mercantil de Madrid, Tomo 12345, Folio 67, Hoja M-123456</li>
      <li><b>Actividad principal:</b> Servicios postales, mensajería urgente, transporte de mercancías y paquetería nacional e internacional</li>
    </ul>

    <br>
    <hr />
    <h2 class="top_legalidades">Objeto y ámbito de aplicación</h2>
    <p>
      El presente Aviso Legal regula el acceso, navegación y uso de este sitio web (en adelante, el "sitio web" o "portal"), así como las condiciones generales para la contratación de servicios de mensajería, paquetería, envío de documentos y mercancías, tanto a nivel nacional como internacional, ofrecidos por Correos Express a través de sus diferentes canales.
    </p>
    <p>
      Este portal tiene como finalidad proporcionar información sobre nuestros servicios postales, facilitar el seguimiento de envíos, permitir la contratación online de servicios de transporte y mensajería, y ofrecer herramientas para la gestión eficiente de envíos y recepciones de mercancías.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Condiciones generales de uso del sitio web</h2>
    <p>
      El acceso y navegación por este sitio web implica la aceptación expresa y sin reservas de todas las condiciones establecidas en este Aviso Legal. El usuario se compromete a utilizar el sitio web de conformidad con la legislación vigente, el presente Aviso Legal, las buenas costumbres y el orden público.
    </p>
    <p>
      El acceso al sitio web y la consulta de información general es gratuito, sin perjuicio del coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por el usuario. La contratación de servicios de mensajería y paquetería estará sujeta a las tarifas vigentes y condiciones específicas de cada servicio.
    </p>
    <p>
      Queda expresamente prohibido el uso del sitio web con fines ilícitos o lesivos contra Correos Express, otros usuarios o terceros, así como cualquier actuación que pueda dañar, inutilizar, sobrecargar o deteriorar el portal o impedir su normal utilización por otros usuarios.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Propiedad intelectual e industrial</h2>
    <p>
      Todos los contenidos del sitio web, incluyendo pero no limitándose a textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico, código fuente, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Correos Express o de terceros titulares que han autorizado su uso, y están protegidos por las leyes españolas e internacionales sobre propiedad intelectual e industrial.
    </p>
    <p>
      Las marcas, nombres comerciales, signos distintivos, logotipos y cualquier otro signo susceptible de protección como marca que aparezcan en el sitio web son propiedad de Correos Express o de terceros que han autorizado su uso. La exhibición de estos elementos en el sitio web no implica la concesión de licencia o autorización alguna para su uso sin la autorización expresa de sus titulares legítimos.
    </p>
    <p>
      Queda estrictamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de los contenidos del sitio web sin la autorización previa y expresa de Correos Express o de sus legítimos titulares. El incumplimiento de estas prohibiciones puede constituir una infracción sancionable por la legislación vigente.
    </p>
    <p>
      Los usuarios únicamente están autorizados a visualizar, imprimir y descargar los contenidos del sitio web para su uso personal y privado, quedando prohibido cualquier uso comercial o de explotación económica de dichos contenidos sin autorización expresa.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Exclusión de garantías y limitación de responsabilidad</h2>
    <p>
      Correos Express no garantiza la disponibilidad y continuidad ininterrumpida del funcionamiento del sitio web. Cuando sea razonablemente posible, advertirá previamente de las interrupciones en el funcionamiento del portal por razones de mantenimiento, actualizaciones técnicas o mejoras del sistema.
    </p>
    <p>
      Correos Express no se hace responsable de los daños y perjuicios de cualquier naturaleza que puedan derivarse de la falta de disponibilidad, accesibilidad o continuidad del sitio web, ni de los errores en el acceso a las distintas páginas o secciones del portal, salvo en los casos en que la legislación vigente establezca expresamente lo contrario.
    </p>
    <p>
      La información y servicios incluidos o disponibles a través del sitio web pueden incluir inexactitudes técnicas o errores tipográficos. Correos Express realiza periódicamente mejoras y/o cambios en la información, servicios y tarifas descritos en el sitio web sin obligación de comunicación previa.
    </p>
    <p>
      Correos Express no asume responsabilidad alguna derivada de la utilización que los usuarios puedan hacer de los materiales publicados o disponibles en el sitio web, ni por los daños y perjuicios que puedan derivarse del uso de información inexacta, incompleta o desactualizada. El usuario es el único responsable del uso que realice del sitio web, sus contenidos y servicios.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Servicios de mensajería y contratación online</h2>
    <p>
      Los servicios de mensajería, paquetería y envío ofrecidos a través de este sitio web están sujetos a las Condiciones Generales de Contratación específicas de cada servicio, que complementan el presente Aviso Legal. La contratación de servicios puede realizarse a través de la web, aplicaciones móviles, puntos de atención presencial o mediante nuestro servicio telefónico de atención al cliente.
    </p>
    <p>
      Los precios y tarifas de los servicios de transporte y mensajería están sujetos a las condiciones económicas vigentes en cada momento, que se encuentran publicadas en nuestro sitio web y están disponibles en nuestros puntos de venta. Las tarifas pueden variar en función del tipo de servicio, destino, peso, dimensiones y valor declarado del envío.
    </p>
    <p>
      Para más información detallada sobre las condiciones de prestación de servicios, plazos de entrega, responsabilidades, limitaciones y procedimientos de reclamación, consulte nuestros <a href="/Legalidades/Términos-Condiciones.html">Términos y Condiciones de Servicio</a>.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Protección de datos personales y confidencialidad</h2>
    <p>
      Correos Express cumple estrictamente con la normativa vigente en materia de protección de datos de carácter personal, en particular el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
    </p>
    <p>
      Los datos personales facilitados por los usuarios a través del sitio web o en el marco de la prestación de nuestros servicios serán tratados de conformidad con nuestra Política de Privacidad, donde se informa detalladamente sobre las finalidades, base legal, destinatarios, plazos de conservación y derechos de los interesados en materia de protección de datos.
    </p>
    <p>
      Correos Express garantiza la confidencialidad de todos los datos de carácter personal facilitados y ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Enlaces externos y responsabilidad</h2>
    <p>
      El sitio web puede contener enlaces o hipervínculos a otros sitios web de terceros. Correos Express no ejerce ningún tipo de control sobre dichos sitios web de terceros ni sobre sus contenidos, por lo que no asume ninguna responsabilidad por los contenidos, políticas de privacidad, prácticas comerciales o servicios ofrecidos en dichos sitios externos.
    </p>
    <p>
      La inclusión de enlaces a sitios web de terceros no implica la aprobación, recomendación o garantía por parte de Correos Express de dichos sitios o sus contenidos. El acceso a sitios web de terceros a través de los enlaces incluidos en nuestro portal se realiza bajo la exclusiva responsabilidad del usuario.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Normativa postal y de transporte aplicable</h2>
    <p>
      La prestación de servicios postales y de mensajería por parte de Correos Express se rige por la Ley 43/2010, de 30 de diciembre, del servicio postal universal, de los derechos de los usuarios y del mercado postal, así como por su normativa de desarrollo y demás disposiciones legales y reglamentarias aplicables al sector de las comunicaciones postales y el transporte de mercancías.
    </p>
    <p>
      Los servicios de transporte internacional están sujetos adicionalmente a los convenios y tratados internacionales aplicables, así como a la normativa aduanera y de comercio exterior vigente en cada momento.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Modificaciones del aviso legal</h2>
    <p>
      Correos Express se reserva el derecho a modificar, sin previo aviso, la presentación, configuración, información y contenidos del sitio web, así como las condiciones de acceso y uso establecidas en este Aviso Legal, para adaptarse a novedades legislativas, mejoras tecnológicas o cambios en la estructura comercial de la compañía.
    </p>
    <p>
      Se recomienda a los usuarios revisar periódicamente este Aviso Legal para estar informados de cualquier modificación. El uso continuado del sitio web tras la publicación de cambios constituirá la aceptación de los mismos.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Legislación aplicable y jurisdicción competente</h2>
    <p>
      Las relaciones entre Correos Express y los usuarios de su sitio web se regirán por la normativa española vigente. Para la resolución de cualquier controversia o conflicto que pudiera surgir con relación al acceso o uso del sitio web, o con relación a la interpretación y cumplimiento de las condiciones recogidas en este Aviso Legal, Correos Express y el usuario acuerdan someterse expresamente a la jurisdicción de los Juzgados y Tribunales de Madrid capital, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
    </p>
    <p>
      No obstante lo anterior, cuando el usuario tenga la condición de consumidor o usuario según lo establecido en el Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, será de aplicación la normativa de protección de consumidores y los tribunales competentes según dicha legislación.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Servicio de atención al cliente</h2>
    <p>
      Para cualquier consulta, sugerencia o reclamación relacionada con este Aviso Legal, con el funcionamiento del sitio web o con nuestros servicios de mensajería y paquetería, puede contactar con nuestro Servicio de Atención al Cliente a través de los siguientes medios:
    </p>
    <ul>
      <li><b>Correo electrónico:</b> <a href="mailto:atencioncliente@correosexpress.com">atencioncliente@correosexpress.com</a></li>
      <li><b>Teléfono de atención:</b> 902 100 102 / 613 95 96 89</li>
      <li><b>Horario de atención telefónica:</b> Lunes a Viernes de 8:00h a 20:00h, Sábados de 9:00h a 14:00h</li>
      <li><b>Dirección postal:</b> Correos Express - Servicio de Atención al Cliente, Avenida del Correo, 50, 28080 Madrid</li>
      <li><b>Formulario web:</b> Disponible en la sección "Contacto" de este sitio web</li>
      <li class="FinalLegalidades"><b>Oficinas de atención presencial:</b> Consulte el localizador de oficinas en nuestra web para encontrar el punto de atención más cercano</li>
    </ul>
  `;
  
  mainContainer.appendChild(container);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      mainContainer.style.opacity = '1';
      mainContainer.style.transform = 'translateY(0)';
    });
  });
  
  return mainContainer;
}
