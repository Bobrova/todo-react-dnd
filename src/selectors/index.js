import { createSelector } from 'reselect';

const getTodosUsual = (state) => state.todoUsual;
const getTodosQuickly = (state) => state.todoQuickly;

export const getcountActiveItem = createSelector(
  [getTodosUsual],
  todoUsual => {
    return (todoUsual.filter(itemList => !itemList.completed)).length;
  },
);

export const isCheckedExists = createSelector(
  [getTodosUsual],
  todoUsual => {
    return (todoUsual.filter(itemList => itemList.completed)).length !== 0;
  },
);

export const getCurrentId = createSelector(
  [getTodosUsual, getTodosQuickly],
  (todoUsual,todoQuickly) => {
    return Math.max(todoUsual.length !== 0 ? todoUsual[todoUsual.length - 1].id : 0, todoQuickly.length !== 0 ? todoQuickly[todoQuickly.length - 1].id : 0);
  },
);
