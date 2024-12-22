import { createAction, props } from "@ngrx/store"
import { Post } from "../model/about.model"

const post = '[about] post'
const updatePost = '[about] update'
const deletePost = '[about] delete'


export const postAction = createAction(post, props<{obj : Post}>())
export const updateAction = createAction(updatePost, props<{obj : Post}>())
export const deleteAction = createAction(deletePost , props<{id : string}>())