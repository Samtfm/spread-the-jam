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
