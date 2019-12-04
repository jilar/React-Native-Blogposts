import {
  DELETE_POST,
  SHOW_POSTS,
  ADD_POST
} from './types'

export const deletePost= (str) =>{
  return{
    type:DELETE_POST,
    payload:str
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
