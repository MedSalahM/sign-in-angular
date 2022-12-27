import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService:AuthenticationService , private router : Router){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    if (!this.authService.isAuthenticated()) {
      
      this.router.navigate(['login'])
    
      return false;
    }

    return true
  
   


    
  
  }
  
}
