import countReducer from './count-reducer';
import toDosReducer from './todo-reducer';
import { combineReducers } from 'redux';

const bungeBooksReducer = combineReducers({
  count: countReducer,
  toDos: toDosReducer
});

export default bungeBooksReducer;
