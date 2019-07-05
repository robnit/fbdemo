import { GET_SQUARES, SELECT_SQUARE } from './reducer';
import { generateGrid, toggle } from '../utils';

export function getBoxes() {
  const grid = generateGrid(14);
  return dispatch => {
    return dispatch({
      type: GET_SQUARES,
      payload: grid,
    });
  };
}

export function selectBox(row, col) {
  return (dispatch, getState) => {
    const oldGrid = getState().grid;
    const newGrid = toggle(row, col, oldGrid);
    return dispatch({
      type: SELECT_SQUARE,
      payload: newGrid,
    });
  };
}