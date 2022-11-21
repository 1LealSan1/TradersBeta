import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-trader',
  templateUrl: './login-trader.component.html',
  styleUrls: ['./login-trader.component.css']
})
export class LoginTraderComponent implements OnInit {
  paises: string[] = [
    'Mexico +52'
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
