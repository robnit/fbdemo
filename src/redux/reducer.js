export const GET_BOXES = 'GET_BOXES';
export const SELECT_SQUARE = 'SELECT_SQUARE';

export default function (state = { grid: [] }, { type, payload }) {
  switch(type) {
  case SELECT_SQUARE:
  case GET_BOXES: {
    return { ...state, ...payload };
  }
  default:
    return state;
  }
}