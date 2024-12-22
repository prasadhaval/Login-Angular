import { createAction, createFeatureSelector, createSelector } from "@ngrx/store";
import { AboutinitialStateInterface } from "../model/about.model";

 const AboutCreateFeatureSelector = createFeatureSelector<AboutinitialStateInterface>('about')

 export const getAboutselector = createSelector(AboutCreateFeatureSelector, state=>{
    return state.post
 })


 export const editeAboutselector = createSelector(AboutCreateFeatureSelector, (state:any,action:any)=>{
      return state.post.find((ele:any)=> ele.id === action.id)
 })
