import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SignUPinitialStateInterface } from "./signup.state";

const signupcreateFeatureSelector = createFeatureSelector<SignUPinitialStateInterface>('signup')

export const getsignUpErrorMessage = createSelector(signupcreateFeatureSelector, state=>{
    return state.ErrorMessage
})