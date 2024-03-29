import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { CreateUserComponent } from './system/create-user/create-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';

const routes: Routes = [

 
   {path:'login',component:LoginComponent},
   {path:'',component:HomeComponent, canActivate:[AuthGuard]},
   {path:'home',component:HomeComponent , canActivate:[AuthGuard]},
   {path:'user',component:UserDetailsComponent , canActivate:[AuthGuard]},
   {path:'create',component:CreateUserComponent , canActivate:[AuthGuard]},
   {path:'project/:path',component:ProjectDetailsComponent , canActivate:[AuthGuard]},

   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
