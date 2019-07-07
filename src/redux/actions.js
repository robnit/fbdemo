import { GET_GRID, SELECT_BOX } from './reducer';
import { generateRow, toggle } from '../utils';

export function getGrid() {
  const size = 14;
  const grid = generateRow(size);

  return dispatch => {
    return dispatch({
      type: GET_GRID,
      payload: { grid, size }
    });
  };
}

export function selectBox(row, col) {
  return (dispatch, getState) => {
    const oldGrid = getState().grid;
    const newGrid = toggle(row, col, oldGrid);

    return dispatch({
      type: SELECT_BOX,
      payload: newGrid,
    });
  };
}