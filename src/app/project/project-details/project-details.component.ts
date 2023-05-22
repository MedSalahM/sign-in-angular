import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AppUser } from 'src/app/model/appuser';
import { ProjectDetailDto } from 'src/app/model/project-detail';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {


  projectPath : string
  user!: AppUser
  authenticated:boolean;
  projectDetailDto : ProjectDetailDto

  constructor(private userService:UserService ,
              private authService:AuthenticationService ,
              private router : Router,
              private route : ActivatedRoute,
              private projectService:ProjectService,
              private notifier :NotifierService
              ){}

  ngOnInit(): void {

    this.projectPath = this.route.snapshot.params['path']
    this.getProjectDetails(this.projectPath)
    this.authService.getToken()
    this.authenticated=this.authService.isLoggedIn()


      this.userService.home().subscribe(r=>{

        this.user=r

      })

      
  }


  getProjectDetails(path:string){


    this.projectService.loadProjectByPath(path)
        .subscribe(r=>{
          if(r===null) {
            this.notifier.notify('warning' , "Project n existe pas");
            this.router.navigateByUrl('home')
          }

          else{
            this.projectDetailDto=r

          }
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
