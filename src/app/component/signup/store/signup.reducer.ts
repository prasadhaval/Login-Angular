import { createReducer, on } from "@ngrx/store"
import { signUpinitialState } from "./signup.state"
import { SIGNUP_FAILE_ACTION, SIGNUP_SUCCESS_ACTION } from "./signup.action"

const _SignUpReducer = createReducer(signUpinitialState,

    on(SIGNUP_SUCCESS_ACTION , (state,action)=>{
        return {
            ...state,
            signUpUser : action.signUpuser
        }
    }),
    on(SIGNUP_FAILE_ACTION , (state,action)=>{
        return {
            ...state,
            ErrorMessage : action.errorMessage
        }
    })
)

export function SignUpReducer(state:any, action:any){

    return _SignUpReducer(state,action)
}