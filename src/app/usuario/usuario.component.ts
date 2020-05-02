import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public listaDeUsuarios: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  onAddUsuario() {
    this.usuarioService.addUsuario().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  onListarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe(
      (response) => {
        this.listaDeUsuarios = response;
        console.log(response);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

}
