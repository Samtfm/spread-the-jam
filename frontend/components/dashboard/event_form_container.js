import { connect } from 'react-redux';

import EventForm from './event_form';
import { createEvent, receiveErrors } from '../../actions/event_actions';

const mapStateToProps = state => ({
  userId: state.session.currentUser,
  errors: state.errors
});



const mapDispatchToProps = (dispatch, ownProps) => {
  const redirectToDash = () => {
    ownProps.history.push('/dashboard');
  };
  return {
    createEvent: (eventObj) => dispatch(createEvent(eventObj, redirectToDash)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
