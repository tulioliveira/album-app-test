import {
  RENDER_LAYOUT,
  RESET_LAYOUT
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RENDER_LAYOUT:
      return [...action.payload];
    case RESET_LAYOUT:
      return [...INITIAL_STATE];
    default:
      return state;
  }
};
