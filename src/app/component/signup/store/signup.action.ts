import { createAction, props } from "@ngrx/store"
import { signUpuser } from "../model/signupUser.model"

const SIGNUP_START = '[SIGN-UP] START'

const SIGNUP_SUCCESS = '[SIGN_UP] SUCCESS'

const SIGNUP_FAILE = '[SIGN_UP] FAILE'


export const SIGNUP_START_ACTION = createAction(SIGNUP_START , props<{email : string , password : string}>())

export const SIGNUP_SUCCESS_ACTION = createAction(SIGNUP_SUCCESS , props<{signUpuser : signUpuser}>())


export const SIGNUP_FAILE_ACTION = createAction(SIGNUP_FAILE , props<{errorMessage : string}>())