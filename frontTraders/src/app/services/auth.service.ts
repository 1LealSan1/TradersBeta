import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://46.183.118.58:5000/Users'
  private url2 = 'http://46.183.118.58:5000/UsersTraders'

  constructor(private http: HttpClient,
    private router: Router) { }

  RegistrarUser(user: any){
    return this.http.post<any>(this.url + '/CrearUser', user)
  }
  
  RegistrarTrader(user: any){
    return this.http.post<any>(this.url2 + '/CrearTrader', user)
  }

  LoginUser(user: any){
    return this.http.post<any>(this.url + '/LoginUser', user)
  }

  LoginTrader(user: any){
    return this.http.post<any>(this.url2 + '/LoginTrader', user)
  }
  
  loggedInUser(){
    return !!localStorage.getItem('token');
  }

  loggedInTrader(){
    return !!localStorage.getItem('tokenTrader')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getTokenTrader(){
    return localStorage.getItem('tokenTrader')
  }

  getTokenSesion(){
    return localStorage.getItem('sesionToken')
  }
  
  cerrarSesionUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/User/loginUser'])
  }

  cerrarSesionTrader(){
    localStorage.removeItem('tokenTrader')
    this.router.navigate(['/Trader/loginTrader'])
  }

  crearPeticion(peticion: any){
    return this.http.post<any>(this.url + '/CrearPeticion', peticion)
  }

  ObtenerPeticiones(){
    return this.http.get<any>(this.url2 + '/verPeticiones')
  }
}
