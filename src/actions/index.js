import Types from './../constants/ActionTypes';


export const addTodoItem = value => (dispatch, getState) => {
  const id = Object.keys(getState().items).length;
  const data = {
    [id]: {
      id,
      value,
      isCompleted:  false,
      isRemoved:    false
    }
  }
  dispatch({ type: Types.ADD_TODO_ITEM, data });
};

export const toggleTodoItem = id => dispatch => dispatch({ type: Types.TOGGLE_TODO_ITEM, id });

export const removeTodoItem = id => dispatch => dispatch({ type: Types.REMOVE_TODO_ITEM, id });

export const setActiveFilter = name => dispatch => dispatch({ type: Types.SET_ACTIVE_FILTER, name });