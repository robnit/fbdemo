import { gridRef } from './database.js';
import { generateGrid, toggle } from '../utils';


export function generateBoxes() {
  // const size = Number(prompt('how big?'));
  // if (typeof size !== 'number') return null;
  const size = 30;
  const newGrid = generateGrid(size);
  gridRef.set(newGrid);
}

export function selectBox(row, col) {
  gridRef.transaction((oldGrid) => {
    return (oldGrid !== null) ? toggle(row, col, oldGrid) : 'Unexpected Value :(';
  });
}