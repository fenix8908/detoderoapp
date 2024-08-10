import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente_lista.component';
import { permisosGuard } from './guards/permisos.guard';
import { HomeComponent } from './home/home/home.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar/editar-cliente/editar-cliente.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [permisosGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path: 'clientes',
    component: ClienteComponent,
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent,
    canActivate: [permisosGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  {
    path: 'edit-cliente/:id',
    component: EditarClienteComponent,
    canActivate: [permisosGuard],
    data: { roles: ['ROLE_ADMIN'] },
  },
  { path: '**', component: LoginComponent },
];
