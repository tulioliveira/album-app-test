import _ from 'lodash';
import {
  RENDER_LAYOUT,
  PUSH_SHEET_IMAGE,
  REMOVE_SHEET_IMAGE,
  RESET_LAYOUT
} from '../actions/types';

const INITIAL_STATE = {
  layout: [],
  sheet: []
};

/**
 * High order function that checks if target index is different than current iterand index
 * @param {number} target - Target index
 * @return {function} - Predicate function
 */
const ifIndexDifferent = target => (item, index) => (index !== target);

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RENDER_LAYOUT:
      return { ...state, layout: action.payload };
    case PUSH_SHEET_IMAGE:
      return {
        ...state,
        sheet: [
          ...state.sheet,
          action.payload
        ]
      };
    case REMOVE_SHEET_IMAGE:
      return {
        ...state,
        sheet: _.remove([...state.sheet], ifIndexDifferent(action.payload))
      };
    case RESET_LAYOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
