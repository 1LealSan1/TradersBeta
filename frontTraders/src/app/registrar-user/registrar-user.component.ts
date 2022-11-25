import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent implements OnInit {
  paises: string[] = [
    'Mexico +52'
  ]
  user = {
    Telefono: '',
    Password: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

  RegistrarTrader(){
    console.log(this.user)
  }
}
