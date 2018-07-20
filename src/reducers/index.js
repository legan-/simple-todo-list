import { combineReducers } from 'redux';
import Types from './../constants/ActionTypes';


const items = (state = {}, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return {
        ...state,
        ...action.data
      }
    case Types.TOGGLE_ITEM:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isChecked: !state[action.id].isChecked
        }
      }
    case Types.REMOVE_ITEM:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isRemoved: !state[action.id].isRemoved
        }
      }
    default:
      return state;
  }
}

export default combineReducers({
  items
});