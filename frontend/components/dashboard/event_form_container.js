import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EventForm from './event_form';
import { createEvent, receiveErrors, requestEvent, updateEvent, deleteEvent } from '../../actions/event_actions';
import { requestCities } from '../../actions/city_actions';
import { selectCities } from '../../reducers/selectors';
const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser,
  cityId: state.users[state.session.currentUser].cityId,
  errors: state.errors,
  cities: selectCities(state),
  eventObj: state.events[parseInt(ownProps.match.params.id)]
});



const mapDispatchToProps = (dispatch, ownProps) => {
  const redirectToDash = () => {
    ownProps.history.push('/dashboard');
  };
  return {
    createEvent: (eventObj) => dispatch(createEvent(eventObj, redirectToDash)),
    clearErrors: () => dispatch(receiveErrors([])),
    requestCities: () => dispatch(requestCities()),
    requestEvent: () => dispatch(requestEvent(parseInt(ownProps.match.params.id))),
    updateEvent: (eventObj) => dispatch(updateEvent(eventObj, redirectToDash)),
    deleteEvent: () => dispatch(deleteEvent(parseInt(ownProps.match.params.id), redirectToDash))

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm));
