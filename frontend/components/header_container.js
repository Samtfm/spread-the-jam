import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import Header from './header';

const mapStateToProps = (state, ownProps) => {
  const currentCity = state.session.currentUser ?
    state.cities[state.session.currentUser.cityId] : undefined;
  return {
    signedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    currentCity: currentCity
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
