import React from 'react';
import { connect } from 'react-redux';
import { selectBox } from '../redux/actions';

function mapStateToProps(state, props) {
  const { rowIndex, columnIndex } = props;
  const isOn = state.grid[rowIndex][columnIndex];
  return { isOn };
}

function Box({ isOn, dispatch, rowIndex, columnIndex }) {
  const handleClick = () => dispatch(selectBox(rowIndex, columnIndex));
  return (
    <div className={ `box ${isOn ? 'on' : 'off'}`} onClick={ handleClick }></div>
  );
}

export default connect(mapStateToProps)(Box);
