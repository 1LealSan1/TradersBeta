import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  Login(){
    
    this.authService.LoginTrader(this.user)
      .subscribe(
        res =>{
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('sesionToken', res.token);
          this.router.navigate(['/User/inicio']);
        },
        err =>{
          console.log(err)
        }
    )

  }
}
