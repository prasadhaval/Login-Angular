import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { LoginService } from '../../shared/login.service';
import { LoginStartAction, LoginSuccessAction } from './login.action';


@Injectable()
export class LoginEffects {
  private actions$ = inject(Actions);
  private loginService = inject(LoginService);


login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginStartAction),
      exhaustMap(action =>
        this.loginService.loinFun(action.email,action.password).pipe(
          map((user)=>{
            const data = this.loginService.formatuser(user)
            return LoginSuccessAction({user : data})
          }),
        //   catchError(error => of(AuthApiActions.loginFailure({ error })))
        )
      )
    );  
  })
}