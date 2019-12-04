import {DELETE_POST,SHOW_POSTS,ADD_POST} from '../actions/types';

const INITIAL_STATE=[
  {title: 'Blog Post #1'},
  {title: 'Blog Post #2'},
  {title: 'Blog Post #3'}
];

export default (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case DELETE_POST:
      return [...state, action.payload];
    case ADD_POST:
      return [...state, action.payload];
    case SHOW_POSTS:
      return state;
    default:
      return state;
  }
}
