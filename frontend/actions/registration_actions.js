import * as APIUtil from '../util/registration_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = err => ({
  type: RECEIVE_ERRORS,
  errors: err
});

export const RECEIVE_REGISTRATION = "RECEIVE_REGISTRATION";

export const receiveRegistration = registration => ({
  type: RECEIVE_REGISTRATION,
  registration
});


export const joinEvent = (registration) => dispatch => {
  return (
  APIUtil.createRegistration(registration)
    .then(res => dispatch(receiveRegistration(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const REMOVE_REGISTRATION = "REMOVE_REGISTRATION";

export const removeRegistration = registration => ({
  type: REMOVE_REGISTRATION,
  registration
});

export const leaveEvent = (registration) => dispatch => {
  return (
  APIUtil.destroyRegistration(registration)
    .then(res => dispatch(removeRegistration(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
  );
};
