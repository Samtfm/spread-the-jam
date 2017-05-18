import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import { requestCity } from '../actions/city_actions';
import Header from './header';

const mapStateToProps = (state, ownProps) => {
  const currentCity = state.session.currentUser ?
    state.cities[state.session.currentUser.cityId] : undefined;
  console.log(state.cities);
  return {
    signedIn: Boolean(state.session.currentUser),
    currentUser: state.users[state.session.currentUser],
    currentCity: 20//TODO: state.cities[state.users[state.session.currentUser].cityId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signOut: () => dispatch(signOut()),
  requestCity: (id) => dispatch(requestCity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
