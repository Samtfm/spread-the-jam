import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signUp = user => dispatch => (
  APIUtil.signUp(user)
    .then(res => dispatch(receiveCurrentUser(res)),
          err => dispatch(receiveErrors(err)))
);

export const signIn = user => dispatch => (
  APIUtil.signIn(user)
    .then(res => dispatch(receiveCurrentUser(res)),
          err => dispatch(receiveErrors(err)))
);

export const signOut = () => dispatch => (
  APIUtil.signOut()
    .then(res => dispatch(receiveCurrentUser(null)),
          err => dispatch(receiveErrors(err)))
);
