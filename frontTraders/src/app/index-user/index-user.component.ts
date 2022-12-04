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
    public authService: AuthService) { }
  ngOnInit(): void {
    this.obtenerPeticionesUser()
  }
  peticion = {
    IDUserClient:localStorage.getItem('token'),
  }
  peticiones!: any[];
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
  cancelarPeticion(value :any){
    this.authService.CancelarPeticionUser(value)
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
