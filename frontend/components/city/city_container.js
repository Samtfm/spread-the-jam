import { connect } from 'react-redux';

import { requestCity } from '../../actions/city_actions';
import { requestEvents } from '../../actions/event_actions';

import { selectCity, selectEvents } from '../../reducers/selectors';
import { updateUser } from '../../actions/user_actions';
import City from './city';



const mapStateToProps = (state, ownProps) => ({
  city: selectCity(state, parseInt(ownProps.match.params.id)),
  cityId: parseInt(ownProps.match.params.id),
  currentUser: state.users[state.session.currentUser],
  events: selectEvents(state, parseInt(ownProps.match.params.id)),
  allEvents: state.events
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestCity: () => dispatch(requestCity(ownProps.match.params.id)),
    requestEvents: () => dispatch(requestEvents(ownProps.match.params.id)),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
