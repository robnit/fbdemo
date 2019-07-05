import { GET_BOXES, SELECT_SQUARE } from './reducer';
import { generateRow, toggle } from '../utils';
import { gridRef } from '../api/firebase.js';


export function generateBoxes() {
  const size = 14;
  const grid = generateRow(size);

  return dispatch => {
    return dispatch({
      type: GET_BOXES,
      payload: { grid, size }
    });
  };
}


export function watchGrid(dispatch) {
  return gridRef.on('value', (data) => {
    const grid = data.val();
    const size = grid.length;

    const payload = { grid, size };
    dispatch({ type: GET_BOXES, payload });
  });
}

export function selectBox(row, col) {
  return (dispatch, getState) => {
    const oldGrid = getState().grid;
    const newGrid = toggle(row, col, oldGrid);

    gridRef.set(newGrid);
  };
}

