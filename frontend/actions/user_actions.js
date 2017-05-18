import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const receiveErrors = err => ({
  type: RECEIVE_ERRORS,
  errors: err
});

export const RECEIVE_USER = "RECEIVE_USER";


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const updateUser = user => dispatch => (
  APIUtil.update(user)
    .then(res => dispatch(receiveUser(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
