import { GET_SQUARES, SELECT_SQUARE } from './reducer';
import { generateGrid } from '../utils';

export function getSquares() {
  const grid = generateGrid(14);
  return dispatch => {
    return dispatch({
      type: GET_SQUARES,
      payload: grid,
    });
  };
}

export function selectSquare(coords) {
  return dispatch => {
    return dispatch({
      type: SELECT_SQUARE,
      payload: coords,
    });
  };
}