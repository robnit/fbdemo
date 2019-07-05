import { GET_SQUARES, SELECT_SQUARE } from './reducer';
import { generateGrid, toggle } from '../utils';

export function getSquares() {
  const grid = generateGrid(14);
  return dispatch => {
    return dispatch({
      type: GET_SQUARES,
      payload: grid,
    });
  };
}

export function selectSquare(row, col) {
  return (dispatch, getState) => {
    const oldGrid = getState().grid;
    const newGrid = toggle(row, col, oldGrid);
    return dispatch({
      type: SELECT_SQUARE,
      payload: newGrid,
    });
  };
}