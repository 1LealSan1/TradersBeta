import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../app/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(): boolean{
    if(this.authService.loggedInUser()) {
      return true;
    }

    this.router.navigate(['/User/loginUser'])
    return false;
  }
}