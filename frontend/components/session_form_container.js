import { connect } from 'react-redux';

import { signUp, signIn, signOut } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.session.errors,
  signedIn: Boolean(state.session.currentUser),
  formType: 'cool'
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;
  // if ownProps
  // processForm =
  // else
  // processForm =
  return {
    processForm: () => dispatch(processForm)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
