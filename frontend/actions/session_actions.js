import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signIn = user => dispatch => (
  APIUtil.signIn(user)
    .then( res => dispatch(receiveCurrentUser(res),
            err => dispatch(receiveErrors(err))))
)

export const signOut = () => dispatch +
