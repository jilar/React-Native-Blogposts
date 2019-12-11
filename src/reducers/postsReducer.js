import {DELETE_POST,EDIT_POST,ADD_POST} from '../actions/types';

const INITIAL_STATE=[
  {title: 'Blog Post #1',id:1, content: "filler content of blog 1"},
  {title: 'Blog Post #2',id:2, content: "filler content of blog 2"},
  {title: 'Blog Post #3',id:3, content: "filler content of blog 3"}
];

export default (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case DELETE_POST:
      return state.filter((item)=>item.id !== action.payload);
    case ADD_POST:
      return [...state, action.payload];
    case EDIT_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
