import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const permisosGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const rolesEsperados = route.data['roles'];
  const rolesUsuario = JSON.parse(localStorage.getItem('roles') || '[]');

  const tieneRol = rolesUsuario.some((rol: any) =>  rolesEsperados.includes(rol));

  if(!tieneRol){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No tiene permisos para acceder a esta ruta",
    });
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
