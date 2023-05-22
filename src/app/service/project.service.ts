import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateProjectDto } from '../model/create-project';
import { Observable, first } from 'rxjs';
import { ProjectDetailDto } from '../model/project-detail';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private serviceUrl=environment.serverUrl

  constructor(private http:HttpClient) { 


  }



public createNewProject(ep:CreateProjectDto) : Observable<any> {

 return this.http.post<any>(`${this.serviceUrl}/project`,ep).pipe(first())

} 
 public loadProjectByPath(path: string) : Observable<ProjectDetailDto> {

  return this.http.get<ProjectDetailDto>(`${this.serviceUrl}/project?link=${path}`).pipe(first())

}

}
