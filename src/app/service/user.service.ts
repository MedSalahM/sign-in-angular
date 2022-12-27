import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppUser } from '../model/appuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
   private readonly url :string = environment.serverUrl
   

  constructor(private http:HttpClient) { }

  public home():Observable<any>{

    return this.http.get<AppUser>(`${this.url}/home`)
  }

}
