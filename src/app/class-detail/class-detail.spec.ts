import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Para el ActivatedRoute
import { ClassDetailComponent } from './class-detail'; // <--- CAMBIADO: Agregamos 'Component'
import { ContentService } from '../services/content'; // Importa tu servicio

describe('ClassDetailComponent', () => {
  let component: ClassDetailComponent;
  let fixture: ComponentFixture<ClassDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Al ser standalone, ClassDetailComponent va en imports
      imports: [ClassDetailComponent],
      providers: [
        provideRouter([]), // Esto arregla el error de ActivatedRoute
        ContentService     // Esto provee el servicio de contenido
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Importante para que ejecute el ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});