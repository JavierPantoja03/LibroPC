import { Component, signal, inject, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// Importamos el servicio unificado que ya tiene todos los focos (incluyendo el manual y herramientas)
import { AyudaService } from './ayuda/ayuda.service'; 

declare global {
  interface Window {
    botpressWebChat: any;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('ambiente-pensamiento-computacional');
  private router = inject(Router);
  private ayudaService = inject(AyudaService); 
  
  protected estaSonando = signal(false);
  private bienvenidaDada = false; 
  private audioPlayer = new Audio();

  ngOnInit() {
    this.audioPlayer.onended = () => this.estaSonando.set(false);

    // --- CORRECCIÓN CLAVE: DISPARO INICIAL ---
    // Lanzamos la verificación inmediatamente al cargar el componente
    this.verificarLanzamientoAutomatico();

    // 1. Manejo de audio y tutorial al navegar entre páginas
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Si el audio estaba activo, lo actualizamos según la nueva página
      if (this.estaSonando()) {
        setTimeout(() => this.gestionarLecturaPorContexto(), 500);
      }
      
      // 2. LANZAR TUTORIAL AUTOMÁTICO AL CAMBIAR DE RUTA
      this.verificarLanzamientoAutomatico();
    });
  }

  // Limpieza de audio al cerrar la aplicación para evitar fugas de memoria
  ngOnDestroy() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer.src = '';
    }
  }

  /**
   * Lógica de persistencia: decide si el tutorial sale solo o no.
   */
  private verificarLanzamientoAutomatico() {
    const saltado = localStorage.getItem('tutorialSaltado');
    const continuar = localStorage.getItem('continuarTutorial');
    const urlActual = this.router.url;

    // --- MEJORA SOLICITADA: BLOQUEO EN PORTADA ---
    // Si la URL es la raíz (portada), NO lanzamos la ayuda automática.
    // Esto permite que solo se vea el anuncio de bienvenida.
    if (urlActual === '/' || urlActual === '') {
      console.log("Modo Portada: Ayuda automática desactivada para mostrar anuncio de bienvenida.");
      return;
    }

    // Si NO lo ha saltado (primera vez) O si tiene la bandera de flujo continuo activa
    if (saltado !== 'true' || continuar === 'true') {
      // Ajuste de tiempos para que la carga visual en las demás páginas sea fluida
      const tiempoEspera = 1200;
      
      setTimeout(() => {
        // Llamamos al servicio centralizado para disparar los pasos de la página actual
        this.ayudaService.iniciarTour(false);
        
        // Limpiamos la bandera de continuación para que no se repita infinitamente
        localStorage.removeItem('continuarTutorial');
      }, tiempoEspera); 
    }
  }

  // --- ASISTENTE DE VOZ (Lógica pedagógica para estudiantes) ---
  leerPagina() {
    if (this.estaSonando()) {
      this.desactivarConDespedida();
      return; 
    }
    this.estaSonando.set(true);
    
    // Bienvenida especial solo si está en la portada y es la primera vez que activa audio
    if (!this.bienvenidaDada && (this.router.url === '/' || this.router.url === '')) {
      this.reproducirMp3('assets/audio/bienvenida_portada.mp3');
      this.bienvenidaDada = true;
    } else {
      this.gestionarLecturaPorContexto();
    }
  }

  private gestionarLecturaPorContexto() {
    if (!this.estaSonando()) return; 
    const urlActual = this.router.url;
    
    // Selección de pistas según la sección del OVA
    if (urlActual.includes('menu')) this.reproducirMp3('assets/audio/menu_clases.mp3');
    else if (urlActual.includes('intro')) this.reproducirMp3('assets/audio/introduccion_pilares.mp3');
    else if (urlActual.includes('clase')) this.reproducirMp3('assets/audio/detalle_clase.mp3');
    else if (urlActual === '/' || urlActual === '') this.reproducirMp3('assets/audio/bienvenida_portada.mp3');
  }

  private reproducirMp3(ruta: string) {
    this.audioPlayer.src = ruta;
    this.audioPlayer.load(); // Asegura la carga del nuevo recurso
    this.audioPlayer.play().catch((err) => {
      console.warn("Audio bloqueado por el navegador o no encontrado:", ruta);
      this.estaSonando.set(false);
    });
  }

  private desactivarConDespedida() {
    this.audioPlayer.pause();
    this.audioPlayer.src = 'assets/audio/asistente_desactivado.mp3';
    this.audioPlayer.play().catch(() => this.estaSonando.set(false));
    this.estaSonando.set(false);
  }

  /**
   * Función vinculada al botón (?) del HTML flotante.
   * Permite reiniciar la guía visual en cualquier momento.
   */
  comenzarGuia(forzado: boolean = true) {
    // Si hay audio sonando, lo pausamos para que la niña se concentre en el tutorial
    this.audioPlayer.pause();
    this.estaSonando.set(false);
    
    // Iniciamos el tour forzado (ignora si ya se marcó como saltado)
    this.ayudaService.iniciarTour(forzado);
  }
}