import { connect } from 'react-redux';

import { requestCity } from '../../actions/city_actions';
import { selectCity } from '../../reducers/selectors';
import { updateUser } from '../../actions/user_actions';
import City from './city';



const mapStateToProps = (state, ownProps) => ({
  city: selectCity(state, ownProps.match.params.id),
  currentUser: state.users[state.session.currentUser]
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestCity: () => dispatch(requestCity(ownProps.match.params.id)),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
