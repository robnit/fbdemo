import React from 'react';
import { connect } from 'react-redux';
import { selectSquare } from '../redux/actions';
import Box from './Box';

function mapStateToProps(state, props) {
  return props;
}

function Grid({ boxes, rowIndex, handleToggle, dispatch }) {
  return boxes.map((value, columnIndex) => {
    const handleClick = () => dispatch(selectSquare(rowIndex, columnIndex));

    return (
      <div key={`row_${rowIndex}_col${columnIndex}`}>
        <Box onClick={handleClick} on={ value } />
      </div>
    );
  });
}

export default connect(mapStateToProps)(Grid);
