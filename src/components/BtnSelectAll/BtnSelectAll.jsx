import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function BtnSelectAll(props) {
  const { isAllChecked, completeAllTodos } = props;
  const classActive = isAllChecked ? 'active' : '';
  return (
    <div className={`checked-items ${classActive}`} onClick={completeAllTodos}>{String.fromCharCode(709)}</div>
  );
}

BtnSelectAll.propTypes = {
  isAllChecked: PropTypes.bool.isRequired,
  completeAllTodos: PropTypes.func.isRequired,
};

export default BtnSelectAll;
