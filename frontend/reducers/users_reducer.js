import { RECIEVE_USER, RECEIVE_ERRORS }
  from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECIEVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
