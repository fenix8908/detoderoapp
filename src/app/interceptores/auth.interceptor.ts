import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('jwtToken');
  const refreshToken = localStorage.getItem('jwtTokenRefresh');

  if (token && refreshToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        RefreshToken: `${refreshToken}`,
      }
    });
  }
  return next(req);
};
