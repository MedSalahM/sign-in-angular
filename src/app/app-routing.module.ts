import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
 
   {path:'login',component:LoginComponent},
   {path:'',component:HomeComponent, canActivate:[AuthGuard]},
   {path:'home',component:HomeComponent , canActivate:[AuthGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
