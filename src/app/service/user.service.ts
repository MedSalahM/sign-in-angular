import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppUser } from '../model/appuser';
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
   private readonly url :string = environment.serverUrl
   

  constructor(private http:HttpClient) { }

  public home():Observable<any>{

    return this.http.get<AppUser>(`${this.url}/home`)
  }

  public regions():Observable<any>{

    return this.http.get<Region[]>(`${this.url}/region`)
  }

  public update(user:AppUser):Observable<any>{

    return this.http.put<number>(`${this.url}/user` , user)
  }

  public usernamesByRegion(region:string):Observable<string[]>{

    return this.http.get<string[]>(`${this.url}/user/username?region=${region}`)
  }


}
