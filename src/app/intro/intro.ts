import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// Se usa únicamente el servicio unificado
import { AyudaService } from '../ayuda/ayuda.service'; 

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './intro.html',
  styleUrls: ['./intro.css']
})
export class IntroComponent implements OnInit {
  private router = inject(Router);
  private ayudaService = inject(AyudaService);

  // --- VARIABLES DE ESTADO ---
  isFlippedMobile = false; 
  isExiting = false;      
  isGoingBack = false;    
  
  /**
   * 0: Cerrado | 1: Descomposición | 2: Patrones | 3: Abstracción | 4: Algoritmos
   */
  public mostrarPilar: number = 0; 

  // --- CICLO DE VIDA ---

  ngOnInit() {
    // El lanzamiento automático lo gestiona app.ts al detectar NavigationEnd
    console.log("Sección de Introducción lista.");
  }

  // --- MÉTODOS DE AYUDA Y NAVEGACIÓN ---

  /**
   * Activa la ayuda visual (Driver.js) llamando al servicio.
   * Usado para el botón (?) de la barra de herramientas.
   */
  activarAyuda() {
    if (this.isFlippedMobile) {
      this.isFlippedMobile = false;
      setTimeout(() => {
        this.ayudaService.iniciarTour(true); 
      }, 600);
    } else {
      this.ayudaService.iniciarTour(true);
    }
  }

  /**
   * Controla los modales de los 4 pilares.
   */
  togglePilar(pilarIndex: number) {
    this.mostrarPilar = pilarIndex;
    
    if (pilarIndex !== 0) {
      const wrapper = document.querySelector('.content-wrapper');
      if (wrapper) (wrapper as HTMLElement).scrollTop = 0;
    }
  }

  /**
   * Efecto flip para lectura en móviles.
   */
  cambiarPaginaMobile(valor: boolean) {
    this.isFlippedMobile = valor;
    
    setTimeout(() => {
      const containers = document.querySelectorAll('.scroll-container, .content-wrapper');
      containers.forEach(c => (c as HTMLElement).scrollTop = 0);
    }, 100);
  }

  /**
   * Navegación controlada con estados de animación.
   * Corregido para aceptar parámetros opcionales de giro físico.
   */
  salirPagina(destino: string, pageElement?: HTMLElement, direccion?: string) {
    // 1. Activamos los estados de animación para las clases CSS
    if (destino === 'inicio') {
      this.isGoingBack = true; 
    } else if (destino === 'menu') {
      this.isExiting = true; 
    }

    // 2. Si recibimos la referencia de la hoja y la dirección, aplicamos el giro físico
    if (pageElement && direccion) {
      const claseGiro = direccion === 'right' ? 'flip-to-right' : 'flip-to-left';
      pageElement.classList.add(claseGiro);
    }

    // 3. Esperamos a que la animación termine antes de navegar
    // Aumentamos a 1000ms para que el giro se vea completo y suave
    setTimeout(() => {
      if (destino === 'inicio') {
        this.router.navigate(['/']);
      } else if (destino === 'menu') {
        this.router.navigate(['/menu']);
      }
    }, 1000);
  }
}