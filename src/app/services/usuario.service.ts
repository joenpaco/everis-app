import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {

  public url: string;

  constructor(public httpClient: HttpClient) {

    this.url = "http://localhost:8080";

  }

  addUsuario(): Observable<any> {

    const body =
    "{\"id\":3,\"username\":\"Manuel Parico\",\"password\":\"Manuel77\",\"enabled\":true,\"creatAt\":1588282686367,\"updatedAt\":1588282686367,\"roles\":[{\"id\":4,\"authority\":\"ROLE_USER\"}],\"email\":\"manuel@manuel.com\",\"phones\":[{\"number\":\"1234567\",\"citycode\":\"1\",\"countrycode\":\"57\",\"phoneId\":2}]}";

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Access-Control-Allow-Origin": "http://localhost:4200",
      }),
    };

    return this.httpClient.post(this.url + "/add", body, httpOptions);

  }

  listarUsuarios(): Observable<any> {

    return this.httpClient.get(this.url + "/listar");

  }
}
