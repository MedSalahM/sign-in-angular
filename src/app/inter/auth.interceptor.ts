import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService:AuthenticationService) {}
  public apiUrlLogin = environment.serverUrl+"/login";

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    


    if(request.url.toString()==this.apiUrlLogin){

       return next.handle(request);
      
    }

const token: string = this.authenticationService.getToken()

request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });

request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });

request = request.clone({ headers: request.headers.set('Accept', 'application/json') });


return next.handle(request);


  }
}
