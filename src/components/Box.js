import React from 'react';
import { connect } from 'react-redux';
import { selectBox } from '../firebase/api.js';

function mapStateToProps(state, props) {
  const { rowIndex, columnIndex } = props;
  return {
    isOn: state.grid[rowIndex][columnIndex],
  };
}

function Box({ isOn, rowIndex, columnIndex }) {
  const handleClick = () => selectBox(rowIndex, columnIndex);

  return <div className={ `box ${isOn ? 'on' : 'off'}`} onClick={ handleClick } />;
}

export default connect(mapStateToProps)(Box);
