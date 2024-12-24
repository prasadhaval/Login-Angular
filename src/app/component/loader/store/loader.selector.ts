import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoaderinitialStateInterface } from "./loader.state";

const LoaderCreateFeatureSelector = createFeatureSelector<LoaderinitialStateInterface>('loader')

export const getLoaderCreateSelector = createSelector(LoaderCreateFeatureSelector , state=>{
  return  state.loader
})