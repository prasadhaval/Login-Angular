import { createAction, props } from "@ngrx/store"
import { User } from "../model/user.model"

export const LoginStart = '[login] start'
export const LoginSuccess = '[login] success'
export const LoginFaile = '[login] file'


export const LoginStartAction = createAction(LoginStart, props<{email : string,password:string}>())

export const LoginSuccessAction = createAction(LoginSuccess , props<{user : User}>())


export const LoginFaileAction = createAction(LoginFaile , props<{errorMessage : string}>() )