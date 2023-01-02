import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,private route : Router) { }

  ngOnInit(): void {
  }

  sendLogin(login:any){

const loginDto ={
  username:login.value.username ,
  password:login.value.password
}

console.log(loginDto)
      this.authService.login(loginDto)
      .subscribe(r=>{
        


        this.authService.setToken(r.body.access_token)

       this.authService.addTokenToLocalstorage()
        /*this.authService.addUserToLocalCach()
    
        this.notifier.notify('success','Connecté')  */   
        this.route.navigateByUrl("/home")
      })

  }

}
