import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-crear-peticion',
  templateUrl: './crear-peticion.component.html',
  styleUrls: ['./crear-peticion.component.css']
})
export class CrearPeticionComponent implements OnInit {
  oficios: string[] = [
    "Carpintero"
  ]
  listpagos: string[] = [
    "Efectivo"
  ]
  peticion = {
    Description:null,
    Precio:null,
    Location:null,
    Oficio:null,
    metodoPago:null,
    Status:'En espera',
    IDUserTrader:localStorage.getItem('token'),
  }
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  crearPeticion(){
    if(this.peticion.Description == null  || this.peticion.Precio == null  || 
    this.peticion.Location == null  || this.peticion.Oficio == null  || this.peticion.metodoPago == null){

      this.openSnackBar("Faltan datos por llenar en su peticion")
      
    }else{
      console.log(this.peticion)
      this.openSnackBar("Peticion creada correctamente")
    }

  }  
  openSnackBar(mensaje: any) {
    return this._snackBar.open(mensaje,'Aceptar');
  }
}
