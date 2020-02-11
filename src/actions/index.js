import * as types from '../constants/ActionTypes';

export const addTodo = task => ({ type: types.ADD_TODO, task });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS });
export const updateListQuickly = list => ({ type: types.UPDATE_LIST_QUICKLY, list });
export const updateListUsual = list => ({ type: types.UPDATE_LIST_USUAL, list });
export const taskTransfer = task => ({ type: types.TASK_TRANSFER, task });

