import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,
    public authService: AuthService,
    ) { }
  ngOnInit(): void {
    this.obtenerPeticionesUser()
    this.obtenerOfertasTrader()
    this.obtenerOfertasUser()
    this.obtenerTrabajosTrader()
  }
  peticion = {
    IDUserClient:localStorage.getItem('token'),
  }
  aceptOfert ={
  }
  rechazarOfert ={}
  completarTrabajo={
  }
  peticiones!: any[];
  ofertas!: any[];
  ofertasUser!: any[];
  trabajos!: any[];
  obtenerPeticionesUser(){
    this.authService.ObtenerPeticionesUser(this.peticion)
    .subscribe(
      res =>{
        this.peticiones = res
      },
      err =>{
        console.log(err)
      }
    )
  }
  obtenerTrabajosTrader(){
    this.authService.obtenerTrabajosTrader(this.peticion)
    .subscribe(
      res =>{
        this.trabajos = res
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )
  }
  obtenerOfertasTrader(){
    this.authService.ObtenerOfertas(this.peticion)
    .subscribe(
      res =>{
        this.ofertas = res
      },
      err =>{
        console.log(err)
      }
    )
  }
  obtenerOfertasUser(){
    this.authService.obtenerOfertasUser(this.peticion)
    .subscribe(
      res =>{
        this.ofertasUser = res
      },
      err =>{
        console.log(err)
      }
    )
  }
  cancelarPeticion(value :any){
    this.authService.CancelarPeticionUser(value)
    .subscribe(
      res =>{
        window.location.reload();
        this.openSnackBar(res.error.text)
      },
      err=>{
        console.log(err)
        window.location.reload();
        this.openSnackBar(err.error.text)
      }
    )
  }
  AceptarOferta(_id: any, IDPeticion: any){
    this.aceptOfert = {_id,IDPeticion}
    this.authService.AceptarOferta(this.aceptOfert)
    .subscribe(
      res =>{
        window.location.reload();
        this.openSnackBar(res.error.text)
      },
      err=>{
        console.log(err)
        window.location.reload();
        this.openSnackBar(err.error.text)
      }
    )
  }
  RechazarOferta(_id: any){
    this.rechazarOfert = _id
    this.authService.RechazarOferta(this.rechazarOfert)
    .subscribe(
      res =>{
        this.openSnackBar(res)
      },
      err=>{
        this.openSnackBar(err.error.text)
      }
    )
  }
  CompletarTrabajo(_id: any){
    this.completarTrabajo={_id}
    this.authService.CompletarTrabajo(this.completarTrabajo)
    .subscribe(
      res =>{
        this.openSnackBar(res.error.text)
      },
      err=>{
        console.log(err)
        this.openSnackBar(err.error.text)
      }
    )
  }
  openSnackBar(mensaje: any) {
    return this._snackBar.open(mensaje,'Aceptar');
  }

}
