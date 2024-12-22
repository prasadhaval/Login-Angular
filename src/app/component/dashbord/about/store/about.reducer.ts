import { createReducer, on } from "@ngrx/store"
import { AboutinitialState } from "./about.state"
import { deleteAction, postAction, updateAction } from "./about.action"

const _Aboutreducer = createReducer(AboutinitialState,

    on(postAction , (state,action)=>{

        const  postData = {...action.obj}
        postData.id = (state.post.length + 1).toString()

        return {
            ...state,
            post : [...state.post , postData]
        }
    }),

    on(updateAction , (state,action)=>{
        const updatedata = state.post.map((ele)=> ele.id === action.obj.id? action.obj : ele)
        return {
            ...state,
            post : [...updatedata]
        }
    }),

    on(deleteAction , (state , action)=>{
        
        const deleteobj = state.post.filter((ele)=> ele.id !== action.id)

        return {
            ...state,
            post : deleteobj
        }
    })
)


export function AboutReducer(state:any,action:any){

    return _Aboutreducer(state,action)
}