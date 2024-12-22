import { createReducer, on } from "@ngrx/store"
import { CounterinitialState } from "./counter.state"
import { decrimentAction, incrimentAction, inputAction, resetAction } from "./counter.action"

const _counterReducer = createReducer(CounterinitialState,

    on(incrimentAction, (state,action)=>{
        return {
            ...state,
            count : state.count + 1
        }
    }),

    on(decrimentAction, (state,action)=>{
        return {
            ...state,
            count : state.count - 1
        }
    }),

    on(resetAction , (state,action)=>{
        return {
            ...state,
            count : 0
        }
    }),

    on(inputAction, (state,action)=>{

        return {
            ...state,
            count : state.count + action.value
        }
    })
)

export function counterReducer(state:any , action:any){
    return _counterReducer(state,action)
}