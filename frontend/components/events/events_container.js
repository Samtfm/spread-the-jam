import { connect } from 'react-redux';

import { requestEvents } from '../../actions/event_actions';
import { joinEvent, leaveEvent } from '../../actions/registration_actions';
import { selectEvents } from '../../reducers/selectors';
import Events from './events';

const mapStateToProps = (state, ownProps) => ({
  events: ownProps.events,
  userId: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  joinEvent: (registration) => dispatch(joinEvent(registration)),
  leaveEvent: (registration) => dispatch(leaveEvent(registration))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
