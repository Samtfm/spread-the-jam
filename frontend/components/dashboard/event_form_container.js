import { connect } from 'react-redux';

import EventForm from './event_form';
import { createEvent, receiveErrors } from '../../actions/event_actions';
import { requestCities } from '../../actions/city_actions';
import { selectCities } from '../../reducers/selectors';
const mapStateToProps = state => ({
  userId: state.session.currentUser,
  cityId: state.users[state.session.currentUser].cityId,
  errors: state.errors,
  cities: selectCities(state)
});



const mapDispatchToProps = (dispatch, ownProps) => {
  const redirectToDash = () => {
    ownProps.history.push('/dashboard');
  };
  return {
    createEvent: (eventObj) => dispatch(createEvent(eventObj, redirectToDash)),
    clearErrors: () => dispatch(receiveErrors([])),
    requestCities: () => dispatch(requestCities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
