import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente_lista.component';
import { permisosGuard } from './guards/permisos.guard';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'clientes',
    component: ClienteComponent,
    canActivate: [permisosGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  { path: '**', component: LoginComponent },
];
