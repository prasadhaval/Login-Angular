import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LogininitialStateInterface } from "./login.state";


const loginCreateFeatureSelector = createFeatureSelector<LogininitialStateInterface>('login')

export const errorMessageSelector = createSelector(loginCreateFeatureSelector , state=>{
    return state.errorMessage
})