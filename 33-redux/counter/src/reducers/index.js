import { combineReducers } from "redux"
import * as actions from '../actions'

const counterReducer = (state = 0, action) => {
  const {type, delta=1} = action;
  switch (type) {
    case actions.INCREMENT:
      return state + delta
    case actions.DECREMENT:
      return state - delta
    default:
      return state
  }
}

export default combineReducers({
  counter: counterReducer
})
