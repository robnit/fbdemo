export const GET_SQUARES = 'GET_SQUARES';
export const SELECT_SQUARE = 'SELECT_SQUARE';

export default function (state = { grid: [] }, { type, payload }) {
  switch(type) {
  case GET_SQUARES: {
    return { ...state, grid: [ ...payload ] };
  }
  case SELECT_SQUARE:
  default:
    return state;
  }
}