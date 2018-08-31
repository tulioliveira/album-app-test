import {
  RENDER_LAYOUT,
  RESET_LAYOUT
} from '../actions/types';
import reducer from './LayoutReducer';

describe('Layout reducer tests', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return the new layout', () => {
    expect(reducer([], {
      type: RENDER_LAYOUT,
      payload: [[1, 2, 3]]
    })).toEqual([[1, 2, 3]]);
  });

  it('should reset to initial state', () => {
    expect(reducer([[3, 2, 0, 1]], {
      type: RESET_LAYOUT,
    })).toEqual([]);
  });
});
