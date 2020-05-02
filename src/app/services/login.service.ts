import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;

  constructor(public httpClient: HttpClient) {

    this.url = 'http://localhost:8080';

  }

  login(login: Login): Observable<any> {

    const body = JSON.stringify(login);

    return this.httpClient.post(this.url + '/login', body);

  }



}
