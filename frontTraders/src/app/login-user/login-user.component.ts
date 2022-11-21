import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  paises: string[] = [
    'Mexico +52'
  ]
  
  disableSelect = new FormControl(true);

  constructor() { }

  ngOnInit(): void {
  }

}
