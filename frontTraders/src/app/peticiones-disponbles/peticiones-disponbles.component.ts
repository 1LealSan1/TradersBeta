import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticiones-disponbles',
  templateUrl: './peticiones-disponbles.component.html',
  styleUrls: ['./peticiones-disponbles.component.css']
})
export class PeticionesDisponblesComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor() { }

  ngOnInit(): void {
  }

}
