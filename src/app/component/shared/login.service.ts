import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginResponce } from '../login/model/LoginResponce.model';
import { User } from '../login/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static signIn = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcxj3wHxH94rJWZg2PZOwf9NGIIaX1Soc`
  constructor(private http : HttpClient) { }

  loinFun(email : string , password : string) : Observable<loginResponce>{

    return this.http.post<loginResponce>(LoginService.signIn,{email,password , returnSecureToken : true})
  }

 
  formatuser(data : loginResponce){
    const user = new User(data.idToken, data.email, data.refreshToken, data.expiresIn, data.localId, data.registered)
    return user
  }
}
