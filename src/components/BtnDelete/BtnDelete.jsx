import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class BtnDelete extends Component {
  handleClickBtn = () => {
    const { onClickDelete, id } = this.props;
    onClickDelete(id);
  }

  render() {
    return (
      <div className="btnDel" onClick={this.handleClickBtn} />
    );
  }
}

BtnDelete.propTypes = {
  id: PropTypes.number.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default BtnDelete;
