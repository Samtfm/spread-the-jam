import { RECEIVE_USER, RECEIVE_ERRORS }
  from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_EVENTS } from '../actions/event_actions';
import { merge, mapValues, pick } from 'lodash';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.user) { //check for resetting user to null

        const keys = Object.keys(action.user).filter(key => (typeof action.user[key]) !== 'object');
        const user = pick(action.user, keys);
        newState[action.user.id] = user;

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

const mergeBasics = (state, obj) => {
  const newState = merge({}, state)
  const keys = Object.keys(obj).filter(key => (typeof obj[key]) !== 'object');
  const simpleObj = pick(obj, keys);
  newState[obj.id] = simpleObj;
  return newState;
}


export default UsersReducer;
