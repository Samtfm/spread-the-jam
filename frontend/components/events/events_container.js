import { connect } from 'react-redux';

import { requestEvents } from '../../actions/event_actions';
import { joinEvent, leaveEvent } from '../../actions/registration_actions';
import { selectEvents } from '../../reducers/selectors';
import Events from './events';

const mapStateToProps = (state, ownProps) => ({
  events: selectEvents(state, ownProps.cityId),
  cityId: ownProps.cityId,
  userId: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestEvents: (cityId) => dispatch(requestEvents(cityId)),
  joinEvent: (registration) => dispatch(joinEvent(registration)),
  leaveEvent: (registration) => dispatch(leaveEvent(registration))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
