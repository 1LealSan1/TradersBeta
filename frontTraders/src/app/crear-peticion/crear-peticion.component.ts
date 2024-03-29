import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-peticion',
  templateUrl: './crear-peticion.component.html',
  styleUrls: ['./crear-peticion.component.css']
})
export class CrearPeticionComponent implements OnInit {
  oficios: string[] = [
    "Carpintero",
    "Pintor",
    "Herrero",
    "Albañil",
    "Instalador de pisos",
    "Plomero",
    
  ]
  listpagos: string[] = [
    "Efectivo"
  ]
  peticion = {
    IDUserClient:localStorage.getItem('token'),
    Description:null,
    Precio:null,
    Location:null,
    Oficio:null,
    FechaHora:null,
    Status:'En espera',
    IDUserTrader:null,
  }
  constructor(private _snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  crearPeticion(){
    if(this.peticion.Description == null  || this.peticion.Precio == null  || 
    this.peticion.Location == null  || this.peticion.Oficio == null  || this.peticion.FechaHora == null 
    ){

      this.openSnackBar("Faltan datos por llenar en su peticion")
      
    }else{
      if(this.peticion.Precio <150){
        this.openSnackBar("Favor de introducir un precio igual o mayor a $150 mxn")
      }
      else{
          console.log(this.peticion.IDUserClient);
          this.authService.crearPeticion(this.peticion)
          .subscribe(
            res =>{
              console.log(res);
              this.router.navigate(['/User/inicio']);
            },
            err =>{
              console.log(err)
            }
        )
          this.openSnackBar("Peticion creada correctamente")
      }
    }
  }  
  openSnackBar(mensaje: any) {
    return this._snackBar.open(mensaje,'Aceptar');
  }
}
