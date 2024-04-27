import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token != null && (!req.url.endsWith("/api/authentication") || req.method != 'POST')) {
    req = req.clone({
      headers: req.headers.append('Authorization', token)
    })
  }
  return next(req);
};
