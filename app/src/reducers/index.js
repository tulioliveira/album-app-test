import { combineReducers } from 'redux';
import LayoutReducer from './LayoutReducer';
import SheetReducer from './SheetReducer';

export default combineReducers({
  layout: LayoutReducer,
  sheet: SheetReducer
});
