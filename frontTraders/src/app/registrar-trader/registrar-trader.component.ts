import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentObserver } from '@angular/cdk/observers';
@Component({
  selector: 'app-registrar-trader',
  templateUrl: './registrar-trader.component.html',
  styleUrls: ['./registrar-trader.component.css']
})
export class RegistrarTraderComponent implements OnInit {
  paises: string[] = [
    'Mexico +52'
  ]
  oficios: string[] = [
    "Carpintero"
  ]
  hide = true;

  user = {
    Telefono: '',
    Password: '',
    Oficio:'',
  }
  constructor(private _snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
    ) { }

  confirmPassword ='';
  
  ngOnInit(): void {
  }

  RegistrarTrader(){
    if(this.user.Telefono == '' || this.user.Password == '' || this.user.Oficio == ''){
      this.openSnackBar("Faltan datos por llenar en su peticion")
    }else{
      if(this.user.Password != this.confirmPassword){
        this.openSnackBar("Las constraseñas no coinciden")
      }else if(this.user.Telefono.length != 10){
        this.openSnackBar("El formato del numero de telefono no es correcto")     
      }else{
        this.authService.RegistrarTrader(this.user)
        .subscribe(
          res =>{
            console.log(res);
            localStorage.setItem('token', res.token);
            this.openSnackBar("Usuario creado correctamente")
            this.router.navigate(['/User/login']);
          },
          err => {
            console.log(err)
            this.openSnackBar(err.error.text)
          }
        )
      }
    }
  }
  openSnackBar(mensaje: any) {
    return this._snackBar.open(mensaje,'Aceptar');
  }
}
