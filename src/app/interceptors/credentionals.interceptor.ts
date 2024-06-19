import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments/enviroments';

@Injectable()
export class CredentionalsInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = req.clone({
      withCredentials: true,
      headers: req.headers.append('api-key', enviroment.apikey),
    });
    return next.handle(newReq);
  }
}
