import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-trader',
  templateUrl: './registrar-trader.component.html',
  styleUrls: ['./registrar-trader.component.css']
})
export class RegistrarTraderComponent implements OnInit {
  paises: string[] = [
    'Mexico +52'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
