import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn:boolean
  
  constructor(private authService:AuthenticationService , private router : Router){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    this.authService.getToken() 

    this.isLoggedIn = this.authService.isLoggedIn()

   

    if (!this.isLoggedIn) {
      
      this.router.navigate(['login'])
    
    }

    return this.isLoggedIn
  
   
  }
  
}
