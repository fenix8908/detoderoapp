import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { TokenStorageService } from '../service/token/token-storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginUrl = 'http://localhost:8080/login';
  const token = localStorage.getItem('jwtToken');
  const refreshToken = localStorage.getItem('jwtTokenRefresh');



  // Verifica si la solicitud es para el endpoint de login
  // Si es el login, simplemente pasa la solicitud sin modificarla
  if (req.url.includes(loginUrl)) {
    return next(req);
  }

  if (token && refreshToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        RefreshToken: `${refreshToken}`,
      },
    });
  }
  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        const newAccesToken = event.headers.get('newAccessToken');
        const newRefreshToken = event.headers.get('newRefreshToken');

        if(newAccesToken && newRefreshToken){
           localStorage.setItem('jwtToken',`${newAccesToken}`)
           localStorage.setItem('jwtTokenRefresh',`${newRefreshToken}`)
        }
      }
    })
  );
};
