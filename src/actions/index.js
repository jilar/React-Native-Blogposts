import {
  DELETE_POST,
  SHOW_POSTS,
  ADD_POST,
  EDIT_POST
} from './types'

export const deletePost= (id) =>{
  return{
    type:DELETE_POST,
    payload:id
  }
}

export const showPosts= () =>{
  return{
    type:SHOW_POSTS,
    payload:str
  }
}

export const addPost= (post) =>{
  return{
    type:ADD_POST,
    payload:post
  }
}

export const editPost= (post) =>{
  return{
    type:EDIT_POST,
    payload:post
  }
}
