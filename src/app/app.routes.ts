import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { permisosGuard } from './guards/permisos.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'clientes',
    component: ClienteComponent,
    canActivate: [permisosGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  { path: '**', component: LoginComponent },
];
