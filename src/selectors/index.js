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
    let maxtodoUsual = todoUsual.length !== 0 ? (todoUsual.reduce((acc, curr) => acc.id > curr.id ? acc : curr)).id : 0;
    let maxtodoQuickly = todoQuickly.length !== 0 ? (todoQuickly.reduce((acc, curr) => acc.id > curr.id ? acc : curr)).id : 0;
    return Math.max(maxtodoUsual, maxtodoQuickly);
  },
);
