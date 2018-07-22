import Types from './../constants/ActionTypes';
import { combineReducers } from 'redux';


const active = (state = 'all', action) => {
  switch (action.type) {
    case Types.SET_ACTIVE_FILTER:
      return action.name;
    default:
      return state;
  }
}

export default combineReducers({
  active
});