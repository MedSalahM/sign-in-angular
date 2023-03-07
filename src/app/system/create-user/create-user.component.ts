import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})


export class CreateUserComponent implements OnInit {

  modalRef : TemplateRef<any>
  

  constructor() { }

  ngOnInit(): void {
  }


  openModalUser(template:TemplateRef<any>){

 
  
   }

}
