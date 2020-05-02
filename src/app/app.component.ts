import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'everis-app';
  mostrar:boolean = true;

  mostrarBoton(value:boolean){
    this.mostrar = value;
  }
}
