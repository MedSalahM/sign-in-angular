import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SystemUsersService {

  private readonly url :string = environment.serverUrl
   

  constructor(private http:HttpClient) { }

  public sysUsers():Observable<any>{

    return this.http.get<any>(`${this.url}/sy/all`)

  }

  public sendCommand(command : string) : Observable<any>{


   return  this.http.post(`${this.url}/ps/command`, command,  {responseType: 'text' , observe : 'response'})
      
    
  }



}
