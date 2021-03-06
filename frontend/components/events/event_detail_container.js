import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestEvent } from '../../actions/event_actions';
import { joinEvent, leaveEvent } from '../../actions/registration_actions';
import { selectEvent } from '../../reducers/selectors';
import EventDetail from './event_detail';

const mapStateToProps = (state, ownProps) => ({
  eventObj: selectEvent(state, ownProps.eventId),
  userId: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestEvent: () => dispatch(requestEvent(ownProps.eventId)),
  joinEvent: (registration) => dispatch(joinEvent(registration)),
  leaveEvent: (registration) => dispatch(leaveEvent(registration))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail));
