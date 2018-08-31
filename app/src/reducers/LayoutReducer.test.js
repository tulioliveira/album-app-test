import {
  RENDER_LAYOUT,
  PUSH_SHEET_IMAGE,
  REMOVE_SHEET_IMAGE,
  RESET_LAYOUT
} from '../actions/types';
import reducer from './LayoutReducer';

describe('Layout reducer tests', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      layout: [],
      sheet: []
    });
  });

  it('should return the new layout', () => {
    expect(reducer({
      layout: [],
      sheet: [0, 1, 2]
    }, {
      type: RENDER_LAYOUT,
      payload: [[1, 2, 3]]
    })).toEqual({
      layout: [[1, 2, 3]],
      sheet: [0, 1, 2]
    });
  });

  it('should return the new sheet with image 4', () => {
    expect(reducer({
      layout: [],
      sheet: [0, 1, 2]
    }, {
      type: PUSH_SHEET_IMAGE,
      payload: 4
    })).toEqual({
      layout: [],
      sheet: [0, 1, 2, 4]
    });
  });

  it('should remove index 3 of the sheet', () => {
    expect(reducer({
      layout: [],
      sheet: [0, 1, 2, 4]
    }, {
      type: REMOVE_SHEET_IMAGE,
      payload: 3
    })).toEqual({
      layout: [],
      sheet: [0, 1, 2]
    });
  });

  it('should reset to initial state', () => {
    expect(reducer({
      layout: [[3, 2, 0, 1]],
      sheet: [0, 1, 2, 4]
    }, {
      type: RESET_LAYOUT,
    })).toEqual({
      layout: [],
      sheet: []
    });
  });
});
