import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContentService, ClassPlan } from '../services/content';
// Se eliminó la importación del TutorialComponent descartado
import { AyudaService } from '../ayuda/ayuda.service'; 

@Component({
  selector: 'app-menu',
  standalone: true,
  // Limpiamos los imports para que no busque componentes eliminados
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent implements OnInit {
  private contentService = inject(ContentService);
  private router = inject(Router);
  private ayudaService = inject(AyudaService);

  classesPrimary: ClassPlan[] = [];
  classesSecondary: ClassPlan[] = [];

  ngOnInit() {
    // Cargamos los planes de clase de tu ContentService
    this.classesPrimary = this.contentService.getPlansByLevel('primaria');
    this.classesSecondary = this.contentService.getPlansByLevel('bachillerato');
  }

  /**
   * Activa la ayuda visual (Driver.js) llamando al servicio unificado.
   * Útil si el usuario presiona el botón (?) estando en el índice.
   */
  activarAyuda() {
    this.ayudaService.iniciarTour(true);
  }

  /**
   * Maneja el cambio de páginas internas en celulares (Primaria <-> Bachillerato).
   * Mantiene tu lógica original de animación.
   */
  voltearHojaMovil(element: HTMLElement, direccion: 'left' | 'right', reset: boolean = false) {
    const pageLeft = document.querySelector('.page-left') as HTMLElement;
    const pageRight = document.querySelector('.page-right') as HTMLElement;

    if (reset) {
      // VOLVER A PRIMARIA (Desde Bachillerato)
      if (pageRight) pageRight.classList.remove('active-mobile');
      
      setTimeout(() => {
        if (pageLeft) pageLeft.classList.remove('flip-to-right');
      }, 50);

    } else {
      // IR A BACHILLERATO (Desde Primaria)
      if (direccion === 'right') {
        element.classList.add('flip-to-right');
        
        setTimeout(() => {
          if (pageRight) pageRight.classList.add('active-mobile');
        }, 150);
      }
    }
  }

  /**
   * Navegación para las clases individuales.
   * Se activa al hacer clic en una clase del listado.
   */
  entrarAClase(ruta: string, element: HTMLElement, direccion: 'left' | 'right') {
    if (direccion === 'right') {
      element.classList.add('flip-to-right');
    } else {
      element.classList.add('flip-to-left');
    }

    // Retraso para ver el giro de la hoja antes de navegar
    setTimeout(() => {
      this.router.navigateByUrl(ruta);
    }, 1100);
  }

  /**
   * Navegación para los botones de la parte inferior (Inicio e Intro/Pilares).
   */
  salirPagina(ruta: string, element: HTMLElement, direccion: 'left' | 'right') {
    const isMobile = window.innerWidth <= 991;
    
    // Objeto para manejar parámetros de ruta (útil para Pilares Clave)
    let parametrosExtra = {};

    if (ruta === '/') {
      // LÓGICA PARA INICIO (Botón en Bachillerato / Derecha)
      element.classList.add('flip-to-left');
    } 
    else if (ruta === '/intro') {
      // LÓGICA PARA INTRO/PILARES (Botón en Primaria / Izquierda)
      if (isMobile) {
        // Configuramos el parámetro para que la Intro se abra en los pilares directamente
        parametrosExtra = { ver: 'pilares' };

        // Ocultamos la hoja de bachillerato para ver el reverso blanco de primaria al girar
        const pageRight = document.querySelector('.page-right') as HTMLElement;
        if (pageRight) {
          pageRight.classList.remove('active-mobile');
          pageRight.style.opacity = '0';
          pageRight.style.transition = 'opacity 0.2s ease';
        }
      }
      
      // La hoja de Primaria gira hacia la derecha
      element.classList.add('flip-to-right');
    }

    // Ejecutar navegación con retraso para permitir que se vea la animación del libro
    setTimeout(() => {
      if (Object.keys(parametrosExtra).length > 0) {
        // Navegación con parámetros (Móvil - Pilares Clave)
        this.router.navigate([ruta], { queryParams: parametrosExtra });
      } else {
        // Navegación normal (PC o Inicio)
        this.router.navigate([ruta]);
      }
    }, 1100);
  }
}