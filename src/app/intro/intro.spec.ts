import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IntroComponent } from './intro';
import { AyudaService } from '../ayuda/ayuda.service'; // Ruta corregida

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IntroComponent,
        RouterTestingModule
      ],
      providers: [
        {
          // Simulamos el servicio para que el test no intente ejecutar Driver.js
          provide: AyudaService,
          useValue: { iniciarTour: () => {} } 
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener el estado inicial de mostrarPilar en 0', () => {
    expect(component.mostrarPilar).toBe(0);
  });
});