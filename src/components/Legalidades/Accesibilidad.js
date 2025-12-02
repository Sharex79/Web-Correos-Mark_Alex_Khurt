import { EmpanadaBanner } from '../EmpanadaBanner.js';

export function renderAccesibilidad() {
  const container = document.createElement('div');
  container.id = 'accesibilidad-container';
  container.style.cssText = `
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

  // Banner de empanadas
  container.appendChild(EmpanadaBanner());

  // Contenido principal
  const contentBox = document.createElement('div');
  contentBox.className = 'container margen-navbar';
  contentBox.style.cssText = `
    color: #fff !important;
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    background: rgba(42, 42, 42, 0.95);
    border-radius: 15px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.5);
  `;
  
  // Agregar estilos específicos
  if (!document.getElementById('legalidades-accesibilidad-styles')) {
    const style = document.createElement('style');
    style.id = 'legalidades-accesibilidad-styles';
    style.textContent = `
      #accesibilidad-container .container.margen-navbar h1,
      #accesibilidad-container .container.margen-navbar h2,
      #accesibilidad-container .container.margen-navbar h3,
      #accesibilidad-container .container.margen-navbar h4,
      #accesibilidad-container .top_legalidades,
      #accesibilidad-container .Inicio-Informacion {
        color: #f97316 !important;
      }
      #accesibilidad-container .container.margen-navbar p,
      #accesibilidad-container .container.margen-navbar li,
      #accesibilidad-container .container.margen-navbar td,
      #accesibilidad-container .container.margen-navbar th {
        color: #fff !important;
      }
      #accesibilidad-container .container.margen-navbar a {
        color: #60a5fa !important;
        text-decoration: underline;
      }
      #accesibilidad-container .container.margen-navbar a:hover {
        color: #93c5fd !important;
      }
      #accesibilidad-container .container.margen-navbar hr {
        border-color: rgba(249, 115, 22, 0.3);
      }
    `;
    document.head.appendChild(style);
  }
  
  contentBox.innerHTML = `
    <h1 class="top_legalidades">Declaración de Accesibilidad Web</h1>
    <p><b>Última actualización: 27 de noviembre de 2025</b></p>
    <hr>
    
    <p>
      En Correos Express nos comprometemos firmemente con la accesibilidad universal y la inclusión digital. Creemos que todas las personas, independientemente de sus capacidades físicas, sensoriales, cognitivas o técnicas, tienen derecho a acceder a nuestros servicios de mensajería y paquetería de manera fácil, cómoda y autónoma a través de nuestro sitio web.
    </p>

    <p>
      Este compromiso con la accesibilidad web forma parte integral de nuestros valores corporativos y de nuestra responsabilidad social como empresa líder en el sector postal y logístico. Trabajamos continuamente para eliminar barreras digitales y garantizar que cualquier persona pueda contratar nuestros servicios, realizar seguimiento de envíos, localizar oficinas o contactar con nuestro servicio de atención al cliente sin obstáculos.
    </p>

    <p>
      Nuestro objetivo es cumplir y superar los estándares internacionales de accesibilidad web establecidos en las <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1</a> del World Wide Web Consortium (W3C), alcanzando el nivel de conformidad AA como mínimo, y aspirando al nivel AAA en las áreas críticas de nuestro servicio.
    </p>

    <br>
    <hr/>
    <h2 class="top_legalidades">Medidas de accesibilidad implementadas</h2>
    <p>
      Para hacer nuestro sitio web más accesible e inclusivo, hemos implementado numerosas medidas técnicas y de diseño que facilitan el acceso y uso de nuestros servicios digitales:
    </p>
    
    <h3>Estructura y navegación</h3>
    <ul>
      <li><b>Estructura HTML semántica:</b> Utilizamos etiquetas HTML5 semánticas (header, nav, main, section, article, footer) para que los lectores de pantalla y otras tecnologías de asistencia puedan interpretar correctamente la estructura de nuestras páginas.</li>
      <li><b>Navegación por teclado:</b> Todo el sitio web es completamente navegable utilizando únicamente el teclado, sin necesidad de ratón. Las teclas Tab, Enter, Espacio y flechas permiten acceder a todos los elementos interactivos.</li>
      <li><b>Orden lógico de tabulación:</b> El orden de enfoque sigue una secuencia lógica y predecible que facilita la navegación eficiente por teclado.</li>
      <li><b>Enlaces descriptivos:</b> Todos los enlaces contienen texto descriptivo que explica claramente su destino, evitando textos ambiguos como "click aquí" o "más información".</li>
      <li><b>Menú de navegación consistente:</b> La navegación principal mantiene la misma estructura y ubicación en todas las páginas para facilitar la orientación.</li>
      <li><b>Mapa del sitio:</b> Disponemos de un mapa del sitio completo que facilita la localización rápida de cualquier sección o servicio.</li>
    </ul>

    <h3>Contenido visual y multimedia</h3>
    <ul>
      <li><b>Textos alternativos:</b> Todas las imágenes, gráficos, iconos y elementos visuales incluyen descripciones textuales alternativas (atributo alt) que transmiten la misma información a usuarios que no pueden verlos.</li>
      <li><b>Contraste de colores:</b> Los textos y elementos interactivos cumplen con las ratios mínimas de contraste (4.5:1 para texto normal, 3:1 para texto grande) establecidas en WCAG 2.1 AA, mejorando la legibilidad para personas con baja visión o daltonismo.</li>
      <li><b>No dependencia del color:</b> La información nunca se transmite únicamente mediante colores. Utilizamos también iconos, textos y patrones para garantizar que todos los usuarios puedan comprender el contenido.</li>
      <li><b>Tamaño de fuente flexible:</b> El diseño responsive permite aumentar el tamaño del texto hasta un 200% sin pérdida de funcionalidad ni superposición de contenidos.</li>
      <li><b>Subtítulos y transcripciones:</b> Los vídeos informativos incluyen subtítulos y transcripciones textuales para usuarios con discapacidad auditiva.</li>
    </ul>

    <h3>Formularios y procesos interactivos</h3>
    <ul>
      <li><b>Etiquetas claras:</b> Todos los campos de formularios (contratación de envíos, seguimiento, contacto) tienen etiquetas descriptivas asociadas correctamente.</li>
      <li><b>Instrucciones y ayudas:</b> Proporcionamos instrucciones claras sobre cómo completar formularios y mensajes de error específicos que indican cómo corregir problemas.</li>
      <li><b>Validación accesible:</b> Los mensajes de validación y error se comunican tanto visualmente como mediante tecnologías de asistencia.</li>
      <li><b>Tiempo suficiente:</b> No establecemos límites de tiempo estrictos para completar procesos, o permitimos ampliar el tiempo cuando es necesario por seguridad.</li>
      <li><b>Prevención de errores:</b> En procesos críticos (como envío de paquetes con valor declarado) solicitamos confirmación antes de ejecutar acciones irreversibles.</li>
    </ul>

    <h3>Tecnología y compatibilidad</h3>
    <ul>
      <li><b>Compatibilidad con lectores de pantalla:</b> El sitio web es compatible con los principales lectores de pantalla del mercado (JAWS, NVDA, VoiceOver, TalkBack).</li>
      <li><b>Atributos ARIA:</b> Utilizamos atributos ARIA (Accessible Rich Internet Applications) para mejorar la accesibilidad de elementos dinámicos y widgets complejos.</li>
      <li><b>Diseño responsive:</b> El sitio web se adapta perfectamente a diferentes tamaños de pantalla y dispositivos (ordenadores, tablets, smartphones).</li>
      <li><b>Sin contenido parpadeante:</b> Evitamos elementos que parpadeen más de tres veces por segundo para prevenir crisis en personas con epilepsia fotosensible.</li>
      <li><b>Control de animaciones:</b> Respetamos las preferencias del sistema operativo sobre reducción de movimiento para usuarios sensibles a animaciones.</li>
    </ul>

    <br>
    <hr/>
    <h2 class="top_legalidades">Funcionalidades de accesibilidad avanzadas</h2>
    <p>
      Actualmente estamos desarrollando e implementando un módulo de accesibilidad avanzado que permitirá a los usuarios personalizar su experiencia de navegación según sus necesidades específicas. Este módulo incluirá:
    </p>
    <ul>
      <li><b>Ajuste dinámico del tamaño de texto:</b> Controles para aumentar o reducir el tamaño de fuente con incrementos graduales, hasta un 300% sin pérdida de funcionalidad.</li>
      <li><b>Modo de alto contraste:</b> Esquema de colores con contraste máximo (blanco sobre negro o viceversa) para personas con baja visión severa.</li>
      <li><b>Modo nocturno / Modo claro:</b> Alternancia entre tema oscuro y claro según preferencias del usuario o condiciones de iluminación.</li>
      <li><b>Tipografía accesible:</b> Opción de utilizar fuentes específicamente diseñadas para personas con dislexia (OpenDyslexic, Dyslexie) que facilitan la lectura.</li>
      <li><b>Resaltado de enlaces y botones:</b> Destacado visual de elementos interactivos con bordes gruesos y colores diferenciados.</li>
      <li><b>Espaciado mejorado:</b> Aumento del espaciado entre líneas, párrafos y letras para facilitar la lectura.</li>
      <li><b>Control total de animaciones:</b> Desactivación completa de animaciones, transiciones y efectos de paralaje para usuarios sensibles al movimiento.</li>
      <li><b>Cursor aumentado:</b> Opciones para aumentar el tamaño y visibilidad del cursor del ratón.</li>
      <li><b>Guía de lectura:</b> Línea de enfoque que acompaña la lectura resaltando el renglón activo.</li>
      <li><b>Modo de lectura simplificada:</b> Eliminación de elementos decorativos y distracción para concentrarse únicamente en el contenido principal.</li>
      <li><b>Navegación por voz:</b> Integración futura con comandos de voz para facilitar la navegación sin usar manos.</li>
    </ul>

    <br>
    <hr/>
    <h2 class="top_legalidades">Servicios accesibles de Correos Express</h2>
    <p>
      Más allá de nuestro sitio web, Correos Express ofrece múltiples canales accesibles para que todos nuestros clientes puedan utilizar nuestros servicios:
    </p>
    <ul>
      <li><b>Servicio telefónico con atención personalizada:</b> 902 100 102 / 613 95 96 89 con operadores capacitados para asistir a personas con necesidades especiales.</li>
      <li><b>Atención presencial adaptada:</b> Nuestras oficinas principales disponen de mostradores adaptados, rampas de acceso y señalización en braille.</li>
      <li><b>Aplicación móvil accesible:</b> Nuestra app cumple con los estándares de accesibilidad de iOS y Android, compatible con VoiceOver y TalkBack.</li>
      <li><b>Comunicaciones en formatos alternativos:</b> Posibilidad de recibir notificaciones y documentación en formatos accesibles (audio, braille, texto plano, letra grande).</li>
      <li><b>Asistencia para personas con discapacidad:</b> Servicio de ayuda especial para personas con dificultades de movilidad en la recogida y entrega de envíos.</li>
    </ul>

    <br>
    <hr/>
    <h2 class="top_legalidades">Evaluación y mejora continua</h2>
    <p>
      La accesibilidad no es un objetivo estático, sino un compromiso de mejora continua. Correos Express realiza evaluaciones periódicas de accesibilidad mediante:
    </p>
    <ul>
      <li><b>Auditorías técnicas regulares:</b> Análisis automáticos y manuales de conformidad con WCAG 2.1 utilizando herramientas especializadas (WAVE, Axe, Lighthouse).</li>
      <li><b>Pruebas con usuarios reales:</b> Colaboración con asociaciones de personas con discapacidad para realizar pruebas de usabilidad con usuarios diversos.</li>
      <li><b>Revisiones de expertos:</b> Auditorías externas realizadas por consultores especializados en accesibilidad web.</li>
      <li><b>Formación continua:</b> Capacitación de nuestro equipo de desarrollo y diseño en buenas prácticas de accesibilidad.</li>
      <li><b>Monitorización de feedback:</b> Análisis sistemático de todas las sugerencias y reportes de problemas de accesibilidad recibidos.</li>
    </ul>
    <p>
      Valoramos enormemente los comentarios, sugerencias y reportes de nuestros usuarios, ya que nos ayudan a identificar áreas de mejora que quizás no hayamos detectado internamente.
    </p>

    <br>
    <hr/>
    <h2 class="top_legalidades">Limitaciones conocidas y plan de acción</h2>
    <p>
      A pesar de nuestros esfuerzos, somos conscientes de que algunas áreas de nuestro sitio web aún pueden presentar desafíos de accesibilidad:
    </p>
    <ul>
      <li><b>Documentos PDF antiguos:</b> Algunos documentos PDF históricos pueden no ser completamente accesibles. Estamos trabajando en convertirlos a formato accesible o proporcionar versiones alternativas en HTML.</li>
      <li><b>Contenido generado por terceros:</b> Algunos widgets o contenidos integrados de socios externos pueden tener limitaciones de accesibilidad que estamos trabajando en resolver.</li>
      <li><b>Compatibilidad con navegadores antiguos:</b> Algunas funcionalidades de accesibilidad avanzadas requieren navegadores actualizados.</li>
    </ul>
    <p>
      Tenemos un plan de acción en marcha para resolver estas limitaciones en los próximos 6-12 meses, priorizando aquellas áreas con mayor impacto en la experiencia del usuario.
    </p>

    <br>
    <hr/>
    <h2 class="top_legalidades">Normativa y cumplimiento legal</h2>
    <p>
      Este compromiso con la accesibilidad responde no solo a nuestros valores corporativos, sino también al cumplimiento de la normativa legal vigente:
    </p>
    <ul>
      <li>Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público (transposición de la Directiva UE 2016/2102).</li>
      <li>Norma UNE-EN 301549:2020 sobre requisitos de accesibilidad para productos y servicios TIC.</li>
      <li>Ley General de derechos de las personas con discapacidad y de su inclusión social (Real Decreto Legislativo 1/2013).</li>
      <li>Convención Internacional sobre los Derechos de las Personas con Discapacidad de la ONU, ratificada por España.</li>
    </ul>

    <br>
    <hr/>
    <h2 class="top_legalidades">Contacto para cuestiones de accesibilidad</h2>
    <p>
      Si encuentra cualquier barrera de accesibilidad en nuestro sitio web, si experimenta dificultades para acceder a algún contenido o funcionalidad, o si desea realizar sugerencias para mejorar la accesibilidad de nuestros servicios digitales, por favor no dude en contactarnos. Su feedback es valioso y nos ayuda a mejorar.
    </p>
    <p>
      <b>Puede contactar con nuestro Departamento de Accesibilidad y Atención al Cliente a través de:</b>
    </p>
    <ul>
      <li><b>Correo electrónico específico de accesibilidad:</b> <a href="mailto:accesibilidad@correosexpress.com">accesibilidad@correosexpress.com</a></li>
      <li><b>Servicio de Atención al Cliente:</b> <a href="mailto:atencioncliente@correosexpress.com">atencioncliente@correosexpress.com</a></li>
      <li><b>Teléfono de atención (también disponible para usuarios con discapacidad auditiva mediante intermediación):</b> 902 100 102 / 613 95 96 89</li>
      <li><b>Videollamada con lengua de signos española (LSE):</b> Disponible previa cita en horario de 9:00h a 18:00h</li>
      <li><b>Dirección postal:</b> Correos Express - Departamento de Accesibilidad, Avenida del Correo, 50, 28080 Madrid, España</li>
      <li><b>Formulario de contacto accesible:</b> Disponible en nuestra sección de Contacto con soporte completo para lectores de pantalla</li>
      <li><b>Horario de atención telefónica:</b> Lunes a Viernes de 8:00h a 20:00h, Sábados de 9:00h a 14:00h</li>
    </ul>

    <p>
      Nos comprometemos a responder a todas las consultas sobre accesibilidad en un plazo máximo de 5 días laborables y a trabajar de manera proactiva para resolver cualquier problema identificado.
    </p>

    <p>
      <strong>Nota importante:</strong> Para consultas relacionadas con nuestros servicios de mensajería y paquetería, tarifas, seguimiento de envíos o reclamaciones, consulte nuestros <a href="/Legalidades/Términos-Condiciones.html">Términos y Condiciones de Servicio</a> o nuestra sección de <a href="/Legalidades/Reclamos.html">Reclamaciones</a>.
    </p>

    <br>
    <p style="font-style: italic; opacity: 0.9;">
      <strong>Correos Express - Conectando personas, entregando confianza, accesibles para todos.</strong>
    </p>
  `;

  container.appendChild(contentBox);

  // Animar entrada
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    });
  });
  
  return container;
}
