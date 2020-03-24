import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import postsReducer from './postsReducer'

export default combineReducers({
  Posts: postsReducer,
  form: formReducer
});
