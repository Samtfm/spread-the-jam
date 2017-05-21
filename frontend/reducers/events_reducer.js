import { RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_REGISTRATION } from '../actions/registration_actions';

import {merge, pick, mapValues} from 'lodash';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REGISTRATION:
      const newState = merge({}, state);
      newState[action.registration.eventId].attendees.push(action.registration.userId);
      return newState;
    case RECEIVE_EVENTS:
      const keys = ['id', 'dateTime', 'address', 'description', 'hostId', 'cityId'];
      const events = mapValues(action.events, event => pick(event, keys));
      return merge({}, state, events);
    default:
      return state;
  }
};


export default EventsReducer;
