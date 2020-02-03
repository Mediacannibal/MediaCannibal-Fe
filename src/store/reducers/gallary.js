
/* This is the Reducer for the Blog Items */

import * as actionType from '../actions/action-type'

const initialState = {
  firstRun: true,
  gallaryItems: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionType.IMAGE_GALLARY:
    return{
      ...state,
      gallaryItems: action.value
    }
    case actionType.ADD_IMAGE_GALLARY:
    return{
      ...state,
      gallaryItems: state.gallaryItems.concat(action.value)
    }
    default:
      return state
  }
};

export default reducer;