import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { HomeComponent } from './component/dashbord/home/home.component';
import { AboutComponent } from './component/dashbord/about/about.component';
import { ContactComponent } from './component/dashbord/contact/contact.component';
import { PostDataComponent } from './component/dashbord/about/post-data/post-data.component';
import { UpdateDataComponent } from './component/dashbord/about/update-data/update-data.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {
    path:"", redirectTo :'login',pathMatch :'full'
  },
  {
    path :'login', component : LoginComponent
  },
  {
    path :'signup', component : SignupComponent
  },
  {
    path :'', component : DashbordComponent , children :[
      {
        path :'home', component : HomeComponent
      },
      {
        path :'about', component : AboutComponent,children :[
          {
            path :'post', component : PostDataComponent
          },
          {
            path :'update/:id', component : UpdateDataComponent
          }
        ]
      },
      {
        path :'contact', component : ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
