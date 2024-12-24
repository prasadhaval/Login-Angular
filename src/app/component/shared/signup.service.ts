import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signUpResponce } from '../signup/model/signupResponce.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
static signUpapi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcxj3wHxH94rJWZg2PZOwf9NGIIaX1Soc`
  constructor(private http : HttpClient){ }


  signUpFunction(email : string , password : string): Observable<signUpResponce>{

    return this.http.post<signUpResponce>(SignupService.signUpapi,{email,password,returnSecureToken:true})
  }
}
