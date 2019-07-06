import { gridRef } from './firebase.js';
import { generateRow, toggle } from '../utils';


export function generateBoxes() {
  const size = Number(prompt('how big?'));

  if (typeof size !== 'number') return null;

  const newGrid = generateRow(size);
  gridRef.set(newGrid);
}

export function selectBox(row, col) {
  return (_, getState) => {
    const oldGrid = getState().grid;
    const newGrid = toggle(row, col, oldGrid);

    gridRef.set(newGrid);
  };
}