import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
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
    this.authService.LoginUser(this.user)
      .subscribe(
        res =>{
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('sesionToken', res.token)
          this.router.navigate(['/User/inicio']);
        },
        err =>{
          console.log(err)
        }
    )
  }

}
