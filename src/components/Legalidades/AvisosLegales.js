export function AvisosLegales() {
  const container = document.createElement('div');
  container.className = 'container margen-navbar';
  container.id = 'aviso-legal';
  
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
    `;
    document.head.appendChild(style);
  }
  
  container.innerHTML = `
    <h1 class="Inicio-Informacion top_legalidades">Aviso Legal</h1>
    <p><b>Última actualización: 10 de noviembre de 2025</b></p>

    <p>
      Bienvenido al sitio web de nuestro despacho de abogados. Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones legales, así como a nuestra <a href="/Legalidades/Política-Cookies.html">Política de Cookies</a>.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Identificación del responsable</h2>
    <p>
      En cumplimiento con el artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), y la normativa colegial aplicable, le informamos que:
    </p>
    <ul>
      <li><b>Denominación profesional:</b> Despacho de Abogados Gabriel Tomás Gili</li>
      <li><b>Domicilio profesional:</b> Calle de la Justicia, 25, 28001 Madrid, España</li>
      <li><b>Correo electrónico profesional:</b> <a href="mailto:luraproyecto@gmail.com">luraproyecto@gmail.com</a></li>
      <li><b>Teléfono de contacto:</b> 613 95 96 89</li>
      <li><b>NIF:</b> 12345678A</li>
      <li><b>Número de colegiado:</b> 15678 del Ilustre Colegio de Abogados de Madrid</li>
    </ul>

    <br>
    <hr />
    <h2 class="top_legalidades">Objeto y ámbito de aplicación</h2>
    <p>
      El presente Aviso Legal regula el acceso, navegación y uso de este sitio web profesional (en adelante, el "sitio web"), así como las condiciones para la contratación de servicios jurídicos ofrecidos por nuestro despacho de abogados, especializado en asesoramiento legal integral y representación judicial.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Condiciones de uso del sitio web</h2>
    <p>
      El usuario se compromete a utilizar el sitio web de conformidad con la legislación vigente, el presente Aviso Legal, las normas deontológicas de la abogacía, las buenas costumbres y el orden público, absteniéndose de utilizarlo para fines ilícitos o contrarios a la dignidad profesional.
    </p>
    <p>
      El acceso y consulta del sitio web es gratuito, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones. La contratación de servicios profesionales estará sujeta a las condiciones específicas que se acuerden en cada caso.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Propiedad intelectual e industrial</h2>
    <p>
      Todos los contenidos del sitio web, incluyendo pero no limitándose a textos jurídicos, modelos de documentos, artículos especializados, imágenes, gráficos, logotipos, software y nombres comerciales, son propiedad del despacho o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial.
    </p>
    <p>
      Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de los contenidos sin la autorización expresa del titular. Los documentos y formularios disponibles tienen carácter meramente informativo y no sustituyen el asesoramiento profesional personalizado.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Limitaciones de responsabilidad</h2>
    <p>
      El despacho no garantiza la disponibilidad y continuidad ininterrumpida del funcionamiento del sitio web, ni se hace responsable de cualquier daño o perjuicio derivado de la falta de disponibilidad o de la interrupción del servicio, salvo en los casos que la ley establezca expresamente.
    </p>
    <p>
      La información contenida en el sitio web tiene carácter general y orientativo. Para cualquier cuestión jurídica específica, es imprescindible la consulta profesional personalizada. El usuario asume toda responsabilidad por el uso que haga del sitio web y sus contenidos.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Servicios profesionales y contratación</h2>
    <p>
      Los servicios jurídicos ofrecidos a través de este sitio web están sujetos a la aceptación expresa del encargo por parte del letrado y a la firma del correspondiente contrato de servicios profesionales.
    </p>
    <p>
      La información sobre honorarios y condiciones de prestación de servicios se facilitará de forma personalizada en cada caso. Para más detalles sobre nuestros servicios, consulte nuestros <a href="./Términos-Condiciones.html">Términos y Condiciones de Servicio</a>.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Protección de datos personales</h2>
    <p>
      Nuestro despacho cumple estrictamente con la normativa vigente en materia de protección de datos personales (Reglamento General de Protección de Datos - RGPD y Ley Orgánica de Protección de Datos - LOPDGDD), garantizando además el secreto profesional propio de la relación abogado-cliente.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Normativa deontológica y colegial</h2>
    <p>
      El ejercicio profesional se rige por el Estatuto General de la Abogacía Española, las normas deontológicas del Ilustre Colegio de Abogados de Madrid y demás normativa colegial aplicable. En caso de conflicto de intereses o cuestiones deontológicas, prevalecerán las normas colegiales y el Código Deontológico de la Abogacía.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Modificaciones del aviso legal</h2>
    <p>
      El despacho se reserva el derecho a modificar, sin previo aviso, la presentación, configuración y contenidos del sitio web, así como este Aviso Legal, para adaptarse a cambios normativos o mejoras en la prestación de servicios profesionales.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Legislación aplicable y jurisdicción</h2>
    <p>
      Las relaciones derivadas del uso de este sitio web se regirán por la legislación española vigente, especialmente la Ley Orgánica del Poder Judicial y el Estatuto General de la Abogacía. Para cualquier controversia, serán competentes los juzgados y tribunales de Madrid, renunciando expresamente a cualquier otro fuero que pudiera corresponder.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">Contacto profesional</h2>
    <p>
      Si tiene cualquier duda o consulta sobre este Aviso Legal o desea contactar con nuestro despacho, puede hacerlo a través de:
    </p>
    <ul>
      <li>Correo electrónico profesional: <a href="mailto:luraproyecto@gmail.com">luraproyecto@gmail.com</a></li>
      <li>Teléfono: 613 95 96 89</li>
      <li class="FinalLegalidades">Horario de atención: Lunes a Viernes de 9:00h a 18:00h</li>
    </ul>
  `;
  
  return container;
}
