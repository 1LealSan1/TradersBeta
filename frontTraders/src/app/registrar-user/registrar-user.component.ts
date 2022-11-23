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
  constructor() { }

  ngOnInit(): void {
  }

}
