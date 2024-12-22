import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { HomeComponent } from './component/dashbord/home/home.component';
import { AboutComponent } from './component/dashbord/about/about.component';
import { ContactComponent } from './component/dashbord/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './component/store/app.state';
import { PostDataComponent } from './component/dashbord/about/post-data/post-data.component';
import { UpdateDataComponent } from './component/dashbord/about/update-data/update-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    PostDataComponent,
    UpdateDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
