import {
  PUSH_IMAGE,
  REMOVE_IMAGE,
  RESET_SHEET
} from '../actions/types';
import reducer from './SheetReducer';

describe('Layout reducer tests', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return the new sheet with image 3', () => {
    expect(reducer([1, 1, 2], {
      type: PUSH_IMAGE,
      payload: 3
    })).toEqual([1, 1, 2, 3]);
  });

  it('should remove index 2 of the sheet', () => {
    expect(reducer([1, 1, 2, 3], {
      type: REMOVE_IMAGE,
      payload: 2
    })).toEqual([1, 1, 3]);
  });

  it('should reset to initial state', () => {
    expect(reducer([1, 1, 2, 3], {
      type: RESET_SHEET,
    })).toEqual([]);
  });
});
