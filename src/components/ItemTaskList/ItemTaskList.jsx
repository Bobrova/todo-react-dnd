import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BtnDelete from '../BtnDelete';
import { ENTER_KEY_CODE } from '../../constants/constants';
import './style.css';

class ItemTaskList extends Component {
  state = {
    idEdit: 0,
    valueBeforeEdit: '',
  };

  handleClickCheckbox = () => {
    const { completeTodo, todolist } = this.props;
    completeTodo(todolist.id);
  }

  handleKeyPress = (e) => {
    const { deleteTodo, todolist, editTodo } = this.props;
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      const text = e.target.value.trim();
      if (text === '') return deleteTodo(todolist.id);
      if (text !== '' && /\S/.test(text)) {
        e.target.value = '';
        editTodo(todolist.id, text);
        this.setState({
          idEdit: 0,
        });
      }
    }
  }

  handleInputBlur = (e) => {
    const { deleteTodo, todolist, editTodo } = this.props;
    const text = e.target.value.trim();
    if (text === '') return deleteTodo(todolist.id);
    e.target.value = '';
    editTodo(todolist.id, text);
    this.setState({
      idEdit: 0,
    });
  }

  handleInputChange = (e) => {
    this.setState({ valueBeforeEdit: e.target.value });
  }

  handleDoubleClick = () => {
    const { todolist } = this.props;

    this.setState({
      idEdit: todolist.id,
      valueBeforeEdit: todolist.title,
    });
  }

  render() {
    const { idEdit, valueBeforeEdit } = this.state;
    const { todolist, deleteTodo } = this.props;
    const { completed } = todolist;
    const isEdit = (todolist.id === idEdit);

    return (
      <React.Fragment>
        {isEdit ? (
          <input
            type="text"
            autoFocus
            className="text-editing"
            value={valueBeforeEdit}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyPress}
            onBlur={this.handleInputBlur}
          />
        ) : (
          <div className="listItemWrapper">
            <input
              type="checkbox"
              id={todolist.id}
              checked={completed}
              className="list-checkbox"
              onChange={this.handleClickCheckbox}
            />
            <label htmlFor={todolist.id} />
            <span className="task-list_text" onDoubleClick={this.handleDoubleClick}>{todolist.title}</span>
            <BtnDelete onClickDelete={deleteTodo} id={todolist.id} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

ItemTaskList.propTypes = {
  todolist: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default ItemTaskList;
