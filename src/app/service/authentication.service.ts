import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppUser } from '../model/appuser';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly url :string = environment.serverUrl;
  
  private appUser  !: AppUser;
  private isAuth = false;

  constructor(private userService:UserService) { 


  }

  isAuthenticated() :boolean{

    this.userService.home().subscribe(
      res => {
        this.appUser=res
        this.isAuth=true
      },
      err => {

        if (err.status===401) {
          this.isAuth=false
          
        }

      }
  );


  return this.isAuth
}


}
