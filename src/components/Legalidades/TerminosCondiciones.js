import { EmpanadaBanner } from '../EmpanadaBanner.js';

export function TerminosCondiciones() {
  const outer = document.createElement('div');
  outer.id = 'terminos-container';
  outer.style.cssText = `
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

  outer.appendChild(EmpanadaBanner());

  const container = document.createElement('div');
  container.className = 'container margen-navbar';
  container.id = 'contenido-terminos';
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
  if (!document.getElementById('legalidades-terminos-styles')) {
    const style = document.createElement('style');
    style.id = 'legalidades-terminos-styles';
    style.textContent = `
      #terminos-container .container.margen-navbar {
        color: #fff !important;
        max-width: 1200px;
        padding: 2rem;
        background: rgba(42, 42, 42, 0.95);
        border-radius: 15px;
        margin-top: 2rem;
      }
      #terminos-container .container.margen-navbar h1,
      #terminos-container .container.margen-navbar h2,
      #terminos-container .container.margen-navbar h3,
      #terminos-container .container.margen-navbar h4,
      #terminos-container .top_legalidades,
      #terminos-container .Inicio-Informacion {
        color: #f97316 !important;
      }
      #terminos-container .container.margen-navbar p,
      #terminos-container .container.margen-navbar li,
      #terminos-container .container.margen-navbar td,
      #terminos-container .container.margen-navbar th {
        color: #fff !important;
      }
      #terminos-container .container.margen-navbar a {
        color: #60a5fa !important;
        text-decoration: underline;
      }
      #terminos-container .container.margen-navbar a:hover {
        color: #93c5fd !important;
      }
      #terminos-container .container.margen-navbar hr {
        border-color: rgba(249, 115, 22, 0.3);
      }
    `;
    document.head.appendChild(style);
  }
  
  container.innerHTML = `
    <h1 class="Inicio-Informacion top_legalidades">Términos y Condiciones Generales de Contratación</h1>
    <p><b>Última actualización: 27 de noviembre de 2025</b></p>

    <p>
      Bienvenido a Correos Express. Al contratar nuestros servicios de mensajería, paquetería y transporte de mercancías, usted acepta cumplir con estos Términos y Condiciones Generales de Contratación en su totalidad. Si no está de acuerdo con alguna cláusula de estos términos, le solicitamos que no utilice nuestros servicios. Estos términos complementan nuestro <a href="/Legalidades/Avisos-Legales.html">Aviso Legal</a> y forman parte integral del contrato de prestación de servicios.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">1. Definiciones y ámbito de aplicación</h2>
    <p>
      A los efectos de estas Condiciones Generales, se entenderá por:
    </p>
    <ul>
      <li><b>Correos Express o la Compañía:</b> Correos Express y Paquetería, S.A., empresa prestadora de servicios postales y de mensajería.</li>
      <li><b>Remitente:</b> Persona física o jurídica que contrata el servicio de transporte y entrega de envíos.</li>
      <li><b>Destinatario:</b> Persona física o jurídica a quien se dirige el envío y quien está autorizado a recibirlo.</li>
      <li><b>Envío:</b> Cualquier paquete, sobre, documento o mercancía entregada a Correos Express para su transporte y distribución.</li>
      <li><b>Servicio Estándar:</b> Entrega de envíos en plazo de 24-48 horas laborables dentro del territorio nacional peninsular.</li>
      <li><b>Servicio Express:</b> Entrega urgente en el mismo día o antes de las 10:00h del día siguiente laborable.</li>
      <li><b>Servicio Internacional:</b> Transporte de envíos con origen o destino fuera del territorio español.</li>
    </ul>
    <p>
      Estas Condiciones Generales son de aplicación a todos los servicios de transporte, distribución y entrega de envíos prestados por Correos Express en territorio nacional e internacional, independientemente del canal de contratación utilizado (web, app, teléfono, oficina física o puntos de recogida autorizados).
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">2. Contratación de servicios</h2>
    <p>
      La contratación de servicios puede realizarse a través de nuestro sitio web, aplicación móvil, servicio telefónico de atención al cliente, oficinas y puntos de atención presencial, o mediante acuerdo comercial para clientes corporativos. El contrato se perfecciona en el momento en que Correos Express acepta el envío y emite el correspondiente comprobante o número de seguimiento.
    </p>
    <p>
      El remitente debe proporcionar información completa, veraz y actualizada sobre el contenido del envío, datos de contacto del destinatario, dirección de entrega completa con código postal, y cualquier otra información necesaria para la correcta prestación del servicio. La omisión o inexactitud de estos datos puede ocasionar retrasos, imposibilidad de entrega o costes adicionales.
    </p>
    <p>
      Para la contratación de servicios es necesario ser mayor de 18 años o contar con la capacidad legal suficiente para contratar. Los menores de edad deben contar con autorización de sus padres, tutores o representantes legales.
    </p>
    <p>
      Correos Express se reserva el derecho de rechazar o cancelar cualquier envío que no cumpla con las condiciones establecidas, que contenga mercancías prohibidas o restringidas, o cuando existan dudas razonables sobre la legalidad del contenido o el cumplimiento de la normativa aplicable.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">3. Tarifas, pagos y facturación</h2>
    <p>
      Las tarifas de nuestros servicios están disponibles en nuestro sitio web, aplicación móvil y oficinas comerciales. Los precios pueden variar en función del tipo de servicio contratado, peso, dimensiones, destino, valor declarado del envío y servicios adicionales solicitados (entrega en fecha específica, contra reembolso, gestión aduanera, etc.).
    </p>
    <p>
      El pago de los servicios puede realizarse mediante tarjeta de crédito o débito, transferencia bancaria, domiciliación bancaria (para clientes con cuenta), pago en efectivo en oficinas autorizadas, o mediante los medios de pago habilitados en cada momento. Para clientes corporativos con acuerdo comercial, se aplicarán las condiciones de pago específicamente pactadas.
    </p>
    <p>
      Todos los precios incluyen el Impuesto sobre el Valor Añadido (IVA) cuando sea aplicable, salvo que expresamente se indique lo contrario. Las facturas se emitirán de conformidad con la normativa fiscal vigente y estarán disponibles en formato electrónico en el área de cliente del sitio web.
    </p>
    <p>
      En caso de impago, Correos Express se reserva el derecho de suspender la prestación de servicios y reclamar las cantidades adeudadas, así como los intereses de demora y gastos de gestión de cobro que pudieran derivarse, de conformidad con la legislación vigente.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">4. Obligaciones del remitente</h2>
    <p>
      El remitente se compromete a embalar adecuadamente los envíos de manera que el contenido quede protegido durante el transporte y manipulación. El embalaje debe ser suficientemente resistente y adecuado al contenido, especialmente en el caso de objetos frágiles, perecederos o de valor.
    </p>
    <p>
      Es responsabilidad del remitente declarar de forma veraz y completa el contenido del envío. Quedan expresamente prohibidos los envíos que contengan:
    </p>
    <ul>
      <li>Sustancias peligrosas, inflamables, explosivas, tóxicas o corrosivas sin autorización especial.</li>
      <li>Estupefacientes, drogas o sustancias ilegales de cualquier tipo.</li>
      <li>Armas, municiones o material bélico sin las autorizaciones legales correspondientes.</li>
      <li>Dinero en efectivo, cheques al portador, joyas de gran valor o metales preciosos sin declaración previa.</li>
      <li>Productos falsificados o que infrinjan derechos de propiedad intelectual o industrial.</li>
      <li>Materiales pornográficos, obscenos o que inciten al odio o la violencia.</li>
      <li>Animales vivos, plantas o semillas sin las autorizaciones fitosanitarias correspondientes.</li>
      <li>Productos perecederos sin las condiciones especiales de conservación necesarias.</li>
      <li>Cualquier artículo cuyo transporte esté prohibido por la legislación nacional o internacional.</li>
    </ul>
    <p>
      El remitente será responsable de obtener y adjuntar toda la documentación necesaria para envíos internacionales (declaración aduanera, facturas comerciales, certificados de origen, documentación sanitaria o fitosanitaria, etc.) y responderá de cualquier sanción, retención o incidencia derivada de documentación incorrecta o incompleta.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">5. Plazos de entrega y seguimiento</h2>
    <p>
      Los plazos de entrega indicados para cada servicio son estimativos y se refieren a días laborables, excluyendo sábados, domingos y festivos nacionales o locales del lugar de destino. Los plazos se cuentan desde el momento de admisión del envío por Correos Express.
    </p>
    <p>
      Correos Express realizará todos los esfuerzos razonables para cumplir con los plazos de entrega estimados, pero no garantiza plazos concretos salvo en servicios específicos con garantía de entrega en tiempo determinado. Los plazos pueden verse afectados por circunstancias excepcionales fuera del control de la compañía.
    </p>
    <p>
      Todo envío dispone de un número de seguimiento que permite al remitente y al destinatario conocer en tiempo real el estado y ubicación del paquete a través de nuestra web, aplicación móvil o servicio de atención al cliente. Se recomienda conservar el comprobante de envío hasta la confirmación de entrega.
    </p>
    <p>
      En caso de ausencia del destinatario en el primer intento de entrega, se dejará aviso y se realizarán hasta dos intentos adicionales. Si tras los intentos de entrega el destinatario no recoge el envío, este quedará a disposición en la oficina más próxima durante un plazo de 15 días naturales, tras lo cual se considerará no reclamado y se devolverá al remitente.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">6. Entrega y recepción de envíos</h2>
    <p>
      La entrega se considerará efectuada cuando el envío sea entregado personalmente al destinatario o a cualquier persona mayor de edad en la dirección indicada que se identifique como autorizada para recibir el envío. La firma del albarán de entrega o la confirmación digital equivale a la recepción conforme del envío.
    </p>
    <p>
      Si el destinatario detecta daños evidentes en el embalaje exterior en el momento de la entrega, debe hacer constar esta circunstancia en el albarán de entrega antes de firmar. Una vez firmada la recepción sin observaciones, se presume que el envío ha sido entregado en perfecto estado exterior.
    </p>
    <p>
      Para envíos que requieran identificación del destinatario o entrega en mano (servicios especiales), será imprescindible que el destinatario se identifique mediante documento oficial válido (DNI, NIE, pasaporte). Sin identificación adecuada, el envío no será entregado.
    </p>
    <p>
      Correos Express ofrece servicios adicionales de entrega en puntos de conveniencia, consignas automáticas o buzones inteligentes cuando el destinatario lo haya seleccionado previamente. En estos casos, el destinatario recibirá un código de recogida y será responsable de retirar el envío en el plazo establecido.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">7. Responsabilidad y limitaciones</h2>
    <p>
      Correos Express responde de la pérdida total o parcial, retraso o deterioro de los envíos bajo su custodia de conformidad con lo establecido en la Ley 43/2010 del servicio postal universal y la normativa de transporte de mercancías aplicable.
    </p>
    <p>
      La responsabilidad por pérdida o daños está limitada al valor real del contenido del envío, con un máximo de 300 euros por envío para servicios estándar, salvo que el remitente haya declarado un valor superior y contratado el correspondiente seguro adicional. Para envíos internacionales se aplicarán las limitaciones establecidas en los convenios internacionales aplicables (Convenio de Montreal, CMR, etc.).
    </p>
    <p>
      Correos Express no será responsable de los daños ocasionados por:
    </p>
    <ul>
      <li>Embalaje deficiente, inadecuado o insuficiente por parte del remitente.</li>
      <li>Naturaleza propia de la mercancía (productos frágiles, perecederos, sensibles a temperatura sin protección adecuada).</li>
      <li>Información incorrecta o incompleta facilitada por el remitente.</li>
      <li>Fuerza mayor o circunstancias excepcionales (fenómenos meteorológicos adversos, catástrofes naturales, actos de terrorismo, guerras, huelgas generales, pandemias, etc.).</li>
      <li>Actos u omisiones del remitente o destinatario.</li>
      <li>Retenciones o incautaciones por autoridades competentes (aduanas, policía, sanidad, etc.).</li>
      <li>Envíos de mercancías prohibidas o restringidas sin declaración previa.</li>
    </ul>
    <p>
      Para efectuar cualquier reclamación por pérdida, daños o retraso, el interesado debe notificarlo por escrito a Correos Express en un plazo máximo de 7 días naturales desde la entrega del envío (o desde la fecha prevista de entrega en caso de pérdida). Pasado este plazo, se considerará que el envío fue entregado correctamente.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">8. Envíos internacionales y gestión aduanera</h2>
    <p>
      Los envíos internacionales están sujetos a las normativas aduaneras, fiscales y de comercio exterior de los países de origen, tránsito y destino. El remitente es responsable de proporcionar toda la documentación aduanera necesaria y declarar correctamente el contenido y valor de la mercancía.
    </p>
    <p>
      Los envíos internacionales pueden estar sujetos al pago de aranceles, impuestos de importación (IVA), tasas aduaneras y otros gravámenes en el país de destino. Salvo acuerdo en contrario, estos costes serán responsabilidad del destinatario. Si el destinatario rechaza el envío o el pago de estos costes, el envío será devuelto al remitente, quien deberá asumir los gastos de retorno y almacenaje.
    </p>
    <p>
      Correos Express puede ofrecer servicios de gestión aduanera para facilitar el despacho de mercancías, pero no se responsabiliza de las retenciones, incautaciones o sanciones impuestas por las autoridades aduaneras debido a declaraciones incorrectas, mercancías prohibidas o documentación inadecuada.
    </p>
    <p>
      Los plazos de entrega de envíos internacionales pueden verse afectados significativamente por los tiempos de despacho aduanero, que están fuera del control de Correos Express. Los plazos indicados son estimativos y no incluyen los tiempos de gestión aduanera.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">9. Protección de datos personales</h2>
    <p>
      El tratamiento de datos personales del remitente y destinatario se realiza de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos. Los datos serán utilizados exclusivamente para la gestión, transporte y entrega del envío, así como para la comunicación de incidencias.
    </p>
    <p>
      El remitente se compromete a haber informado al destinatario sobre la comunicación de sus datos personales a Correos Express para los fines indicados, obteniendo su consentimiento cuando sea legalmente necesario. Para más información sobre el tratamiento de datos, consulte nuestra Política de Privacidad.
    </p>
    <p>
      Los interesados pueden ejercitar sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición mediante solicitud dirigida a nuestro Delegado de Protección de Datos en <a href="mailto:dpd@correosexpress.com">dpd@correosexpress.com</a> o en la dirección postal de nuestra sede social.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">10. Devoluciones y reembolsos</h2>
    <p>
      En caso de imposibilidad de entrega por causas no imputables a Correos Express, el envío será devuelto al remitente. Los gastos de devolución serán responsabilidad del remitente, salvo que se haya contratado el servicio de devolución gratuita.
    </p>
    <p>
      Cuando se haya contratado el servicio de reembolso contra entrega, Correos Express transferirá el importe cobrado al destinatario al remitente en el plazo y condiciones establecidas en el momento de la contratación, previa deducción de las comisiones aplicables.
    </p>
    <p>
      Los reembolsos por servicios no prestados o incumplimientos imputables a Correos Express se realizarán mediante devolución del importe pagado por el servicio, sin que proceda indemnización adicional salvo lo establecido por la legislación aplicable en materia de protección de consumidores.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">11. Modificación de las condiciones</h2>
    <p>
      Correos Express se reserva el derecho a modificar estas Condiciones Generales en cualquier momento para adaptarse a cambios normativos, mejoras operativas o modificaciones en la política comercial. Las nuevas condiciones serán de aplicación a los servicios contratados con posterioridad a su publicación en el sitio web.
    </p>
    <p>
      Los clientes con contratos corporativos o acuerdos comerciales específicos serán notificados previamente de cualquier modificación que pueda afectarles, concediéndose un plazo razonable de adaptación o, en su caso, la posibilidad de rescindir el contrato sin penalización.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">12. Resolución de conflictos y reclamaciones</h2>
    <p>
      Para la resolución de cualquier controversia o reclamación relacionada con nuestros servicios, los clientes pueden dirigirse en primer lugar a nuestro Servicio de Atención al Cliente mediante los canales habilitados (teléfono, correo electrónico, formulario web).
    </p>
    <p>
      Los consumidores y usuarios podrán acceder a los sistemas de resolución alternativa de conflictos de acuerdo con la normativa de protección de consumidores vigente. Información disponible en la plataforma europea de resolución de litigios en línea: <a href="https://ec.europa.eu/consumers/odr" target="_blank">https://ec.europa.eu/consumers/odr</a>
    </p>
    <p>
      Para más información sobre el procedimiento de reclamaciones, consulte nuestra página específica de <a href="/Legalidades/Reclamos.html">Reclamaciones y Atención al Cliente</a>.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">13. Legislación aplicable y jurisdicción</h2>
    <p>
      Estas Condiciones Generales se rigen por la legislación española, en particular por la Ley 43/2010 del servicio postal universal, el Real Decreto Legislativo 1/2007 de protección de consumidores y usuarios, y la normativa de transporte de mercancías aplicable.
    </p>
    <p>
      Para cualquier controversia derivada de la interpretación o aplicación de estas condiciones, las partes se someten expresamente a la jurisdicción de los Juzgados y Tribunales de Madrid capital, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, salvo que el cliente tenga la condición de consumidor, en cuyo caso será de aplicación la legislación de protección de consumidores.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">14. Información de contacto</h2>
    <p class="FinalLegalidades">
      Para cualquier consulta, aclaración o incidencia relacionada con estos Términos y Condiciones o con nuestros servicios de mensajería, puede contactar con nosotros en: <a href="mailto:atencioncliente@correosexpress.com">atencioncliente@correosexpress.com</a>, llamar al 902 100 102 o al 613 95 96 89, o visitar cualquiera de nuestras oficinas de atención al público. Horario de atención: Lunes a Viernes de 8:00h a 20:00h, Sábados de 9:00h a 14:00h.
    </p>
  `;
  
  outer.appendChild(container);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      outer.style.opacity = '1';
      outer.style.transform = 'translateY(0)';
    });
  });

  return outer;
}
