import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private http : HttpClient){}

  private loginapi =   'https://freeapi.miniprojectideas.com/api/User/Login'

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      EmailId : new FormControl(''),
      Password : new FormControl(''),
    })
  }


  loginFun(){
    let obj = {
      EmailId : this.loginForm.value.EmailId,
      Password : this.loginForm.value.Password,
    }

    const headers = {'auth':'application/json'}
    this.http.post(this.loginapi,obj,{headers}).subscribe((data : any)=>{
      console.log(data)
    })
  }
  


}


