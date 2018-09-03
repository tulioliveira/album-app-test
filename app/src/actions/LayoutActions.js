import _ from 'lodash';
import math from 'mathjs';
import { RENDER_LAYOUT, RESET_LAYOUT } from './types';
import { getLayoutGrid } from '../providers/layout';
import { pushMessage } from './FlashActions';

/**
 * "Render Layout" action creator, mapping the inputted layout to a grid to be
 * displayed by react-grid-layout. If there is an error with the layout, it's
 * dispatched to the Error reducer.
 * @param {array} layout - The layout to be rendered
 * @return {Function} - Thunk
 */
export const renderLayout = layout => (dispatch, getState) => {
  const { sheet } = getState(); // Get the current sheet from store
  const payload = getLayoutGrid(layout, sheet);

  // Error
  if (typeof payload === 'string') {
    // Dispatch Error Message
    dispatch(pushMessage('error', payload));

    // Default Grid, using layout [[1, 2, 3, ..., n]]
    const defaultGrid = getLayoutGrid([math.add(_.times(sheet.length), 1)], sheet);
    dispatch({ type: RENDER_LAYOUT, payload: defaultGrid });
  }
  else {
    dispatch({ type: RENDER_LAYOUT, payload });
  }
};

/**
 * "Reset Layout" action cretor
 * @return {Object} - "Reset Layout" action
 */
export const resetLayout = () => ({ type: RESET_LAYOUT });
