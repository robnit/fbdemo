import { gridRef, inputRef } from './firebase.js';
import { generateGrid } from '../utils';


export function generateBoxes() {
  // const size = Number(prompt('how big?'));
  // if (typeof size !== 'number') return null;
  const size = 15;
  const newGrid = generateGrid(size);
  inputRef.set(newGrid).then(() => {
    gridRef.set(newGrid);
  });
}

export function selectBox(row, col) {
  const targetRef = inputRef.child(row).child(col);
  targetRef.once('value', (data) => {
    targetRef.set(!data.val());
  });
}
