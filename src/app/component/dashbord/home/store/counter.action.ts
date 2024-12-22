import { createAction, props } from "@ngrx/store"

const incriment = '[counter] incriment'
const decriment = '[counter] decriment'
const reset = '[counter] reset'
const input = '[counter] input'

export const incrimentAction = createAction(incriment)
export const decrimentAction = createAction(decriment)
export const resetAction = createAction(reset)
export const inputAction = createAction(input ,  props<{value : number}>())