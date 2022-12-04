import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router, RouteReuseStrategy } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'firebase-functions/logger';

@Component({
  selector: 'app-login-trader',
  templateUrl: './login-trader.component.html',
  styleUrls: ['./login-trader.component.css']
})
export class LoginTraderComponent implements OnInit {
  paises: string[] = [
    'Mexico +52'
  ]
  hide = true;

  user = {
    Telefono: '',
    Password: '',
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
  }

  Login(){
    if(this.user.Telefono == '' || this.user.Password == ''){
      this.openSnackBar("Faltan datos por llenar en su peticion")
    }else{
      this.authService.LoginTrader(this.user)
      .subscribe(
        res =>{
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('sesionToken', res.token);
          this.router.navigate(['/User/inicio']);
        },
        err =>{
          this.openSnackBar(err.error)
        }
     )
    }
  }
  openSnackBar(mensaje: any) {
    return this._snackBar.open(mensaje,'Aceptar');
  }
}
