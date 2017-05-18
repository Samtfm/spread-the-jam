import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import { requestCity } from '../../actions/city_actions';

import { selectUser, selectCity } from '../../reducers/selectors';
import Header from './header';

const mapStateToProps = (state, ownProps) => {
  const currentUser = selectUser(state, state.session.currentUser);
  const currentCity = selectCity(state, currentUser.cityId);
  console.log(currentCity);
  return {
    signedIn: Boolean(state.session.currentUser),
    currentUser: selectUser(state, state.session.currentUser),
    currentCity: selectCity(state, currentUser.cityId),
    cities: state.cities
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
