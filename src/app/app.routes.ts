import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { IntroComponent } from './intro/intro';
import { MenuComponent } from './menu/menu';
import { ClassDetailComponent } from './class-detail/class-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio' },
  { path: 'intro', component: IntroComponent, title: 'Introducción' },
  { path: 'menu', component: MenuComponent, title: 'Menú de Clases' },
  { path: 'clase/:id', component: ClassDetailComponent, title: 'Detalle de Clase' },
  { path: '**', redirectTo: '' }
];