import { Component, inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements AfterViewInit {
  private router = inject(Router);

  // Referencia al video de la niña saludando en la portada (I.E.M. María Goretti)
  @ViewChild('videoSaludo') videoRef!: ElementRef<HTMLVideoElement>;
  
  // Referencia al video de introducción (Banner inicial)
  @ViewChild('introVideo') introVideoRef!: ElementRef<HTMLVideoElement>;

  // --- VARIABLES DE ESTADO ---
  isOpened: boolean = false;            // Animación 3D de apertura del cuaderno
  mostrarMetadatos: boolean = false;    // Modal de identificación del proyecto
  
  // Flujo inicial: Primero video, luego bienvenida
  mostrarVideoIntro: boolean = true;    // Inicia en true para mostrar el banner de video primero
  mostrarBienvenida: boolean = false;   // Inicia en false hasta que finalice el video
  videoReproduciendo: boolean = false;  // Controla el botón de play en el banner

  ngAfterViewInit() {
    // Configuración del video circular de la niña saludando
    if (this.videoRef) {
      this.videoRef.nativeElement.muted = true;
      this.videoRef.nativeElement.playsInline = true;
      this.videoRef.nativeElement.play().catch(error => {
        console.warn('El autoplay del saludo fue bloqueado:', error);
      });
    }
  }

  // --- MÉTODOS PARA EL BANNER DE VIDEO INTRODUCTORIO ---

  /**
   * Inicia la reproducción del video videointro.mp4
   */
  reproducirVideo() {
    if (this.introVideoRef) {
      this.introVideoRef.nativeElement.play();
      this.videoReproduciendo = true;
    }
  }

  /**
   * Salta o finaliza el video para mostrar el anuncio de bienvenida
   */
  finalizarVideo() {
    if (this.introVideoRef) {
      this.introVideoRef.nativeElement.pause();
    }
    this.mostrarVideoIntro = false;
    this.mostrarBienvenida = true; // Activa el overlay de bienvenida
  }

  // --- MÉTODOS DE INTERACCIÓN DE PORTADA ---

  /**
   * Cierra el anuncio de bienvenida del explorador
   */
  cerrarBienvenida() {
    this.mostrarBienvenida = false;
  }

  /**
   * Alterna el modal de metadatos del proyecto de grado
   */
  toggleMetadatos() {
    this.mostrarMetadatos = !this.mostrarMetadatos;
  }

  /**
   * Ejecuta la animación de apertura del libro y navega a la siguiente sección
   */
  abrirLibro() {
    if (this.isOpened) return;
    this.isOpened = true;
    
    // Marca para el tutorial del Ambiente de Aprendizaje
    localStorage.setItem('continuarTutorial', 'true');

    // Espera a que termine la animación del lomo de 25px
    setTimeout(() => {
      this.router.navigate(['/intro']);
    }, 1400);
  }
}