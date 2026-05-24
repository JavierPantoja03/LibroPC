import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Necesario para los routerLink del menú
import { MenuComponent } from './menu'; // Nombre corregido

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos el componente (standalone) y proveemos rutas vacías para el test
      imports: [MenuComponent],
      providers: [
        provideRouter([]) 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ejecuta ngOnInit y carga los datos del servicio
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load primary classes', () => {
    // Verifica que el servicio cargó las 18 clases de primaria
    expect(component.classesPrimary.length).toBe(18);
  });
});