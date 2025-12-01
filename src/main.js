// ==========================================
//              MAIN.JS - ORQUESTADOR
//              Solo importa y organiza
// ==========================================

// Importar todos los componentes
import { Navbar } from './components/navbar.js';
import { FotoInicial } from './components/fotoInicial.js';
import { Presentacion } from './components/presentacion.js';
import { Explicacion } from './components/explicacion.js';
import { BotonesRespuestas } from './components/botonesRespuestas.js';
import { Footer } from './components/footer.js';
import { BotonVerde } from './components/botonwhatsapp.js';
import { DireccionNueva } from './components/direccionNueva.js';
import { EmpanadaBanner } from './components/EmpanadaBanner.js';
import { Contacto } from './components/Formulario.js';
import { renderAccesibilidad } from './components/Legalidades/Accesibilidad.js';
import { AvisosLegales } from './components/Legalidades/AvisosLegales.js';
import { PoliticaCookies } from './components/Legalidades/PoliticaCookies.js';
import { TerminosCondiciones } from './components/Legalidades/TerminosCondiciones.js';
import { renderReclamos } from './components/Legalidades/Reclamos.js';
import { Feedback } from './components/Feedback.js';
import { Navbar as NavbarVolver } from './components/navbarVolver.js';



// Crear contenedor principal para el contenido
const mainContent = document.createElement('main');
mainContent.style.cssText = `
  margin-top: 90px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(100vh - 90px);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

// Agregar todas las secciones al contenedor principal
// Orden lógico: Foto inicial → Presentación → Explicación → Botones respuestas
mainContent.append(
  EmpanadaBanner(),
  FotoInicial(),        // � Foto inicial - Hero principal
  Presentacion(),       // 👨‍💼 Presentación - Perfil del procurador
  Explicacion(),        // 🌱 Explicación - Servicios legales mosaico
  BotonesRespuestas(),  // ❓ Botones respuestas - FAQ acordeones
  DireccionNueva(),     // 📍 Dirección
  BotonVerde(),         // 📱 Botón WhatsApp

);

// Agregar la navbar, contenido principal y footer al body
document.body.append(
  Navbar(),      // Navbar fija en la parte superior
  mainContent,   // Contenido principal con todas las secciones
  Footer()       // Footer elegante con 75% ancho
);

// ==========================================
//    FUNCIÓN GLOBAL PARA MOSTRAR FORMULARIO
// ==========================================
window.mostrarFormulario = function() {
  // ELIMINAR completamente el contenido del main del DOM con transición
  const existingMain = document.querySelector('main');
  if (existingMain && existingMain.parentNode) {
    existingMain.style.opacity = '0';
    existingMain.style.transform = 'translateY(-20px)';
    setTimeout(() => existingMain.remove(), 500);
  }
  
  // ELIMINAR completamente el footer del DOM con transición
  const footer = document.querySelector('footer');
  if (footer && footer.parentNode) {
    footer.style.opacity = '0';
    setTimeout(() => footer.remove(), 500);
  }
  
  // ELIMINAR el botón de WhatsApp/contacto flotante
  const botonFlotante = document.querySelector('.boton-contacto');
  if (botonFlotante && botonFlotante.parentNode) {
    botonFlotante.remove();
  }
  
  // ELIMINAR cualquier contenedor de legalidades previo
  const legalidadContainer = document.getElementById('legalidad-container');
  if (legalidadContainer && legalidadContainer.parentNode) {
    legalidadContainer.style.opacity = '0';
    setTimeout(() => legalidadContainer.remove(), 500);
  }
  
  // Crear el contenedor del formulario con transición
  setTimeout(() => {
    let formularioContainer = document.getElementById('formulario-container');
    if (!formularioContainer) {
      formularioContainer = document.createElement('div');
      formularioContainer.id = 'formulario-container';
      formularioContainer.style.cssText = `
        margin-top: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        min-height: calc(100vh - 90px);
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      `;
      
      // Agregar el formulario
      formularioContainer.appendChild(Contacto());
      
      // Insertar después del navbar
      const navbar = document.querySelector('nav');
      navbar.after(formularioContainer);
      
      // Animar entrada
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          formularioContainer.style.opacity = '1';
          formularioContainer.style.transform = 'translateY(0)';
        });
      });
    }
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 550);
};

// ==========================================
//  FUNCIÓN GLOBAL PARA MOSTRAR LEGALIDADES
// ==========================================
window.mostrarLegalidad = function(tipo) {
  // ELIMINAR completamente el contenido del main del DOM con transición
  const existingMain = document.querySelector('main');
  if (existingMain && existingMain.parentNode) {
    existingMain.style.opacity = '0';
    existingMain.style.transform = 'translateY(-20px)';
    setTimeout(() => existingMain.remove(), 500);
  }
  
  // ELIMINAR el footer con transición
  const existingFooter = document.querySelector('footer');
  if (existingFooter && existingFooter.parentNode) {
    existingFooter.style.opacity = '0';
    existingFooter.style.transform = 'translateY(-20px)';
    setTimeout(() => existingFooter.remove(), 500);
  }
  
  // ELIMINAR el botón de WhatsApp/contacto flotante
  const botonFlotante = document.querySelector('.boton-contacto');
  if (botonFlotante && botonFlotante.parentNode) {
    botonFlotante.remove();
  }
  
  // ELIMINAR cualquier contenedor de formulario previo
  const formularioContainer = document.getElementById('formulario-container');
  if (formularioContainer && formularioContainer.parentNode) {
    formularioContainer.style.opacity = '0';
    setTimeout(() => formularioContainer.remove(), 500);
  }
  
  // Crear el contenedor de legalidad con transición
  setTimeout(() => {
    let legalidadContainer = document.getElementById('legalidad-container');
    if (!legalidadContainer) {
      legalidadContainer = document.createElement('div');
      legalidadContainer.id = 'legalidad-container';
      legalidadContainer.style.cssText = `
        margin-top: 90px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: calc(100vh - 90px);
        padding: 2rem 1rem;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      `;
    } else {
      // Limpiar contenido previo
      legalidadContainer.innerHTML = '';
    }
    
    // Agregar el componente legal correspondiente
    let componenteLegal;
    switch(tipo) {
      case 'accesibilidad':
        componenteLegal = renderAccesibilidad();
        break;
      case 'avisos-legales':
        componenteLegal = AvisosLegales();
        break;
      case 'politica-cookies':
        componenteLegal = PoliticaCookies();
        break;
      case 'terminos-condiciones':
        componenteLegal = TerminosCondiciones();
        break;
      case 'reclamos':
        componenteLegal = renderReclamos();
        break;
      default:
        console.error('Tipo de legalidad desconocido:', tipo);
        return;
    }
    
    legalidadContainer.appendChild(componenteLegal);
    
    // Insertar después del navbar
    const navbar = document.querySelector('nav');
    navbar.after(legalidadContainer);
    
    // Crear footer nuevo
    const newFooter = Footer();
    newFooter.style.opacity = '0';
    newFooter.style.transform = 'translateY(20px)';
    newFooter.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    legalidadContainer.after(newFooter);
    
    // Animar entrada del contenedor y footer
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        legalidadContainer.style.opacity = '1';
        legalidadContainer.style.transform = 'translateY(0)';
        newFooter.style.opacity = '1';
        newFooter.style.transform = 'translateY(0)';
      });
    });
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 550);
};

// ==========================================
//    FUNCIÓN PARA VOLVER AL INICIO (SMOOTH)
// ==========================================
window.volverAlInicio = function() {
  // Quitar NavbarVolver si existe y restaurar la principal
  const volverNav = document.querySelector('nav[data-variant="volver"]');
  if (volverNav && volverNav.parentNode) {
    volverNav.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    volverNav.style.opacity = '0';
    volverNav.style.transform = 'translateY(-10px)';
    setTimeout(() => volverNav.remove(), 300);
  }
  const mainNav = document.querySelector('nav:not([data-variant])');
  if (mainNav) {
    mainNav.style.display = '';
    mainNav.style.opacity = '1';
    mainNav.style.transform = 'none';
  } else {
    // Por seguridad, crearla si no existe
    document.body.prepend(Navbar());
  }
  // Eliminar el formulario con transición
  const formularioContainer = document.getElementById('formulario-container');
  if (formularioContainer && formularioContainer.parentNode) {
    formularioContainer.style.opacity = '0';
    formularioContainer.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      formularioContainer.remove();
    }, 500);
  }
  
  // Eliminar el contenedor de legalidades con transición
  const legalidadContainer = document.getElementById('legalidad-container');
  if (legalidadContainer && legalidadContainer.parentNode) {
    legalidadContainer.style.opacity = '0';
    legalidadContainer.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      legalidadContainer.remove();
    }, 500);
  }
  
  // Eliminar footer existente si hay (para evitar duplicados)
  const existingFooter = document.querySelector('footer');
  if (existingFooter && existingFooter.parentNode) {
    existingFooter.style.opacity = '0';
    setTimeout(() => {
      existingFooter.remove();
    }, 500);
  }
  
  // Restaurar el main con transición suave
  setTimeout(() => {
    if (!document.querySelector('main')) {
      // Recrear el main content
      const newMainContent = document.createElement('main');
      newMainContent.style.cssText = `
        margin-top: 90px;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: calc(100vh - 90px);
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      `;
      
      // Agregar todas las secciones
      newMainContent.append(
        EmpanadaBanner(),
        FotoInicial(),
        Presentacion(),
        Explicacion(),
        BotonesRespuestas(),
        DireccionNueva(),
        BotonVerde()
      );
      
      // Insertar en el DOM
      const navbar = document.querySelector('nav');
      navbar.after(newMainContent);
      
      // Crear footer nuevo
      const newFooter = Footer();
      newFooter.style.opacity = '0';
      newFooter.style.transition = 'opacity 0.5s ease';
      newMainContent.after(newFooter);
      
      // Animar entrada del main
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          newMainContent.style.opacity = '1';
          newMainContent.style.transform = 'translateY(0)';
          // Animar footer también
          newFooter.style.opacity = '1';
        });
      });
    }
    
    // Scroll suave al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 550);
};

// ==========================================
//        FUNCIÓN PARA MOSTRAR FEEDBACK
//    (Mismo patrón de animaciones que legal)
// ==========================================
window.mostrarFeedback = function() {
  // Ocultar el main
  const existingMain = document.querySelector('main');
  if (existingMain && existingMain.parentNode) {
    existingMain.style.opacity = '0';
    existingMain.style.transform = 'translateY(-20px)';
    setTimeout(() => existingMain.remove(), 500);
  }

  // Ocultar footer
  const existingFooter = document.querySelector('footer');
  if (existingFooter && existingFooter.parentNode) {
    existingFooter.style.opacity = '0';
    existingFooter.style.transform = 'translateY(-20px)';
    setTimeout(() => existingFooter.remove(), 500);
  }

  // Quitar botón flotante
  const botonFlotante = document.querySelector('.boton-contacto');
  if (botonFlotante && botonFlotante.parentNode) {
    botonFlotante.remove();
  }

  // Quitar otros contenedores
  const formularioContainer = document.getElementById('formulario-container');
  if (formularioContainer && formularioContainer.parentNode) {
    formularioContainer.style.opacity = '0';
    setTimeout(() => formularioContainer.remove(), 500);
  }
  const legalidadContainer = document.getElementById('legalidad-container');
  if (legalidadContainer && legalidadContainer.parentNode) {
    legalidadContainer.style.opacity = '0';
    setTimeout(() => legalidadContainer.remove(), 500);
  }

  // Intercambiar Navbar principal por NavbarVolver
  const mainNav = document.querySelector('nav:not([data-variant])');
  if (mainNav) {
    mainNav.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    mainNav.style.opacity = '0';
    mainNav.style.transform = 'translateY(-10px)';
    setTimeout(() => { mainNav.style.display = 'none'; }, 300);
  }
  if (!document.querySelector('nav[data-variant="volver"]')) {
    const volverNav = NavbarVolver();
    document.body.prepend(volverNav);
  }

  // Crear contenedor de feedback
  setTimeout(() => {
    let feedbackContainer = document.getElementById('feedback-container');
    if (!feedbackContainer) {
      feedbackContainer = document.createElement('div');
      feedbackContainer.id = 'feedback-container';
      feedbackContainer.style.cssText = `
        margin-top: 90px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: calc(100vh - 90px);
        padding: 2rem 1rem;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      `;
    } else {
      feedbackContainer.innerHTML = '';
    }

    // Añadir Empanada + Feedback
    feedbackContainer.appendChild(EmpanadaBanner());
    feedbackContainer.appendChild(Feedback());

    // Insertar tras la navbar visible
    const navVisible = document.querySelector('nav[data-variant="volver"]') || document.querySelector('nav');
    navVisible.after(feedbackContainer);

    // Footer nuevo
    const newFooter = Footer();
    newFooter.style.opacity = '0';
    newFooter.style.transform = 'translateY(20px)';
    newFooter.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    feedbackContainer.after(newFooter);

    // Animaciones
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        feedbackContainer.style.opacity = '1';
        feedbackContainer.style.transform = 'translateY(0)';
        newFooter.style.opacity = '1';
        newFooter.style.transform = 'translateY(0)';
      });
    });

    // Scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 550);
};

// Disparar feedback por hash
if (window.location.hash === '#feedback') {
  setTimeout(() => window.mostrarFeedback(), 100);
}
