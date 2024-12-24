import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SignUPinitialStateInterface } from './store/signup.state';
import { SignupService } from '../shared/signup.service';
import { SIGNUP_START_ACTION } from './store/signup.action';
import { LOADING_ACTION } from '../loader/store/loader.action';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

    signupForm!: FormGroup;

    constructor(private store : Store<SignUPinitialStateInterface> , private signupser : SignupService){}

    ngOnInit(): void {
      this.signupForm = new FormGroup({
        email : new FormControl(''),
        password : new FormControl(''),
      })
    }


    SignupFun(){
     const email = this.signupForm.value.email
     const password = this.signupForm.value.password
      this.store.dispatch(LOADING_ACTION({loader : true}))
     this.store.dispatch(SIGNUP_START_ACTION({email,password}))
    }
    
}
