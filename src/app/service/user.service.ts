import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient : HttpClient) { }
private apiUrl="http://localhost:8080/user/"
  getAllUsers(): Observable<User[]>{
    // return this.httpClient.get<User[]>("http://localhost:8080/user/getAllUsers")
    return this.httpClient.get<User[]>(this.apiUrl +"getAllUsers")

  }
  addUser(user:User) : Observable<User> {
   return this.httpClient.post<User>("http://localhost:8080/user/addUser", user)
  }
  login(username: string , password :string) :Observable<User>{
const loginUrl = this.apiUrl+"login?username="+username+"&password="+password; 
return this.httpClient.get<User>(loginUrl);

  }
  deleteUser(id : number) : Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl + "deleteUser/" + id)
  }
  getUserById(id : number) : Observable<User>{
    return this.httpClient.get<User>(this.apiUrl +"getUserById/"+id)
  }
   updateUser(id:number, user:User): Observable<User>{
    return this.httpClient.put<User>(this.apiUrl +"updateUser/"+id,user)
   }
}
