export const GET_SQUARES = 'GET_SQUARES';

export default function (state = { grid: {} }, { type, payload }) {
  switch(type) {
  case 'GET_SQUARES': {
    return { ...state, grid: { ...payload } };
  }
  default:
    return state;
  }
}