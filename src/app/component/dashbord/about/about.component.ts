import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AboutinitialStateInterface, Post } from './model/about.model';
import { Observable } from 'rxjs';
import { getAboutselector } from './store/about.selector';
import { deleteAction } from './store/about.action';

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  tabledata! : Observable<Post[]>

  constructor(private store : Store<AboutinitialStateInterface>){
    this.tabledata = this.store.select(getAboutselector)
  }


  deleteFun(id : any){
    this.store.dispatch(deleteAction({id}))
  }
}
