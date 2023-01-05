import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:5000/Users'
  private url2 = 'http://localhost:5000/UsersTraders'

  constructor(private http: HttpClient,
    private router: Router) { }
  
  RegistrarTrader(user: any){
    return this.http.post<any>(this.url + '/CrearUser', user)
  }

  LoginTrader(user: any){
    return this.http.post<any>(this.url + '/LoginUser', user)
  }
  
  loggedInUser(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getTokenSesion(){
    return localStorage.getItem('sesionToken')
  }
  
  cerrarSesionUser(){
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  crearPeticion(peticion: any){
    return this.http.post<any>(this.url + '/CrearPeticion', peticion)
  }

  ObtenerPeticiones(peticion: any){
    return this.http.post<any>(this.url2 + '/verPeticiones', peticion)
  }
  ObtenerOfertas(peticion: any){
    return this.http.post<any>(this.url2 + '/obtenerOfertas', peticion)
  }
  obtenerOfertasUser(peticion: any){
    return this.http.post<any>(this.url + '/obtenerOfertasUser', peticion)
  }
  ofertarPeticion(oferta: any){
    return this.http.post<any>(this.url2 + '/OfertarPeticion',oferta)
  }
  ObtenerPeticionesUser(peticion: any){
    return this.http.post<any>(this.url + '/Peticions' ,peticion)
  }
  CancelarPeticionUser(value: any){
    return this.http.delete<any>(this.url +'/PeticionCancelada/' + value)
  }
  AceptarOferta(aceptOfert: any){
    return this.http.put<any>(this.url +'/AceptarOferta', aceptOfert)
  }
  RechazarOferta(rechazarOfert: any){
    return this.http.delete<any>(this.url +'/RechazarOferta/' + rechazarOfert)
  }
  obtenerTrabajosTrader(peticion: any){
    return this.http.post<any>(this.url2 +'/verTrabajosComplete', peticion)
  }
  CompletarTrabajo(peticion: any){
    return this.http.put<any>(this.url2 +'/completarTrabajo', peticion)
  }
}
