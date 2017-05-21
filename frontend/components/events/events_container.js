import { connect } from 'react-redux';

import { requestEvents, joinEvent } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';
import Events from './events';

const mapStateToProps = (state, ownProps) => ({
  events: selectEvents(state, ownProps.cityId),
  cityId: ownProps.cityId,
  userId: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestEvents: (cityId) => dispatch(requestEvents(cityId)),
  joinEvent: (eventId) => console.log("join event", eventId)//dispatch(joinEvent())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
