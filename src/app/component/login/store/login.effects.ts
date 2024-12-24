import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { LoginService } from '../../shared/login.service';
import { LoginFaileAction, LoginStartAction, LoginSuccessAction } from './login.action';
import { Store } from '@ngrx/store';
import { LOADING_ACTION } from '../../loader/store/loader.action';
import { Router } from '@angular/router';


@Injectable()
export class LoginEffects {
  private actions$ = inject(Actions);
  private loginService = inject(LoginService);
  private store = inject(Store);
  private router = inject(Router);


login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginStartAction),
      exhaustMap(action =>
        this.loginService.loinFun(action.email,action.password).pipe(
          map((user)=>{
            this.store.dispatch(LOADING_ACTION({loader : false}))
            this.store.dispatch(LoginFaileAction({errorMessage :''}))
            const data = this.loginService.formatuser(user)
            return LoginSuccessAction({user : data})
          }),
        //   catchError(error => of(AuthApiActions.loginFailure({ error })))
        catchError((error)=>{
          this.store.dispatch(LOADING_ACTION({loader : false}))
          return of(LoginFaileAction({errorMessage : error.error.error.errors[0].message}))
        })
        )
      )
    );  
  })


  redirectLogin$ = createEffect(()=>{
   return this.actions$.pipe(ofType(LoginSuccessAction), tap((action)=>{
      this.router.navigateByUrl('/home')
    }))
  } , {dispatch : false})
}