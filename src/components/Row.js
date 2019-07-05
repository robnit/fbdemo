import React from 'react';
import Box from './Box';

export default function Row({ rowIndex, gridSize }) {
  const boxes = [];
  for (let i = 0; i < gridSize; i++) {
    boxes.push(i);
  }

  return boxes.map((columnIndex) => {
    return (
      <div key={`${rowIndex}_${columnIndex}`}>
        <Box rowIndex={ rowIndex } columnIndex={ columnIndex }/>
      </div>
    );
  });
}
