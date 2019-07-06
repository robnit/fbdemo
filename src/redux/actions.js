import { GET_BOXES } from './reducer';
import { gridRef } from '../api/firebase.js';

export function watchGrid(dispatch) {
  return gridRef.on('value', (data) => {
    const grid = data.val();
    const size = grid.length;

    const payload = { grid, size };
    dispatch({ type: GET_BOXES, payload });
  });
}
