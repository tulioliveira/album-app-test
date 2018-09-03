import { combineReducers } from 'redux';
import LayoutReducer from './LayoutReducer';
import SheetReducer from './SheetReducer';
import FlashReducer from './FlashReducer';

export default combineReducers({
  layout: LayoutReducer,
  sheet: SheetReducer,
  flash: FlashReducer
});
