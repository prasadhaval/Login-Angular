import { createAction, props } from "@ngrx/store"

const LOADING = '[LOADER] VALUE'


export const LOADING_ACTION = createAction(LOADING , props<{loader : boolean}>())