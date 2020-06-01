import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalStorageService} from '../services/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = this.localStorageService.getItem(this.localStorageService.TOKEN_KEY);

    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', token.token)
      });

      return next.handle(authReq);
    }


    return next.handle(req);
  }
}
