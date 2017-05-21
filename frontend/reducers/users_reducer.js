import { RECEIVE_USER, RECEIVE_ERRORS }
  from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_EVENTS } from '../actions/event_actions';
import { merge, mapValues } from 'lodash';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.user) {
        newState[action.user.id] = action.user;
        return newState;
      } else {
        return state;
      }
    case RECEIVE_EVENTS:
      const keys = ['hostId', 'hostUsername'];
      mapValues(action.events, ({hostId, hostUsername}) => {
        newState[hostId] = newState[hostId] || {};
        newState[hostId].username = hostUsername;
      });
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
