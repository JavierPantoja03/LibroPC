import { Component, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentService } from '../services/content';
// IMPORTANTE: Importamos el servicio de ayuda unificado
import { AyudaService } from '../ayuda/ayuda.service'; 

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './class-detail.html',
  styleUrls: ['./class-detail.css']
})
export class ClassDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private contentService = inject(ContentService);
  private sanitizer = inject(DomSanitizer);
  private ayudaService = inject(AyudaService);

  currentClass: any | undefined;
  safePdfUrl: SafeResourceUrl | undefined;
  isFullScreen: boolean = false;

  /**
   * ESCUCHADOR NATIVO DE CAMBIO DE PANTALLA COMPLETA
   * Solo actualizamos el estado visual, NO recargamos el PDF aquí
   * para evitar el error del cuadro gris al salir.
   */
  @HostListener('document:fullscreenchange')
  @HostListener('document:webkitfullscreenchange')
  @HostListener('document:mozfullscreenchange')
  @HostListener('document:MSFullscreenChange')
  onFullScreenChange() {
    this.isFullScreen = !!(
      document.fullscreenElement || 
      (document as any).webkitFullscreenElement || 
      (document as any).mozFullScreenElement ||
      (document as any).msFullscreenElement
    );
    
    // Si salimos de pantalla completa, no tocamos la URL para que no parpadee ni se ponga gris
    console.log("Cambio de estado FullScreen:", this.isFullScreen);
  }

  @HostListener('window:keydown.escape')
  handleEscapeKey() {
    if (this.isFullScreen) {
      this.salirDePantallaCompleta();
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.currentClass = undefined;
        const data = this.contentService.getPlanById(id);
        
        if (data) {
          this.currentClass = data;
          // Dejamos el zoom al 28% por defecto desde el inicio
          this.aplicarZoomPdf(28);
        }
      }
      
      setTimeout(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) scrollContainer.scrollTop = 0;
      }, 50);
    });
  }

  /**
   * FUNCIÓN DE ZOOM
   * @param porcentaje Por defecto 28
   */
  aplicarZoomPdf(porcentaje: number) {
    if (!this.currentClass || !this.currentClass.pdfUrl) return;

    let urlLimpia = this.currentClass.pdfUrl;
    if (urlLimpia.startsWith('/')) {
      urlLimpia = urlLimpia.substring(1);
    }

    // Construimos la URL con el zoom del 28%
    const urlConParametros = `./${urlLimpia}#zoom=${porcentaje}&navpanes=0&toolbar=1`;
    
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urlConParametros);
  }

  activarAyuda() {
    this.ayudaService.iniciarTour(true);
  }

  getSafeVideoUrl(url: string | undefined): SafeResourceUrl {
    if (!url) return this.sanitizer.bypassSecurityTrustResourceUrl('');
    let videoId = '';
    try {
      if (url.includes('v=')) {
        videoId = url.split('v=')[1].split('&')[0];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      } else {
        videoId = url.split('/').pop() || '';
      }
      const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    } catch (e) {
      return this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
  }

  /**
   * Entra en pantalla completa sin alterar la URL
   * Esto evita que el PDF se recargue y se ponga gris
   */
  verEnPantallaCompleta(element: HTMLElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen();
    } else if ((element as any).msRequestFullscreen) {
      (element as any).msRequestFullscreen();
    }
    // No llamamos a aplicarZoomPdf aquí para mantener la estabilidad
  }

  /**
   * Sale de pantalla completa
   */
  salirDePantallaCompleta() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    }
    // El PDF se mantiene tal cual estaba, evitando el cuadro gris
  }

  regresarAlMenu(element: HTMLElement) {
    const animationClass = this.currentClass?.nivel === 'bachillerato' ? 'flip-exit-right' : 'flip-exit-left';
    element.classList.add(animationClass);
    
    localStorage.setItem('continuarTutorial', 'true');

    setTimeout(() => {
      this.router.navigate(['/menu']);
    }, 1100);
  }
}