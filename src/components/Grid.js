import React from 'react';
import Box from './Box';

export default function Grid({ boxes, rowIndex }) {
  return boxes.map((_, columnIndex) => {
    return (
      <div key={`row_${rowIndex}_col${columnIndex}`}>
        <Box rowIndex={ rowIndex } columnIndex={ columnIndex }/>
      </div>
    );
  });
}
