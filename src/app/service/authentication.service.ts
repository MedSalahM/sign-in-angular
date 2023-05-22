import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, first, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppUser } from '../model/appuser';
import { loginDto } from '../model/logindto';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly url :string = environment.serverUrl;
  
  private appUser  !: AppUser;
  private isAuth = false;
  private token: string;
  private  helper = new JwtHelperService();
  constructor(private userService:UserService , private http:HttpClient) { 


  }



login(login : loginDto) : Observable<any>{

  const body = new HttpParams()
  .set('username', login.username)
  .set('password', login.password)
  .set('region',login.region)
 

   return this.http.post(`${this.url}/login`,body ,{observe:'response' , headers: new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded')});

 }




 setToken(token:string): void{
  this.token =token
 }

 addTokenToLocalstorage(){

  localStorage.setItem('login_token' , this.token)

 }

 getToken() :string{


  this.token = localStorage.getItem("login_token");

  return this.token;

  }


  isLoggedIn() : boolean{


  
    if (this.token !=null && this.token !=''){
 
 
       
        if (!this.isTokenExpired() && this.helper.decodeToken(this.token).sub !=null) {
 

                 this.isAuth=true

        }
      
      }
 
    
     return this.isAuth;
 
 
   }


   isTokenExpired():boolean{

    
    return this.helper.isTokenExpired(this.token)

  }


  logout(){

    this.token=null;

    localStorage.removeItem('login_token')

    location.reload()


  }



}
