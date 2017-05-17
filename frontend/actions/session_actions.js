import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = err => ({
  type: RECEIVE_ERRORS,
  errors: err
});

export const signUp = user => dispatch => (
  APIUtil.signUp(user)
    .then(res => dispatch(receiveCurrentUser(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const signIn = user => dispatch => (
  APIUtil.signIn(user)
    .then(res => dispatch(receiveCurrentUser(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const signOut = () => dispatch => (
  APIUtil.signOut()
    .then(res => dispatch(receiveCurrentUser(null)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
