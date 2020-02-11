import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function BtnSelectAll(props) {
  const { isAllChecked, completeAllTodos } = props;
  const classActive = isAllChecked ? 'active' : '';

  const handleClickBtn = () => {
    completeAllTodos(isAllChecked);
  }
  return (
    <div className={`checked-items ${classActive}`} onClick={handleClickBtn}>{String.fromCharCode(709)}</div>
  );
}

BtnSelectAll.propTypes = {
  isAllChecked: PropTypes.bool.isRequired,
  completeAllTodos: PropTypes.func.isRequired,
};

export default BtnSelectAll;
