import { Component, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentService } from '../services/content';
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
  isFullScreen: boolean = false;

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
        // Obtenemos el plan completo desde el servicio.
        // El servicio ya se encarga de asignar los 'links' correctos (primaria o bachillerato)
        this.currentClass = this.contentService.getPlanById(id);
      }
      
      setTimeout(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) scrollContainer.scrollTop = 0;
      }, 50);
    });
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
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`);
    } catch (e) {
      return this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
  }

  verEnPantallaCompleta(element: HTMLElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen();
    } else if ((element as any).msRequestFullscreen) {
      (element as any).msRequestFullscreen();
    }
  }

  salirDePantallaCompleta() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    }
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