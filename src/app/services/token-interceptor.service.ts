import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem("token");

    if (req.headers.has("Authorization")) {
      req = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token),
      });
    }

    if (req.headers.has("Access-Control-Allow-Origin")) {
      req = req.clone({
        headers: req.headers.set(
          "Access-Control-Allow-Origin",
          "http://localhost:4200"
        ),
      });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req);

    //throw new Error("Method not implemented.");
  }

  /*   intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      }
    });
    return next.handle(tokenizedReq);
  } */
}
