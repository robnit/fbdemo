export const GET_BOXES = 'GET_BOXES';

export default function (state = { grid: [] }, { type, payload }) {
  switch(type) {
  case GET_BOXES: {
    return { ...state, ...payload };
  }
  default:
    return state;
  }
}