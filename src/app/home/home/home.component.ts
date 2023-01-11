import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUser } from 'src/app/model/appuser';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated! : false;
  user!: AppUser


  constructor(private userService:UserService ,
              private authService:AuthenticationService ,
              private router : Router
              ){}

  ngOnInit(): void {

      this.userService.home().subscribe(r=>{

        this.user=r

      })


     
    
      
  }

  attemptLogout(){

 
     this.authService.logout()



  }

}
