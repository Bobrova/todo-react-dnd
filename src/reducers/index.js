import { combineReducers } from 'redux';

import todoQuickly from './ToDoListQuickly';
import todoUsual from './ToDoListUsual';

export default combineReducers({
  todoUsual,
  todoQuickly,
});
