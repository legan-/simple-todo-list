import Types from './../constants/ActionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case Types.ADD_TODO_ITEM:
      return {
        ...state,
        ...action.data
      }
    case Types.TOGGLE_TODO_ITEM:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isCompleted: !state[action.id].isCompleted
        }
      }
    case Types.REMOVE_TODO_ITEM:
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