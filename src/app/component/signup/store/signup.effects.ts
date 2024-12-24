import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SignupService } from "../../shared/signup.service";
import { Router } from "@angular/router";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { SIGNUP_FAILE_ACTION, SIGNUP_START_ACTION, SIGNUP_SUCCESS_ACTION } from "./signup.action";
import { Store } from "@ngrx/store";
import { LOADING_ACTION } from "../../loader/store/loader.action";



@Injectable()
export class SignUpEffects {
    private actions$  = inject(Actions)
    private signupSer = inject(SignupService)
    private router = inject(Router)
    private store = inject(Store)

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SIGNUP_START_ACTION),
      exhaustMap(action =>
        this.signupSer.signUpFunction(action.email, action.password).pipe(
          map(user =>{
            this.store.dispatch(LOADING_ACTION({loader : false}))
            this.store.dispatch(SIGNUP_FAILE_ACTION({errorMessage :''}))
            return  SIGNUP_SUCCESS_ACTION({signUpuser : user })
          }),
          catchError(error => {
            this.store.dispatch(LOADING_ACTION({loader : false}))

            return of(SIGNUP_FAILE_ACTION({errorMessage : error.error.error.errors[0].message}))
          })
        )
      )
    );  
  });


 redirectSignUP$ = createEffect(()=>{
  return this.actions$.pipe(
    ofType(SIGNUP_SUCCESS_ACTION),
    tap((action)=>{
      this.router.navigateByUrl('/login')
    })
  )
 }, {dispatch : false})
}