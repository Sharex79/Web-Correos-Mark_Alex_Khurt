export function renderReclamos() {
  const container = document.createElement('div');
  container.className = 'container margen-navbar';
  container.id = 'legalidades-styles';
  
  container.innerHTML = `
    <h1 class="top_legalidades">Reclamaciones y Atención al Cliente</h1>
    <p><b>Última actualización: 27 de noviembre de 2025</b></p>
    <hr>
    
    <p>
      En Correos Express nos esforzamos por ofrecer un servicio de mensajería y paquetería de máxima calidad, cumpliendo con los más altos estándares de profesionalidad y compromiso. Sin embargo, entendemos que en ocasiones pueden surgir incidencias, retrasos o problemas con sus envíos. Por ello, hemos establecido un sistema completo de atención de reclamaciones que garantiza una gestión rápida, transparente y justa de cualquier incidencia.
    </p>

    <p>
      Este documento explica cómo puede presentar una reclamación, qué documentación necesita, los plazos aplicables y cómo procesamos sus solicitudes. Nos comprometemos a tratar cada reclamación con la máxima atención y a buscar siempre la mejor solución para nuestros clientes.
    </p>

    <br>
    <hr/>
    <h2 class="top_legalidades">1. ¿Cuándo puede presentar una reclamación?</h2>
    <p>
      Puede presentar una reclamación ante Correos Express en las siguientes situaciones relacionadas con sus envíos:
    </p>
    
    <h3>Tipos de incidencias reclamables</h3>
    <ul>
      <li><b>Pérdida total del envío:</b> Cuando el paquete o documento no ha sido localizado después de transcurrido el plazo de entrega comprometido más un período de búsqueda de 7 días naturales.</li>
      <li><b>Retraso en la entrega:</b> Cuando el envío no se ha entregado dentro del plazo garantizado según el servicio contratado (estándar, express, urgente), sin causa de fuerza mayor justificada.</li>
      <li><b>Daños en el contenido:</b> Cuando el paquete llega con el embalaje visiblemente deteriorado y se constatan daños en el contenido interior.</li>
      <li><b>Daños en el embalaje exterior:</b> Cuando el envío presenta roturas, deformaciones o deterioros significativos en el embalaje exterior que puedan haber afectado al contenido.</li>
      <li><b>Entrega incorrecta:</b> Cuando el envío ha sido entregado a una dirección equivocada o a una persona no autorizada para recibirlo.</li>
      <li><b>Pérdida parcial:</b> Cuando falta parte del contenido declarado en el momento de la contratación del envío.</li>
      <li><b>Falta de aviso de reparto:</b> Cuando no se ha dejado aviso de visita en caso de ausencia del destinatario, según lo establecido en nuestros procedimientos.</li>
      <li><b>Cobro de tarifas incorrectas:</b> Cuando se ha facturado un importe superior al que correspondía según las condiciones contratadas.</li>
      <li><b>Problemas con servicios adicionales:</b> Incidencias relacionadas con seguros adicionales, reembolsos, entregas en horarios especiales, etc.</li>
      <li><b>Trato inadecuado del personal:</b> Cuando el personal de Correos Express no ha actuado con la profesionalidad y cortesía debidas.</li>
      <li><b>Incumplimiento de condiciones especiales:</b> Cuando no se han respetado instrucciones específicas acordadas (entrega en mano, manipulación especial, etc.).</li>
    </ul>

    <br>
    <hr/>
    <h2 class="top_legalidades">2. Plazos para presentar reclamaciones</h2>
    <p>
      Es importante actuar con rapidez ante cualquier incidencia. Los plazos para presentar reclamaciones son:
    </p>
    
    <h3>Plazos según tipo de reclamación</h3>
    <ul>
      <li><b>Daños visibles en el embalaje:</b> <span style="color: #f97316;">Reclamación inmediata en el momento de la recepción.</span> El destinatario debe hacer constar las reservas en el albarán de entrega antes de firmar, o rechazar el envío si los daños son evidentes y graves. Posteriormente, dispone de 24 horas para comunicar los daños internos por escrito.</li>
      <li><b>Daños no visibles (ocultos):</b> Hasta <b>7 días naturales</b> desde la fecha de recepción del envío. Es fundamental abrir el paquete en presencia del repartidor o documentar la apertura fotográficamente.</li>
      <li><b>Pérdida total del envío:</b> Desde el momento en que ha transcurrido el plazo de entrega más 7 días adicionales de búsqueda, y hasta <b>30 días naturales</b> desde la fecha de admisión del envío.</li>
      <li><b>Retraso en la entrega:</b> Hasta <b>21 días naturales</b> desde la fecha en que debió haberse entregado según el servicio contratado.</li>
      <li><b>Pérdida parcial o falta de contenido:</b> Hasta <b>7 días naturales</b> desde la recepción del envío.</li>
      <li><b>Cobros indebidos o errores de facturación:</b> Hasta <b>60 días naturales</b> desde la fecha de emisión de la factura.</li>
      <li><b>Otras reclamaciones (calidad de servicio, trato, incumplimientos):</b> Hasta <b>30 días naturales</b> desde la fecha de la incidencia.</li>
    </ul>

    <p>
      <strong>Importante:</strong> Las reclamaciones presentadas fuera de estos plazos pueden no ser admitidas a trámite, salvo que existan circunstancias excepcionales debidamente justificadas. Le recomendamos actuar con rapidez ante cualquier incidencia.
    </p>

    <br>
    <hr/>
    <h2 class="top_legalidades">3. Cómo presentar una reclamación</h2>
    <p>
      Correos Express pone a su disposición múltiples canales para presentar reclamaciones. Elija el que le resulte más cómodo:
    </p>

    <h3>Canales de reclamación disponibles</h3>
    <ul>
      <li>
        <b>Formulario online de reclamaciones:</b> Disponible en nuestra web en la sección "Atención al Cliente > Reclamaciones". Es el método más rápido y permite adjuntar documentación digitalizada.
      </li>
      <li>
        <b>Correo electrónico:</b> <a href="mailto:reclamaciones@correosexpress.com">reclamaciones@correosexpress.com</a> (Departamento específico de reclamaciones con respuesta prioritaria)
      </li>
      <li>
        <b>Atención al cliente general:</b> <a href="mailto:atencioncliente@correosexpress.com">atencioncliente@correosexpress.com</a>
      </li>
      <li>
        <b>Teléfono de atención especializada:</b> 902 100 102 / 613 95 96 89 (Horario: Lunes a Viernes 8:00-20:00h, Sábados 9:00-14:00h)
      </li>
      <li>
        <b>Presencial en oficinas:</b> Puede presentar su reclamación por escrito en cualquiera de nuestras oficinas comerciales. Localice la más cercana en nuestra web.
      </li>
      <li>
        <b>Correo postal:</b> Correos Express - Departamento de Reclamaciones, Avenida del Correo, 50, 28080 Madrid, España
      </li>
      <li>
        <b>Fax:</b> 91 234 56 78 (disponible 24/7)
      </li>
      <li>
        <b>WhatsApp Business:</b> +34 613 95 96 89 (canal de mensajería con respuesta en horario comercial)
      </li>
    </ul>

    <br>
    <hr/>
    <h2 class="top_legalidades">4. Información y documentación necesaria</h2>
    <p>
      Para tramitar su reclamación de manera eficiente, necesitamos que nos proporcione la siguiente información y documentación. Cuanto más completa sea, más rápida será la resolución:
    </p>

    <h3>Datos obligatorios</h3>
    <ul>
      <li><b>Número de seguimiento del envío:</b> Es el código alfanumérico único que identifica su envío (ejemplo: CE1234567890ES). Lo encontrará en su albarán de envío, en el email de confirmación o en su área de cliente.</li>
      <li><b>Fecha de admisión del envío:</b> Día en que se depositó o recogió el envío.</li>
      <li><b>Datos del remitente:</b> Nombre completo o razón social, dirección, teléfono y email de contacto.</li>
      <li><b>Datos del destinatario:</b> Nombre completo, dirección de entrega, teléfono.</li>
      <li><b>Tipo de incidencia:</b> Descripción clara del problema (pérdida, daño, retraso, etc.).</li>
      <li><b>Descripción detallada del contenido:</b> Qué contenía el envío, cantidad de piezas, peso aproximado.</li>
      <li><b>Valor declarado del contenido:</b> Importe económico del contenido del envío. Si contrató seguro adicional, indique el valor asegurado.</li>
      <li><b>Documentación que acredite el valor:</b> Facturas de compra, albaranes, presupuestos, capturas de precios en webs, etc.</li>
    </ul>

    <h3>Documentación adicional según tipo de incidencia</h3>
    
    <h3>Para reclamaciones por daños:</h3>
    <ul>
      <li>Fotografías claras y detalladas del embalaje exterior mostrando los daños (desde varios ángulos).</li>
      <li>Fotografías del contenido dañado (piezas rotas, productos deteriorados, etc.).</li>
      <li>Fotografía del material de embalaje interior (relleno, protecciones, etc.).</li>
      <li>Albarán de entrega donde consten las reservas o incidencias anotadas en el momento de la recepción.</li>
      <li>Factura de compra o documento que acredite el valor de los objetos dañados.</li>
      <li>Presupuesto de reparación o declaración de pérdida total si procede.</li>
    </ul>

    <h3>Para reclamaciones por pérdida:</h3>
    <ul>
      <li>Copia del albarán o justificante de envío.</li>
      <li>Factura de compra del contenido o documento acreditativo del valor.</li>
      <li>Declaración jurada del contenido y valor si no dispone de factura.</li>
      <li>Certificado de depósito del envío en oficina o recibo de recogida a domicilio.</li>
    </ul>

    <h3>Para reclamaciones por retraso:</h3>
    <ul>
      <li>Albarán con la fecha de admisión del envío.</li>
      <li>Tipo de servicio contratado (estándar, express, urgente 24h, etc.).</li>
      <li>Fecha real de entrega (si finalmente se entregó tarde).</li>
      <li>Justificación del perjuicio económico causado por el retraso, si procede.</li>
    </ul>

    <h3>Para reclamaciones por cobros incorrectos:</h3>
    <ul>
      <li>Copia de la factura cuestionada.</li>
      <li>Tarifas o presupuesto que se le facilitó en el momento de la contratación.</li>
      <li>Explicación detallada de la discrepancia detectada.</li>
    </ul>

    <p>
      <strong>Nota importante:</strong> La presentación de documentación incompleta puede retrasar el proceso de resolución. Nos reservamos el derecho de solicitar documentación adicional si es necesaria para acreditar la reclamación.
    </p>

    <br>
    <hr/>
    <h2 class="top_legalidades">5. Proceso de tramitación y plazos de respuesta</h2>
    <p>
      Una vez recibida su reclamación, seguimos un proceso estructurado para investigar y resolver la incidencia:
    </p>

    <h3>Fases del proceso</h3>
    <ul>
      <li>
        <b>1. Recepción y registro (24-48 horas):</b> Su reclamación es recibida y registrada en nuestro sistema con un número de expediente único que le será comunicado por email o SMS. Este número le permitirá hacer seguimiento del estado de su reclamación.
      </li>
      <li>
        <b>2. Análisis inicial (3-5 días laborables):</b> Nuestro departamento de reclamaciones revisa la documentación aportada y verifica si está completa. Si falta información, nos pondremos en contacto con usted para solicitarla.
      </li>
      <li>
        <b>3. Investigación interna (5-10 días laborables):</b> Se realiza una investigación exhaustiva: consulta del seguimiento del envío, contacto con la oficina de destino, entrevista al repartidor si es necesario, revisión de albaranes de entrega, análisis de fotografías, etc.
      </li>
      <li>
        <b>4. Propuesta de resolución (2-3 días laborables):</b> Una vez completada la investigación, le comunicamos nuestra resolución y, si procede, la compensación o solución propuesta.
      </li>
      <li>
        <b>5. Cierre del expediente (1-2 días laborables):</b> Si acepta la propuesta, procesamos la compensación (devolución, abono, indemnización) y cerramos el expediente. Si no está conforme, puede solicitar una revisión o acudir a mecanismos de resolución alternativa.
      </li>
    </ul>

    <h3>Plazos de resolución</h3>
    <p>
      Nos comprometemos a resolver su reclamación en los siguientes plazos máximos desde su presentación:
    </p>
    <ul>
      <li><b>Reclamaciones simples (cobros incorrectos, información):</b> 10 días laborables</li>
      <li><b>Reclamaciones por retraso:</b> 15 días laborables</li>
      <li><b>Reclamaciones por daños visibles:</b> 20 días laborables</li>
      <li><b>Reclamaciones por pérdida total:</b> 30 días laborables (puede alargarse si se requiere investigación postal internacional)</li>
      <li><b>Reclamaciones complejas o con investigación extensa:</b> Hasta 45 días laborables, informándole periódicamente del estado</li>
    </ul>

    <p>
      Durante todo el proceso, puede consultar el estado de su reclamación contactando con nuestro servicio de atención al cliente e indicando su número de expediente.
    </p>

    <br>
    <hr/>
    <h2 class="top_legalidades">6. Indemnizaciones y compensaciones</h2>
    <p>
      En caso de que su reclamación sea estimada, aplicaremos las siguientes indemnizaciones y compensaciones según la normativa postal vigente y nuestras condiciones generales:
    </p>

    <h3>Límites de responsabilidad estándar</h3>
    <ul>
      <li>
        <b>Pérdida total o daño irreparable:</b> Indemnización de hasta <b>300 euros</b> para envíos nacionales sin seguro adicional contratado, según establece la Ley 43/2010 del Servicio Postal Universal.
      </li>
      <li>
        <b>Envíos internacionales:</b> Indemnización según el Convenio de Montreal (transporte aéreo) o normativa CMR (transporte terrestre), generalmente limitada a <b>19 Derechos Especiales de Giro (DEG) por kilogramo</b> de peso bruto del envío.
      </li>
      <li>
        <b>Daño parcial reparable:</b> Coste real y acreditado de la reparación del objeto dañado, con un límite máximo del valor declarado o 300 euros si no se contrató seguro.
      </li>
      <li>
        <b>Retraso en la entrega:</b> Devolución de los gastos de envío (total o parcial según gravedad del retraso) y, si procede, compensación por perjuicios económicos directos acreditados, hasta el límite del precio del transporte.
      </li>
    </ul>

    <h3>Seguro adicional</h3>
    <p>
      Si contrató un <b>seguro adicional de valor declarado</b> en el momento del envío, la indemnización puede alcanzar el valor asegurado declarado (con límite máximo de 3.000 euros para envíos nacionales y 5.000 euros para internacionales, según condiciones específicas de cada servicio).
    </p>
    <p>
      <strong>Nota:</strong> Para optar a indemnizaciones superiores a 300 euros, es imprescindible haber contratado y abonado el seguro adicional y haber declarado correctamente el valor del envío en el momento de su admisión.
    </p>

    <h3>Formas de compensación</h3>
    <ul>
      <li><b>Devolución económica:</b> Transferencia bancaria a la cuenta que nos indique (plazo de 10 días laborables desde aceptación).</li>
      <li><b>Abono en cuenta de cliente:</b> Si es cliente habitual con cuenta corporativa, puede solicitar un abono en su cuenta para futuros envíos.</li>
      <li><b>Cheque nominativo:</b> Emitido a nombre del remitente o destinatario según corresponda.</li>
      <li><b>Envío gratuito compensatorio:</b> En algunos casos, podemos ofrecerle servicios de envío gratuitos por el valor de la compensación.</li>
    </ul>

    <h3>Exclusiones importantes</h3>
    <p>
      Correos Express no se hace responsable ni indemniza en los siguientes casos:
    </p>
    <ul>
      <li>Daños causados por embalaje insuficiente o inadecuado (responsabilidad del remitente según nuestras <a href="/Legalidades/Términos-Condiciones.html">Condiciones de Servicio</a>).</li>
      <li>Envíos de objetos prohibidos o restringidos (armas, sustancias peligrosas, mercancía perecedera sin servicio especializado, etc.).</li>
      <li>Pérdidas o daños causados por fuerza mayor, caso fortuito o circunstancias inevitables (fenómenos meteorológicos extremos, huelgas, guerras, catástrofes naturales).</li>
      <li>Incidencias comunicadas fuera de los plazos establecidos sin justificación.</li>
      <li>Daños no visibles no comunicados en plazo o sin documentación fotográfica adecuada.</li>
      <li>Valor no acreditado mediante factura o documento fehaciente.</li>
      <li>Retrasos inferiores a 2 días hábiles sobre el plazo estimado en servicios estándar.</li>
      <li>Daños indirectos, lucro cesante, daño moral, salvo responsabilidad grave o dolo por parte de Correos Express.</li>
    </ul>

    <br>
    <hr/>
    <h2 class="top_legalidades">7. Derechos del consumidor y mediación</h2>
    <p>
      Como consumidor, tiene derecho a una resolución justa de su reclamación. Si tras nuestro proceso interno no queda satisfecho con la resolución propuesta, puede acudir a mecanismos alternativos de resolución de conflictos:
    </p>

    <h3>Resolución alternativa de litigios</h3>
    <ul>
      <li>
        <b>Hojas de reclamación oficiales:</b> Puede solicitar una hoja de reclamación oficial en cualquiera de nuestras oficinas o descargarla desde nuestra web. Las reclamaciones presentadas por esta vía se remiten a la Dirección General de Consumo de la comunidad autónoma correspondiente.
      </li>
      <li>
        <b>Juntas Arbitrales de Consumo:</b> Puede someter el conflicto a arbitraje de consumo ante las Juntas Arbitrales autonómicas o la Junta Arbitral Nacional de Consumo. El arbitraje es gratuito, vinculante y constituye una alternativa rápida a la vía judicial.
        <br>Más información: <a href="http://www.consumo.gob.es" target="_blank" rel="noopener noreferrer">www.consumo.gob.es</a>
      </li>
      <li>
        <b>Plataforma europea de resolución de litigios en línea:</b> Para envíos internacionales o compras online transfronterizas, puede utilizar la plataforma ODR de la Comisión Europea.
        <br>Acceso: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
      </li>
      <li>
        <b>Asociaciones de consumidores:</b> Puede consultar y recibir asesoramiento de asociaciones de consumidores reconocidas (OCU, FACUA, CECU, etc.).
      </li>
    </ul>

    <h3>Vía judicial</h3>
    <p>
      Si ninguna de las vías anteriores resulta satisfactoria, tiene derecho a acudir a la vía judicial ordinaria. Según nuestras condiciones generales, será competente la jurisdicción de los Juzgados y Tribunales de Madrid, salvo que la normativa de consumidores establezca otro fuero más favorable para usted (generalmente, el de su domicilio).
    </p>
    <p>
      El plazo para ejercitar acciones legales es de <b>un año desde la fecha del envío</b> según la Ley Postal, o según los plazos establecidos en convenios internacionales para envíos transfronterizos.
    </p>

    <br>
    <hr/>
    <h2 class="top_legalidades">8. Normativa aplicable</h2>
    <p>
      El tratamiento de reclamaciones en Correos Express se rige por la siguiente normativa:
    </p>
    <ul>
      <li><b>Ley 43/2010, de 30 de diciembre, del servicio postal universal, de los derechos de los usuarios y del mercado postal.</b></li>
      <li><b>Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios.</b></li>
      <li><b>Reglamento (CE) nº 1371/2007 sobre derechos y obligaciones de los viajeros (aplicable por analogía a servicios de transporte).</b></li>
      <li><b>Convenio CMR (Convenio relativo al Contrato de Transporte Internacional de Mercancías por Carretera) para envíos internacionales terrestres.</b></li>
      <li><b>Convenio de Montreal para la unificación de ciertas reglas para el transporte aéreo internacional.</b></li>
      <li><b>Normativa interna de Correos Express sobre condiciones generales de contratación y responsabilidad.</b></li>
    </ul>

    <br>
    <hr/>
    <h2 class="top_legalidades">9. Consejos para evitar incidencias</h2>
    <p>
      Muchas incidencias pueden prevenirse siguiendo estas recomendaciones:
    </p>
    <ul>
      <li><b>Embale correctamente:</b> Use cajas resistentes, relleno adecuado (burbujas, poliestireno, papel) y precinte reforzado. Consulte nuestras guías de embalaje en la web.</li>
      <li><b>Declare el valor real:</b> Si el contenido tiene valor significativo, declare el valor y contrate seguro adicional. No merece la pena el riesgo de no hacerlo.</li>
      <li><b>Etiquetado claro:</b> Asegúrese de que la dirección de destino es completa, correcta y legible. Incluya teléfono del destinatario.</li>
      <li><b>Verifique los objetos prohibidos:</b> Antes de enviar, compruebe que no se trata de mercancía prohibida o restringida (consulte nuestra lista en <a href="/Legalidades/Términos-Condiciones.html">Términos y Condiciones</a>).</li>
      <li><b>Revise el paquete al recibirlo:</b> Inspeccione siempre el estado del embalaje antes de firmar. Si ve daños, haga constar reservas en el albarán o rechace el envío.</li>
      <li><b>Conserve documentación:</b> Guarde albaranes, justificantes de envío, facturas del contenido y cualquier documento relacionado durante al menos 6 meses.</li>
      <li><b>Utilice nuestro seguimiento:</b> Haga seguimiento online de su envío. Si detecta demoras o anomalías, contacte cuanto antes con nosotros.</li>
    </ul>

    <br>
    <hr/>
    <h2 class="top_legalidades">10. Contacto del Departamento de Reclamaciones</h2>
    <p>
      Para cualquier consulta o para presentar una reclamación, puede contactar con nosotros a través de:
    </p>
    <ul>
      <li><b>Email prioritario de reclamaciones:</b> <a href="mailto:reclamaciones@correosexpress.com">reclamaciones@correosexpress.com</a></li>
      <li><b>Atención al cliente general:</b> <a href="mailto:atencioncliente@correosexpress.com">atencioncliente@correosexpress.com</a></li>
      <li><b>Teléfono especializado:</b> 902 100 102 / 613 95 96 89</li>
      <li><b>Horario telefónico:</b> Lunes a Viernes de 8:00h a 20:00h, Sábados de 9:00h a 14:00h</li>
      <li><b>WhatsApp Business:</b> +34 613 95 96 89</li>
      <li><b>Dirección postal:</b> Correos Express - Departamento de Reclamaciones, Avenida del Correo, 50, 28080 Madrid, España</li>
      <li><b>Fax:</b> 91 234 56 78</li>
      <li><b>Formulario web:</b> Disponible en www.correosexpress.com > Atención al Cliente > Reclamaciones</li>
    </ul>

    <p>
      <strong>Horario de respuesta por email:</strong> Las consultas recibidas por email son respondidas en un plazo máximo de 24-48 horas laborables.
    </p>

    <br>
    <hr/>
    <h2 class="top_legalidades">11. Compromiso de calidad</h2>
    <p>
      En Correos Express, cada reclamación es una oportunidad de mejora. Analizamos sistemáticamente todas las incidencias para identificar áreas de mejora en nuestros procesos, formación del personal y sistemas de calidad.
    </p>
    <p>
      Nuestro compromiso es ofrecer:
    </p>
    <ul>
      <li>✓ Respuesta rápida y personalizada a cada reclamación</li>
      <li>✓ Investigación exhaustiva de cada caso</li>
      <li>✓ Comunicación transparente durante todo el proceso</li>
      <li>✓ Resolución justa según la normativa vigente</li>
      <li>✓ Mejora continua de nuestros servicios basada en su feedback</li>
    </ul>

    <p>
      Su satisfacción es nuestra prioridad. Gracias por confiar en Correos Express.
    </p>

    <br>
    <p style="font-style: italic; opacity: 0.9;">
      <strong>Para más información sobre nuestros servicios, consulte:</strong>
    </p>
    <ul style="opacity: 0.9;">
      <li><a href="/Legalidades/Términos-Condiciones.html">Términos y Condiciones de Servicio</a></li>
      <li><a href="/Legalidades/Avisos-Legales.html">Avisos Legales</a></li>
      <li><a href="/Legalidades/Política-Cookies.html">Política de Cookies</a></li>
      <li><a href="/Legalidades/Accesibilidad.html">Declaración de Accesibilidad</a></li>
    </ul>

    <br>
    <p style="font-style: italic; opacity: 0.9; text-align: center;">
      <strong>Correos Express - Su confianza, nuestra responsabilidad.</strong>
    </p>
  `;
  
  return container;
}