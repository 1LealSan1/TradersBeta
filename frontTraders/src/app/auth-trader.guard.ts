import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../app/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthTraderGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  canActivate(): boolean{
    if(this.authService.loggedInUser()) {
      return true;
    }

    this.router.navigate(['/User/login'])
    return false
  }
  
}
