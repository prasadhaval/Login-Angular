import { createReducer, on } from "@ngrx/store"
import { LogininitialState } from "./login.state"
import { LoginFaileAction, LoginSuccessAction } from "./login.action"

const _LoginReducer = createReducer(LogininitialState,

    on(LoginSuccessAction , (state,action)=>{        
        return {
            ...state,
            User : action.user
        }
    }),

    on(LoginFaileAction , (state,action)=>{
        return {
            ...state,
            errorMessage : action.errorMessage
        }
    })
)

export function LoginReducer(state:any, action:any){
    return _LoginReducer(state,action)
}