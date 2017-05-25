import * as APIUtil from '../util/event_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = err => ({
  type: RECEIVE_ERRORS,
  errors: err
});


export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";


export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = (eventObj) => ({
  type: RECEIVE_EVENT,
  eventObj
});

// export const receiveEvent = (eventObj) => {
//   const events = {};
//   events[eventObj.id] = eventObj;
//   return {
//     type: RECEIVE_EVENTS,
//     events
//   };
// };

export const requestEvents = (cityId) => dispatch => (
  APIUtil.fetchEvents(cityId)
    .then(res => dispatch(receiveEvents(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestUserEvents = (userId) => dispatch => (
  APIUtil.fetchUserEvents(userId)
    .then(res => dispatch(receiveEvents(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestEvent = (id) => dispatch => (
  APIUtil.fetchEvent(id)
    .then(res => dispatch(receiveEvents(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
export const createEvent = (eventObj, callback) => dispatch => (
  APIUtil.createEvent(eventObj)
    .then(res => {
        callback();
        return dispatch(receiveEvent(res));
      },
          err => dispatch(receiveErrors(err.responseJSON)))
);
export const updateEvent = (eventObj, callback) => dispatch => (
  APIUtil.updateEvent(eventObj)
    .then(res => {
        callback();
        return dispatch(receiveEvent(res));
      },
          err => dispatch(receiveErrors(err.responseJSON)))
);
