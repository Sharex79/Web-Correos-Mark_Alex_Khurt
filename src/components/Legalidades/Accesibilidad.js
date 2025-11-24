export function Accesibilidad() {
  const container = document.createElement('div');
  container.className = 'container margen-navbar';
  
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
    <h1 class="top_legalidades">Declaración de Accesibilidad</h1>
    <hr>
    <p>
      En nuestro despacho de abogados, nos comprometemos firmemente a ofrecer un entorno digital inclusivo, accesible y usable para todas las personas, independientemente de sus capacidades físicas, sensoriales, cognitivas o tecnológicas. Nuestro compromiso con la accesibilidad web es parte integral de nuestros valores profesionales y del respeto por los derechos fundamentales de todos nuestros clientes y usuarios.
    </p>

    <p>
      Trabajamos activamente para que nuestro sitio web cumpla con los estándares y recomendaciones establecidos en las <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">Pautas de Accesibilidad al Contenido en la Web (WCAG)</a>, publicadas por el World Wide Web Consortium (W3C). Nuestro objetivo es alcanzar y mantener el nivel de conformidad WCAG 2.1 AA.
    </p>

    <h3>Medidas de accesibilidad implementadas</h3>
    <p>
      Entre las medidas que hemos adoptado para mejorar la accesibilidad de nuestro sitio web se incluyen:
    </p>
    <ul>
      <li>Estructura semántica clara del HTML para facilitar la navegación con tecnologías de asistencia y lectores de pantalla.</li>
      <li>Compatibilidad completa con navegación por teclado en todas las secciones y formularios del sitio.</li>
      <li>Contrastes cromáticos adecuados entre texto y fondo para mejorar la legibilidad y visibilidad del contenido.</li>
      <li>Textos alternativos descriptivos en imágenes, documentos y contenido visual relevante.</li>
      <li>Etiquetas ARIA y roles semánticos para mejorar la comprensión por tecnologías de asistencia.</li>
      <li>Eliminación de contenido parpadeante o con movimiento excesivo que pueda afectar a personas con epilepsia fotosensible.</li>
      <li>Organización lógica y coherente de la información legal y de contacto.</li>
    </ul>

    <h3>Funcionalidades de accesibilidad planificadas</h3>
    <p>
      Actualmente desarrollamos mejoras adicionales que incluirán un módulo de accesibilidad avanzado con las siguientes funcionalidades:
    </p>
    <ul>
      <li>Control de tamaño de fuente para mejorar la legibilidad de textos legales y documentos.</li>
      <li>Modo de alto contraste específicamente diseñado para personas con visión reducida.</li>
      <li>Tipografía especializada adaptada para personas con dislexia y otras dificultades de lectura.</li>
      <li>Mejora visual de enlaces y elementos interactivos.</li>
      <li>Control de animaciones y efectos visuales para usuarios sensibles al movimiento.</li>
      <li>Navegación simplificada para facilitar el acceso a servicios legales.</li>
    </ul>

    <h3>Evaluación y mejora continua</h3>
    <p>
      La accesibilidad es un compromiso permanente. Realizamos evaluaciones periódicas y auditorías de accesibilidad para identificar barreras potenciales y implementar soluciones efectivas. Valoramos especialmente los comentarios de nuestros usuarios y clientes para continuar mejorando la experiencia de navegación.
    </p>

    <h3>Contacto para cuestiones de accesibilidad</h3>
    <p>
      Si experimenta dificultades para acceder a cualquier contenido de nuestro sitio web o desea realizar sugerencias relacionadas con la accesibilidad, no dude en contactarnos. Nuestro equipo está comprometido en brindarle asistencia y encontrar soluciones adaptadas a sus necesidades.
    </p>
    <ul>
      <li>Correo electrónico: <a href="mailto:luraproyecto@gmail.com">luraproyecto@gmail.com</a></li>
      <li>Teléfono: 613 95 96 89</li>
      <li>Horario de atención: Lunes a Viernes de 9:00h a 18:00h</li>
    </ul>

    <p>
      <strong>Nota:</strong> Para consultas relacionadas con nuestros servicios legales, puede consultar nuestros <a href="/Legalidades/Términos-Condiciones.html">Términos y Condiciones de Servicio</a>.
    </p>
  `;
  
  return container;
}
