import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-peticion',
  templateUrl: './crear-peticion.component.html',
  styleUrls: ['./crear-peticion.component.css']
})
export class CrearPeticionComponent implements OnInit {
  oficios: string[] = [
    "Carpintero"
  ]
  listpagos: string[] = [
    "Efectivo"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
