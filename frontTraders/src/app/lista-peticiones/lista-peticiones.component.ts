import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-peticiones',
  templateUrl: './lista-peticiones.component.html',
  styleUrls: ['./lista-peticiones.component.css']
})
export class ListaPeticionesComponent implements OnInit{

  constructor(private _snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}

  peticion = {
    IDUserClient:localStorage.getItem('token'),
  }
  peticiones!: any[];
  oferta ={
    IDUserTrader:localStorage.getItem('token'),
    Oferta:'',
    _id:'', 
    IDUserClient:null,
    Description:null,
    Precio:null,
    Location:null,
    Oficio:null,
    FechaHora:null,
    Status:null,
  }

  ngOnInit(): void {
    this.obtenerPeticiones()
  }

  obtenerPeticiones(){
    this.authService.ObtenerPeticiones(this.peticion)
    .subscribe(
      res =>{
        this.peticiones = res
      },
      err =>{
        console.log(err)
      }
    )
  }
  ofertarPeticion(Precio: any, _id: any){
    this.oferta._id=_id
    if(this.oferta.Oferta <= Precio){
      this.openSnackBar("La oferta efectuada a la peticion no puede ser menor al precio de la peticion")
    }else{
      this.authService.ofertarPeticion(this.oferta)
      .subscribe(
        res =>{
          this.openSnackBar(res)
          this.router.navigate(['/User/inicio'])
        },
        err =>{
          this.openSnackBar(err.error.text)
          this.router.navigate(['/User/inicio'])     
        }
      )
    }
  }
  openSnackBar(mensaje: any) {
    return this._snackBar.open(mensaje,'Aceptar');
  }
}
