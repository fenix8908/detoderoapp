import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenStorageService } from '../service/token/token-storage.service';
import { RolService } from '../service/rol/rol.service';
import { lastValueFrom } from 'rxjs';

export const permisosGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const tokenService = inject(TokenStorageService);
  const rolService = inject(RolService);
  const rolesDesdeRuta = route.data['roles'];

  const userFronToken = tokenService.obtenerUserDelToken();
  let rolesObtenidos: string[] = [];
  if (userFronToken) {
    try {
      rolesObtenidos = await lastValueFrom(rolService.obtenerRolesPorUsuario(userFronToken));
    } catch (error) {
      console.error('Error al obtener roles', error);
      router.navigateByUrl('/login');
      return false;
    }
  }

  const tieneRol = rolesObtenidos.some((rol: any) =>
    rolesDesdeRuta.includes(rol)
  );

  if (!tieneRol) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tiene permisos para acceder a esta ruta',
    });
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
