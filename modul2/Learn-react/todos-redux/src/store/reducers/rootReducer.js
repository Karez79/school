import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import uiReducer from './uiReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  ui: uiReducer,
  filters: filtersReducer,
});

export default rootReducer;