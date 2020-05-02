import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { error } from '@angular/compiler/src/util';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Login;
  public respuesta: any;
  public listaDeUsuarios: any;

  constructor(private loginService: LoginService) {
    this.login = new Login('', '');
  }

  ngOnInit(): void {


  }

  onSubmit(form) {
    this.loginService.login(this.login).subscribe(
      (response) => {
        this.respuesta = response;
        localStorage.setItem('token', response.token);
        console.log(response);
        form.reset();
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

}
