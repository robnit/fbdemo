import React from 'react'
import Box from './Box'

export default function Grid({ boxes, rowIndex, handleToggle }) {
  return boxes.map((value, columnIndex) => {
    const handleClick = () => handleToggle(rowIndex, columnIndex);

    return (
      <div key={`row_${rowIndex}_col${columnIndex}`}>
        <Box onClick={handleClick} on={ value } />
      </div>
    );
  });
}
