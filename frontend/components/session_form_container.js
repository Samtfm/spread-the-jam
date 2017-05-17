import { connect } from 'react-redux';

import { signUp, signIn, signOut } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.session.errors,
  signedIn: Boolean(state.session.currentUser),
  formType: ownProps.location.pathname === '/signup' ? 'signup' : 'signin'
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;
  if (ownProps.location.pathname === '/signup')
    processForm = user => signUp(user);
  else
    processForm = user => signIn(user);
  return {
    processForm: (user) => dispatch(processForm(user)),
    demoSignIn: () => dispatch(signIn({username: 'sam', password: 'password'}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
