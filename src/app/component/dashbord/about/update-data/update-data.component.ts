import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AboutinitialStateInterface } from '../model/about.model';
import { ActivatedRoute } from '@angular/router';
import { editeAboutselector } from '../store/about.selector';
import { updateAction } from '../store/about.action';

@Component({
  selector: 'app-update-data',
  standalone: false,
  
  templateUrl: './update-data.component.html',
  styleUrl: './update-data.component.css'
})
export class UpdateDataComponent implements OnInit {
  editeForm! : FormGroup
  id! : string
  constructor(private store : Store<AboutinitialStateInterface> , private active : ActivatedRoute){}

  ngOnInit(): void {

    this.active.params.subscribe((data : any)=>{
      this.id = data.id
      const id = data.id

      this.store.select(editeAboutselector, {id}).subscribe((data : any)=>{
        this.editeForm = new FormGroup({
          title : new FormControl(data?.title),
          dis : new FormControl(data?.dis),
        })
      })

    })
  }

  editeFun(){
    let updatedata  = {
      id : this.id,
      title : this.editeForm.value.title,
      dis : this.editeForm.value.dis,
    }

    this.store.dispatch(updateAction({obj : updatedata}))
  }

}
