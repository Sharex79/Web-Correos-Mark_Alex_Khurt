export function TerminosCondiciones() {
  const container = document.createElement('div');
  container.className = 'container margen-navbar';
  container.id = 'contenido-terminos';
  
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
    <h1 class="Inicio-Informacion top_legalidades">Términos y Condiciones de Servicio</h1>
    <p><b>Última actualización: 10 de noviembre de 2025</b></p>

    <p>
      Bienvenido a nuestro despacho de abogados. Al acceder y utilizar nuestro sitio web y contratar nuestros servicios profesionales, usted acepta cumplir con estos Términos y Condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no utilice nuestros servicios.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">1. Ámbito de aplicación y servicios</h2>
    <p>
      Estos términos regulan la prestación de servicios jurídicos profesionales, incluyendo asesoramiento legal, representación judicial, consultoría jurídica y demás servicios propios del ejercicio de la abogacía. Todos nuestros servicios se prestan conforme a la normativa colegial y deontológica aplicable.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">2. Relación profesional cliente-abogado</h2>
    <p>
      La relación profesional se formaliza mediante la aceptación expresa del encargo por parte del letrado y la firma del correspondiente contrato de servicios profesionales. Esta relación está sujeta al secreto profesional y a las normas deontológicas del Colegio de Abogados.
    </p>
    <p>
      Para el inicio de cualquier actuación profesional, será necesario que el cliente proporcione toda la documentación e información relevante para el caso, así como el abono de las provisiones de fondos que se estipulen.
    </p>
    <p>
      El tratamiento de sus datos personales se realizará conforme a la normativa de protección de datos vigente.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">3. Honorarios profesionales</h2>
    <p>
      Los honorarios profesionales se determinarán conforme al baremo orientativo del Colegio de Abogados, la complejidad del asunto, el tiempo empleado y el resultado obtenido. En todo caso, se informará previamente al cliente del coste estimado de los servicios.
    </p>
    <p>
      Los honorarios devengados serán exigibles una vez prestado el servicio profesional. Los gastos y suplidos generados en el ejercicio de la defensa correrán por cuenta del cliente, salvo pacto en contrario.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">4. Obligaciones del cliente</h2>
    <p>
      El cliente se compromete a proporcionar información veraz y completa, facilitar toda la documentación necesaria, comunicar cualquier circunstancia relevante para el caso y abonar los honorarios y gastos conforme a lo acordado.
    </p>
    <p>
      El cliente deberá mantener informado al despacho de cualquier cambio en sus datos de contacto y colaborar activamente en el desarrollo de las actuaciones profesionales.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">5. Limitaciones de responsabilidad</h2>
    <p>
      La responsabilidad profesional se limita a la actuación diligente conforme a la lex artis y las normas deontológicas. No se garantizan resultados específicos, dado que el éxito de las actuaciones jurídicas depende de múltiples factores externos.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">6. Confidencialidad y secreto profesional</h2>
    <p>
      Todos los asuntos tratados están protegidos por el secreto profesional del abogado, conforme al artículo 437 de la Ley Orgánica del Poder Judicial y las normas deontológicas colegiales. Esta obligación perdura incluso después de finalizada la relación profesional.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">7. Finalización del encargo</h2>
    <p>
      La relación profesional podrá finalizar por cumplimiento del encargo, mutuo acuerdo, renuncia justificada del letrado o revocación por parte del cliente. En caso de finalización anticipada, se liquidarán los honorarios proporcionalmente a los servicios prestados.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">8. Propiedad intelectual</h2>
    <p>
      Todos los documentos, informes y dictámenes elaborados por el despacho son propiedad intelectual del mismo. El cliente tendrá derecho al uso de los mismos para los fines del encargo, pero no podrá reproducirlos o divulgarlos sin autorización.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">9. Resolución de conflictos</h2>
    <p>
      Cualquier discrepancia relacionada con los servicios profesionales podrá someterse a los mecanismos de resolución de conflictos establecidos por el Colegio de Abogados o, en su caso, a la jurisdicción ordinaria.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">10. Modificaciones de los términos</h2>
    <p>
      Estos términos podrán ser modificados para adaptarse a cambios normativos o mejoras en la prestación de servicios. Las modificaciones se comunicarán a los clientes con la debida antelación.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">11. Legislación aplicable y jurisdicción</h2>
    <p>
      Estos términos se rigen por la legislación española, especialmente por la Ley Orgánica del Poder Judicial, el Estatuto General de la Abogacía y las normas deontológicas colegiales. Para cualquier controversia, serán competentes los tribunales del domicilio del despacho.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">12. Protección de datos y comunicaciones</h2>
    <p>
      El tratamiento de datos personales se realizará conforme al Reglamento General de Protección de Datos (RGPD) y la normativa nacional aplicable.
    </p>
    <p>
      Las comunicaciones electrónicas entre el despacho y el cliente se considerarán válidas cuando se realicen a través de los medios habilitados y confirmados por ambas partes.
    </p>

    <br>
    <hr />
    <h2 class="top_legalidades">13. Contacto</h2>
    <p class="FinalLegalidades">
      Para cualquier consulta sobre estos términos o nuestros servicios profesionales, puede contactarnos en <a href="mailto:luraproyecto@gmail.com">luraproyecto@gmail.com</a> o llamarnos al 613 95 96 89. Horario de atención: Lunes a Viernes de 9:00h a 18:00h.
    </p>
  `;
  
  return container;
}
