import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('jwtToken');
  const refreshToken = localStorage.getItem('jwtTokenRefresh');

  if (token && refreshToken) {
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        RefreshToken: `${refreshToken}`,
      }
    });
  }
  return next(req);
};
