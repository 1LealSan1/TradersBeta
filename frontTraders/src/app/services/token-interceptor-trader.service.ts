import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorTraderService implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ) { }
  intercept(req: any ,next: any) {
    const tokenizereq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.authService.getTokenSesion()}`
      }
    })
    return next.handle(tokenizereq)
  }
}
