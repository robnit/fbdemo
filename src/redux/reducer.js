import { generateGrid } from '../utils';

const initialState = { grid: generateGrid(15) };

export default function (state = initialState, { type, payload }) {
  switch(type) {
  default:
    return state;
  }
}