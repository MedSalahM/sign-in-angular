import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from 'src/app/model/appuser';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated! : false;
  user!: AppUser

  constructor(private userService:UserService){}

  ngOnInit(): void {

      this.userService.home().subscribe(r=>this.user=r)
      
  }



}
