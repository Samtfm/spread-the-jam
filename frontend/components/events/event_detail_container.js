import { connect } from 'react-redux';

import { requestEvent } from '../../actions/event_actions';
import { joinEvent, leaveEvent } from '../../actions/registration_actions';
import { selectEvents } from '../../reducers/selectors';
import EventDetail from './event_detail';

const mapStateToProps = (state, ownProps) => ({
  eventObj: state.events[ownProps.match.params.id],
  userId: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestEvent: () => dispatch(requestEvent(ownProps.match.params.id)),
  joinEvent: (registration) => dispatch(joinEvent(registration)),
  leaveEvent: (registration) => dispatch(leaveEvent(registration))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
