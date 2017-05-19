import * as APIUtil from '../util/event_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const receiveErrors = err => ({
  type: RECEIVE_ERRORS,
  errors: err
});


export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});
export const receiveEvent = (eventObj) => {
  const events = {};
  events[eventObj.id] = eventObj;
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

export const requestEvents = (cityId) => dispatch => (
  APIUtil.fetchEvents(cityId)
    .then(res => dispatch(receiveEvents(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
// export const requestEvent = (id) => dispatch => (
//   APIUtil.fetchEvent(id)
//     .then(res => dispatch(receiveEvents(res)),
//           err => dispatch(receiveErrors(err.responseJSON)))
// );
export const createEvent = (eventObj) => dispatch => (
  APIUtil.createEvent(eventObj)
    .then(res => dispatch(receiveEvent(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
