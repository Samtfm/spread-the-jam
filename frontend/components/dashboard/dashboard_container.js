import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { selectJoinedEvents, selectHostedEvents, selectUserEvents } from '../../reducers/selectors';
import { requestUserEvents } from '../../actions/event_actions';

const mapStateToProps = state => ({
  joinedEvents: selectUserEvents(state, state.session.currentUser),
  currentUser: state.users[state.session.currentUser]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestEvents: (userId) => dispatch(requestUserEvents(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
