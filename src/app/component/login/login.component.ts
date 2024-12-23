import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LogininitialStateInterface } from './store/login.state';
import { LoginStartAction } from './store/login.action';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private stote : Store<LogininitialStateInterface>){}
  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      EmailId : new FormControl(''),
      Password : new FormControl(''),
    })
  }


  loginFun(){
   const email  = this.loginForm.value.EmailId
   const Password  = this.loginForm.value.Password

   this.stote.dispatch(LoginStartAction({email:email , password : Password}))
  }
  


}


