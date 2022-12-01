import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar-trader',
  templateUrl: './registrar-trader.component.html',
  styleUrls: ['./registrar-trader.component.css']
})
export class RegistrarTraderComponent implements OnInit {
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

  confirmPassword ='';
  
  ngOnInit(): void {
  }

  RegistrarTrader(){
    if(this.user.Password != this.confirmPassword){
      console.log("Los Password no coinciden")
    }else{
      this.authService.RegistrarTrader(this.user)
      .subscribe(
        res =>{
          console.log(res);
          localStorage.setItem('tokenTrader', res.token2);
          this.router.navigate(['/Trader/registrarTrader']);
        },
        err => console.log(err)
      )
    }
  }
}
