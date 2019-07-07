export const GET_GRID = 'GET_GRID';
export const SELECT_BOX = 'SELECT_BOX';

export default function (state = { grid: [] }, { type, payload }) {
  switch(type) {
  case SELECT_BOX:
  case GET_GRID: {
    return { ...state, ...payload };
  }
  default:
    return state;
  }
}