export const GET_SQUARES = 'GET_SQUARES';
export const SELECT_SQUARE = 'SELECT_SQUARE';

export default function (state = { grid: [] }, { type, payload }) {
  switch(type) {
  case SELECT_SQUARE:
  case GET_SQUARES: {
    return { ...state, grid: [ ...payload ] };
  }
  default:
    return state;
  }
}