import { createAction, props } from "@ngrx/store"
import { User } from "../model/user.model"

export const LoginStart = '[login] start'
export const LoginSuccess = '[login] success'



export const LoginStartAction = createAction(LoginStart, props<{email : string,password:string}>())

export const LoginSuccessAction = createAction(LoginSuccess , props<{user : User}>())