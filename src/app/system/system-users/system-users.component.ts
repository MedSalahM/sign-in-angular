import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemUser } from 'src/app/model/sys-user';
import { SystemUsersService } from '../system-users.service';

@Component({
  selector: 'app-system-users',
  templateUrl: './system-users.component.html',
  styleUrls: ['./system-users.component.css']
})
export class SystemUsersComponent implements OnInit {

  sysUsers$ : Observable<SystemUser[]>
  constructor(private systemUserService : SystemUsersService ) { }

  ngOnInit(): void {
    this.sysUsers$ = this.systemUserService.sysUsers()
  }

}
