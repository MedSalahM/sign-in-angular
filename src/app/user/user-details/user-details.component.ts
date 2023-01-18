import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { map } from 'rxjs';
import { AppUser } from 'src/app/model/appuser';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user!: AppUser
  authenticated:boolean;

  constructor(private userService:UserService ,
              private authService:AuthenticationService ,
              private router : Router
              ,
                 private notifier :NotifierService
              ){}

  ngOnInit(): void {


    this.authService.getToken()
    this.authenticated=this.authService.isLoggedIn()


      this.userService.home().subscribe(r=>{

        this.user=r

      })

      
  }


  attemptLogout(){

 
    this.authService.logout()



 }

 edit(){
 
  this.userService.update(this.user)
       .subscribe(r=>{

         
        
      this.notifier.notify('info','Modification réussite ! vous devez reconnecter ')  

      setTimeout(()=>{

    
         this.authService.logout()


      },3000)



       })


 }

}
