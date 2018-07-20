import Types from './../constants/ActionTypes';


export const addItem = value => (dispatch, getState) => {
  const id = Object.keys(getState().items).length;
  const data = {
    [id]: {
      id,
      value,
      isChecked: false,
      isRemoved: false
    }
  }
  dispatch({ type: Types.ADD_ITEM, data });
};

export const toggleItem = id => dispatch => dispatch({ type: Types.TOGGLE_ITEM, id });

export const removeItem = id => dispatch => dispatch({ type: Types.REMOVE_ITEM, id });