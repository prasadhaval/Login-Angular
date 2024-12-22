import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterinitialStateInterface } from './model/counter.model';
import { decrimentAction, incrimentAction, inputAction, resetAction } from './store/counter.action';
import { Observable } from 'rxjs';
import { counterSelector } from './store/counter.selector';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  countervalue! : Observable<Number>
  inputvalue! : number
constructor(private store : Store<CounterinitialStateInterface>){
  this.countervalue = store.select(counterSelector)
}

  onincriment() {
    this.store.dispatch(incrimentAction())
  }

  ondecriment() {
    this.store.dispatch(decrimentAction())
  }


  onreset() {
    this.store.dispatch(resetAction())
  }

  onAdd(){
    this.store.dispatch(inputAction({value : (+this.inputvalue)}))  
  }

}
