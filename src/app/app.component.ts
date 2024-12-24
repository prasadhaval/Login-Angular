import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoaderinitialStateInterface } from './component/loader/store/loader.state';
import { Observable } from 'rxjs';
import { getLoaderCreateSelector } from './component/loader/store/loader.selector';
import { errorMessageSelector } from './component/login/store/login.selector';
import { getsignUpErrorMessage } from './component/signup/store/signup.selector';

@Component({            
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counterNGRX-4';
  isLoader! : Observable<boolean>
  isError! : Observable<String>
  constructor(private store : Store<LoaderinitialStateInterface>){
    this.isLoader = this.store.select(getLoaderCreateSelector)
    this.isError = this.store.select(errorMessageSelector)
    this.isError = this.store.select(getsignUpErrorMessage)
  }
}
