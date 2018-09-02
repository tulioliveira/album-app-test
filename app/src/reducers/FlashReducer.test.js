import {
  PUSH_MESSAGE,
  REMOVE_MESSAGE,
  RESET_MESSAGES
} from '../actions/types';
import reducer from './FlashReducer';

describe('Flash Messages reducer tests', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return the new flash array with error message', () => {
    expect(reducer([], {
      type: PUSH_MESSAGE,
      payload: {
        type: 'error',
        message: 'This is an error message'
      }
    })).toEqual([
      {
        type: 'error',
        message: 'This is an error message'
      }
    ]);
  });

  it('should remove index 2 of the flash array', () => {
    expect(reducer([
      {
        type: 'error',
        message: 'This is an error message'
      },
      {
        type: 'info',
        message: 'This is an info message'
      },
      {
        type: 'success',
        message: 'This is a success message'
      },
      {
        type: 'warning',
        message: 'This is an warning message'
      },
    ], {
      type: REMOVE_MESSAGE,
      payload: 2
    })).toEqual([
      {
        type: 'error',
        message: 'This is an error message'
      },
      {
        type: 'info',
        message: 'This is an info message'
      },
      {
        type: 'warning',
        message: 'This is an warning message'
      },
    ]);
  });

  it('should reset to initial state', () => {
    expect(reducer([
      {
        type: 'error',
        message: 'This is an error message'
      },
      {
        type: 'info',
        message: 'This is an info message'
      },
      {
        type: 'success',
        message: 'This is a success message'
      },
      {
        type: 'warning',
        message: 'This is an warning message'
      },
    ], {
      type: RESET_MESSAGES,
    })).toEqual([]);
  });
});
