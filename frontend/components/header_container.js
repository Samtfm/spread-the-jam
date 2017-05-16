import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import Header from './header';

const mapStateToProps = (state, ownProps) => ({
  signedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
