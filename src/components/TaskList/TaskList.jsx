import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemTaskList from '../ItemTaskList';
import { reorder } from '../../constants/constantsFunc';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import './style.css';

const TaskList = (props) => {
  const {
    quicklyList,
    usualList,
    actions,
  } = props;

  const {
    deleteTodo,
    completeTodo,
    editTodo,
    updateListUsual,
    updateListQuickly,
  } = actions;

  const quicklyListItem = quicklyList.map((item, index) => (
    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          key={item.id}
          className={snapshot.isDragging ? "list-item draggedItem" : "list-item"}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ItemTaskList
            todolist={item}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
          />
        </li>
      )}
    </Draggable>
  ));

  const usualListItem = usualList.map((item, index) => (
    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => (
        <li
          key={item.id}
          className={snapshot.isDragging ? "list-item draggedItem" : "list-item"}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ItemTaskList
            todolist={item}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
          />
        </li>
      )}
    </Draggable>
  ));

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const getList = id => id === 'droppable1' ? props.usualList : props.quicklyList;
  const emptyListText = <li><p className='emptyListText'>Тут ничего нет</p></li>;
  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
        return;
    }
    if (source.droppableId === destination.droppableId && source.droppableId === 'droppable1') {
      const items = reorder(
          usualList,
          source.index,
          destination.index
      );
      updateListUsual(items);
    }
    if (source.droppableId === destination.droppableId && source.droppableId === 'droppable2') {
      const items = reorder(
          quicklyList,
          source.index,
          destination.index
      );
        updateListQuickly(items);
    }
    if (source.droppableId !== destination.droppableId) {
      const result = move(
          getList(source.droppableId),
          getList(destination.droppableId),
          source,
          destination
      );
      updateListQuickly(result.droppable2);
      updateListUsual(result.droppable1);
    }
  };
  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable1">
        {(provided, snapshot) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="main__task-list"
        >
          {usualListItem.length === 0 ? emptyListText : usualListItem}
          {provided.placeholder}
        </ul>
        )}
        </Droppable>
        <Droppable droppableId="droppable2">
        {(provided, snapshot) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="main__task-list"
        >
          {quicklyListItem.length === 0 ? emptyListText : quicklyListItem}
          {provided.placeholder}
        </ul>
        )}
        </Droppable>
      </DragDropContext>
    </Fragment>
    );
};

TaskList.propTypes = {
  isCheckedExists: PropTypes.bool.isRequired,
  countActiveItem: PropTypes.number.isRequired,
  quicklyList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  usualList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  actions: PropTypes.object.isRequired,
};

export default TaskList;
