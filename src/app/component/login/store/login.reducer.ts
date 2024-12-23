import { createReducer, on } from "@ngrx/store"
import { LogininitialState } from "./login.state"
import { LoginSuccessAction } from "./login.action"

const _LoginReducer = createReducer(LogininitialState,

    on(LoginSuccessAction , (state,action)=>{        
        return {
            ...state,
            User : action.user
        }
    })
)

export function LoginReducer(state:any, action:any){
    return _LoginReducer(state,action)
}