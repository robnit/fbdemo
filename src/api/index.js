import { gridRef } from './firebase.js';
import { generateGrid, toggle } from '../utils';


export function generateBoxes() {
  // const size = Number(prompt('how big?'));
  // if (typeof size !== 'number') return null;
  const size = 30;
  const newGrid = generateGrid(size);
  gridRef.set(newGrid);
}

export function selectBox(row, col, grid) {
  const newGrid = toggle(row, col, grid);
  gridRef.set(newGrid);
}