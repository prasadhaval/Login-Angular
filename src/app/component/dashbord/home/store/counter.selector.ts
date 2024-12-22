import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterinitialStateInterface } from "../model/counter.model";

const createCounterFeatureSelector = createFeatureSelector<CounterinitialStateInterface>('counter')


export const counterSelector = createSelector(createCounterFeatureSelector , state=>{
    return state.count
})