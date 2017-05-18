import { RECEIVE_CURRENT_USER }
  from '../actions/session_actions';
import merge from 'lodash/merge';
const SessionReducer = (state = { currentUser: null }, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user ? action.user.id : null;
      return newState;
      return merge({}, state, { currentUser: action.user });
    default:
      return state;
  }
};

export default SessionReducer;
