import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY_CODE } from '../../constants/constants';
import './style.css';

class Textarea extends Component {
  handleKeyPress = (e) => {
    const { addTodo, itemId } = this.props;
    const text = e.target.value;
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      if (text !== '' && /\S/.test(text)) {
        e.target.value = '';
        const task = { id: itemId + 1, title: text, completed: false };
        addTodo(task);
      }
    }
  }

  render() {
    return (
      <textarea
        wrap="off"
        className="main__input-area"
        placeholder="What needs to be done?"
        onKeyDown={this.handleKeyPress}
      />
    );
  }
}

Textarea.propTypes = {
  addTodo: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired,
};

export default Textarea;
