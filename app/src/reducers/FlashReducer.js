import _ from 'lodash';
import {
  PUSH_MESSAGE,
  REMOVE_MESSAGE,
  RESET_MESSAGES
} from '../actions/types';

const INITIAL_STATE = [];

/**
 * High order function that checks if target index is different than current iterand index
 * @param {number} target - Target index
 * @return {function} - Predicate function
 */
const ifIndexDifferent = target => (item, index) => (index !== target);

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUSH_MESSAGE:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_MESSAGE:
      return _.remove([...state], ifIndexDifferent(action.payload));
    case RESET_MESSAGES:
      return [...INITIAL_STATE];
    default:
      return state;
  }
};
