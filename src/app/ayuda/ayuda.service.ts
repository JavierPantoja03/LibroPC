import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { driver, Driver, DriveStep } from "driver.js";

@Injectable({
  providedIn: 'root'
})
export class AyudaService {
  private router = inject(Router);
  private driverObj: Driver | null = null;

  // --- DICCIONARIO DE PASOS (Textos del libro preservados y mejorados) ---
  private pasosPorRuta: { [key: string]: DriveStep[] } = {
    // 1. PORTADA / INICIO
    '/': [
      { 
        element: '.character-circle', 
        popover: { title: '👋 ¡Hola!', description: 'Soy tu asistente virtual y te acompañaré en este recorrido para que sea muy agradable para ti.', side: "right" }
      },
      { 
        element: '#btn-metadatos', 
        popover: { title: '📂 Información', description: 'Aquí conocerás a los autores de este libro y verás los metadatos de este trabajo de grado.', side: "right" }
      },
      { 
        element: '#btn-manual', 
        popover: { title: '📖 Manual de Usuario', description: 'Haz clic aquí para ver el manual de uso del libro interactivo en formato PDF.', side: "right" }
      },
      { 
        element: '.boton-voz-fijo', 
        popover: { title: '🔊 Asistente de Voz', description: 'Si prefieres escuchar, pulsa este botón y yo leeré el contenido de la página por ti.', side: "left" }
      },
      { 
        element: '.boton-tutorial-fijo', 
        popover: { title: '❓ Ayuda Visual', description: '¿Necesitas una explicación de la página? Pulsa este botón cuando quieras ver este tutorial de nuevo.', side: "left" }
      },
      { 
        // PASO DEL CHATBOT: Ajustado para capturar el botón morado de Botpress v3.6
        element: '#bp-web-widget-container, .bpw-widget-btn, iframe[aria-label="Botpress Webchat Badge"]', 
        popover: { 
          title: '🤖 Chat Inteligente', 
          description: 'Gracias a una tecnología llamada Botpress, puedo responder tus preguntas si escribes en el chat de abajo.', 
          side: "left",
          align: 'end'
        },
        // Mantenemos tus espacios y forzamos la visibilidad solo aquí
        onHighlightStarted: (element) => {
          if (element) {
            const el = element as HTMLElement;
            el.style.setProperty('display', 'block', 'important');
            el.style.setProperty('visibility', 'visible', 'important');
            el.style.setProperty('opacity', '1', 'important');
            // Z-index para que resalte sobre el overlay azul
            el.style.setProperty('z-index', '2147483647', 'important');
          }
        },
        onDeselected: (element) => {
          if (element) {
            const el = element as HTMLElement;
            el.style.setProperty('display', 'none', 'important');
          }
        }
      },
      { 
        element: '#btn-abrir', 
        popover: { title: '🚀 ¡Empieza!', description: 'Haz clic aquí para abrir el libro y activar todas las funciones interactivas.', side: "top" }
      }
    ],
    // 2. INTRODUCCIÓN
    '/intro': [
      { element: '#tour-intro', popover: { title: '🚀 Introducción', description: 'Aquí verás el tema principal: Pensamiento Computacional.', side: "bottom" }},
      { element: '.narracion-corta', popover: { title: '💭 Reflexiona', description: 'Mira lo que nuestra amiguita está pensando sobre la lógica.', side: "top" }},
      { element: '#seccion-pilares', popover: { title: '💎 Los 4 Pilares', description: 'Explora las bases: Descomposición, Patrones, Abstracción y Algoritmos.', side: "top" }},
      { element: '#tour-indice', popover: { title: '📋 Navegación', description: '¡Listo! Ve al listado de tus clases aquí.', side: "top" }}
    ],
    // 3. MENÚ DE CLASES
    '/menu': [
      { element: '#tour-primaria', popover: { title: '🎒 Primaria', description: 'Clases pensadas para las niñas de grados 4° y 5°.', side: "right" }},
      { element: '#tour-bachillerato', popover: { title: '🏫 Bachillerato', description: 'Retos más avanzados para grados 7° y 8°.', side: "left" }}
    ],
    // 4. DETALLE DE CLASE
    'clase': [
      { 
        element: '#tour-clase-header', 
        popover: { title: '📖 Lección Actual', description: 'Aquí verás el título y el tema de la clase seleccionada.', side: "bottom" } 
      },
      { 
        element: '#tour-pdf', 
        popover: { title: '📋 Actividades', description: 'Sigue el paso a paso de la actividad en este gráfico interactivo o visor de PDF.', side: "top" } 
      },
      { 
        element: '#tour-dimensiones', 
        popover: { title: '⚙️ Enfoque Tripartita', description: 'Aquí explicamos los Conceptos, Prácticas y Perspectivas que desarrollarás en esta clase.', side: "top" } 
      },
      { 
        element: '#tour-curriculo', 
        popover: { title: '🏫 Articulación Curricular', description: 'Conexión con el Plan de Área Goretti y Lineamientos Nacionales.', side: "top" } 
      },
      { 
        element: '#tour-video', 
        popover: { title: '📺 Apoyo Audiovisual', description: 'Mira este video para reforzar lo aprendido en la guía.', side: "top" } 
      },
      { 
        element: '#tour-boton-volver', 
        popover: { title: '⬅ Regresar', description: '¿Terminaste? Regresa al menú principal para explorar más clases.', side: "right" } 
      }
    ]
  };

  /**
   * Método principal para iniciar el tour.
   */
  public iniciarTour(forzado: boolean = false) {
    if (typeof window === 'undefined') return;

    if (this.driverObj) {
      this.driverObj.destroy();
    }

    const urlActual = this.router.url.split('?')[0];
    const esPortada = urlActual === '/' || urlActual === '' || urlActual === '/home';
    const haVistoTutorial = localStorage.getItem('tutorialSaltado');

    if (esPortada && !haVistoTutorial) {
      forzado = true;
    }

    if (haVistoTutorial === 'true' && !forzado) {
      return;
    }

    let rutaKey = esPortada ? '/' : urlActual;
    if (urlActual.includes('/clase/')) rutaKey = 'clase';

    const pasos = this.pasosPorRuta[rutaKey] || this.pasosPorRuta['/'];

    this.driverObj = driver({
      showProgress: true,
      animate: true,
      smoothScroll: true,
      nextBtnText: 'Sig. →',
      prevBtnText: '← Atrás',
      doneBtnText: '¡Listo! 🎓',
      overlayColor: '#1a237ecc',
      stagePadding: 10, // Aumentamos un poco el padding para que no se vea apretado
      allowClose: true,
      onCloseClick: () => {
        localStorage.setItem('tutorialSaltado', 'true');
        this.driverObj?.destroy();
      },
      onDestroyed: () => {
        if (rutaKey === '/' || rutaKey === '/intro' || rutaKey === '/menu') {
          localStorage.setItem('continuarTutorial', 'true');
        }
      }
    });

    this.driverObj.setSteps(pasos);

    // Delay de 400ms para asegurar que el bot morado esté listo
    setTimeout(() => {
      try {
        window.dispatchEvent(new Event('resize'));
        this.driverObj?.drive();
      } catch (error) {
        console.warn("Error al lanzar tour:", error);
      }
    }, 400); 
  }
}