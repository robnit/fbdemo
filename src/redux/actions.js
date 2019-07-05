import { GET_SQUARES } from './reducer';
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