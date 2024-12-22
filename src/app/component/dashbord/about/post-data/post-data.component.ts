import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AboutinitialStateInterface } from '../model/about.model';
import { postAction } from '../store/about.action';

@Component({
  selector: 'app-post-data',
  standalone: false,
  
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.css'
})
export class PostDataComponent implements OnInit {

  postData! : FormGroup

  constructor(private store : Store<AboutinitialStateInterface>){}

  ngOnInit(): void {
    this.postData = new FormGroup({
      title : new FormControl(''),
      dis : new FormControl(''),
    })
  }

  postFun(){
    this.store.dispatch(postAction({obj : this.postData.value}))
  }

}
