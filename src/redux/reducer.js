import { generateGrid } from '../utils';

const initialState = { grid: generateGrid(15) };
export const GET_SQUARES = 'GET_SQUARES';

export default function (state = initialState, { type, payload }) {
  switch(type) {
  case 'GET_SQUARES': {
    return { ...state, grid: { ...payload } };
  }
  default:
    return state;
  }
}