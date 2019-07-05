import { GET_SQUARES, SELECT_SQUARE } from './reducer';
import { generateRow, toggle } from '../utils';

export function getBoxes() {
  const size = 14;
  const grid = generateRow(size);

  return dispatch => {
    return dispatch({
      type: GET_SQUARES,
      payload: { grid, size }
    });
  };
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