import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent implements OnInit {
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

  RegistrarUser(){
    if(this.user.Password != this.confirmPassword){
      console.log("Los Password no coinciden")
    }else{
      this.authService.RegistrarUser(this.user)
        .subscribe(
          res =>{
            console.log(res);
            localStorage.setItem('token', res.token);
            this.router.navigate(['/User/loginUser']);
          },
          err => console.log(err)
        )
    }
  }
}
