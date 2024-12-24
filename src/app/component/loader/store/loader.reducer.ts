import { createReducer, on } from "@ngrx/store"
import { LoaderinitialState } from "./loader.state"
import { LOADING_ACTION } from "./loader.action"

const _LoaderReaducer = createReducer(LoaderinitialState,
    on(LOADING_ACTION , (state,action)=>{

        return{
            ...state,
            loader : action.loader
        }
    })
)

export function LoaderReaducer(state:any , action:any){
    return _LoaderReaducer(state,action)
}