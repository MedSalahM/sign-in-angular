import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { map, Observable } from 'rxjs';
import { loginDto } from 'src/app/model/logindto';
import { Region } from 'src/app/model/region';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regions$ !:Observable<string[]>
  usernames$ !:Observable<string[]>
  names:string=""

  showUsers:boolean=false;
  constructor(
                 private authService:AuthenticationService,
                 private userService:UserService,
                 private route : Router,
                 private notifier :NotifierService) 
                 
                 { }

  errorMessage!:string
  isLoggedIn :boolean = false;
  ngOnInit(): void {

    this.regions$ = this.userService.regions()

   
    this.authService.getToken()
    this.isLoggedIn=this.authService.isLoggedIn()


    if(this.isLoggedIn){

      this.route.navigateByUrl("/home")


    }

  }

  sendLogin(login:any){

     const values=login.value
      const loginDto :loginDto ={
      username:values.username ,
      password:values.password,
      region:values.region

}


      this.authService.login(loginDto)
      .subscribe(r=>{
        


        this.authService.setToken(r.body.access_token)
        this.authService.addTokenToLocalstorage()
        this.notifier.notify('success','Connecté')  
        this.route.navigateByUrl("/home")
        
      }
      ,
  
       er=>{



                if(er.status == 0) {
              
                  this.errorMessage = "Server est deconnecté"
                 
                }

                else{

                 
                  this.errorMessage = "Username ou mot de passe invalide !";

                  
              
                }

               this.notifier.notify('default',this.errorMessage)  

                 

      
      }

      )

  }


  getUsernames(login:any){

    const reg=login.value.region;

   

    this.userService.usernamesByRegion(reg)
    .subscribe(username=>{
      this.names=username.toString()
      
    })
   
   

  

  }

}
