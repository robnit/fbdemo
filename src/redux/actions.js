import { GET_SQUARES, SELECT_SQUARE } from './reducer';
import { generateRow, toggle } from '../utils';
import { gridRef } from '../api/firebase.js';


export function generateBoxes() {
  const size = 14;
  const grid = generateRow(size);

  return dispatch => {
    return dispatch({
      type: GET_SQUARES,
      payload: { grid, size }
    });
  };
}


export function watchGrid(dispatch) {
  return gridRef.on('value', (data) => {
    const grid = data.val();
    const size = grid.length;

    const payload = { grid, size };
    dispatch({ type: GET_SQUARES, payload });
  });
}

export function selectBox(row, col) {
  return (dispatch, getState) => {
    const oldRow = getState().grid;
    const newRow = toggle(row, col, oldRow);

    return dispatch({
      type: SELECT_SQUARE,
      payload: newRow,
    });
  };
}