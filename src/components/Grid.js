import React from 'react';
import Box from './Box';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return props;
}

function Grid({ boxes, rowIndex, handleToggle }) {
  return boxes.map((value, columnIndex) => {
    const handleClick = () => handleToggle(rowIndex, columnIndex);

    return (
      <div key={`${Math.random()}row_${rowIndex}_col${columnIndex}`}>
        <Box onClick={handleClick} on={ value } />
      </div>
    );
  });
}

export default connect(mapStateToProps)(Grid);
