import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUser } from 'src/app/model/appuser';
import { CreateProjectDto } from 'src/app/model/create-project';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';
import { SystemUsersService } from 'src/app/system/system-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: AppUser
  authenticated:boolean;
  commandToSend:CreateProjectDto
  hasResponse : boolean
  response:string

  hasError : boolean
  error:string
  constructor(private userService:UserService ,
              private authService:AuthenticationService ,
              private router : Router ,
              private systemService:SystemUsersService, 
              private projectService:ProjectService
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

 displayCommande(a:any){

  this.commandToSend = {
    label:a.value.commandeToSend ,
    createdBy : this.user.codeApc

  }

  this.sendPsCommand()

 }


 sendPsCommand(){

 this.projectService.createNewProject(this.commandToSend)
     .subscribe(r=>{


      this.hasResponse=true
      this.response = `numero : ${r}`
      this.hasError =false
   
       

     }
     
     , 
     e=>{
      console.log(e)
      this.hasError = true
      this.hasResponse=false
      this.error =e.message

        
     }


     )



 }


}
