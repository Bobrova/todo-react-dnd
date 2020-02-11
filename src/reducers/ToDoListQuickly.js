import {
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  UPDATE_LIST_QUICKLY,
} from '../constants/ActionTypes';

const initialState = localStorage.getItem('todoApp-redux')
  ? JSON.parse(localStorage.getItem('todoApp-redux')).todoQuickly
  : [];

export default function todoQuickly(state = initialState, action) {
  switch (action.type) {
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case COMPLETE_ALL_TODOS: {
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked,
      }));
    }

    case EDIT_TODO:
      return state.map(todo => (todo.id === action.id
        ? { ...todo, title: action.text }
        : todo));

    case COMPLETE_TODO:
      return state.map(todo => (todo.id === action.id
        ? { ...todo, completed: !todo.completed }
        : todo));

    case UPDATE_LIST_QUICKLY:
      return action.list;
      
    default:
      return state;
  }
}
