import count from './count-reducer';
import toDos from './todo-reducer';
import { combineReducers } from 'redux';

const bungeBooksReducer = combineReducers({
  count,
  toDos
});

export default bungeBooksReducer;
