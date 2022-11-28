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
          localStorage.setItem('tokenTrader', res.token2);
          localStorage.setItem('sesionToken', res.token2);
          this.router.navigate(['/Trader/inicio']);
        },
        err =>{
          console.log(err)
        }
    )

  }
}
