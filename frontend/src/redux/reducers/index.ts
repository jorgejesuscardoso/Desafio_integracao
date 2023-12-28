import { combineReducers } from 'redux';
import { newPost } from './reducer';

const rootReducer = combineReducers({
  newPost: newPost,
});

export default rootReducer;
