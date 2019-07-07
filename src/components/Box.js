import React from 'react';
import { connect } from 'react-redux';
import { selectBox } from '../api';

function mapStateToProps(state, props) {
  const { rowIndex, columnIndex } = props;
  const isOn = state.grid[rowIndex][columnIndex];
  return { grid: state.grid, isOn };
}

function Box({ isOn, rowIndex, columnIndex, grid }) {
  const handleClick = () => selectBox(rowIndex, columnIndex, grid);
  return <div className={ `box ${isOn ? 'on' : 'off'}`} onClick={ handleClick } />;
}

export default connect(mapStateToProps)(Box);
