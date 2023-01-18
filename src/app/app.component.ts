import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, pipe } from 'rxjs';
import { AppUser } from './model/appuser';
import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'user-signin-client';

  authenticated: boolean;


  constructor(
              
             
              private authService:AuthenticationService ,
             
              ){}

  ngOnInit(): void {

    this.authService.getToken()
    this.authenticated=this.authService.isLoggedIn()


  }


  attemptLogout(){

 
    this.authService.logout()



 }



}
