import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { selectJoinedEvents, selectHostedEvents, selectUserEvents } from '../../reducers/selectors';

const mapStateToProps = state => ({
  joinedEvents: selectUserEvents(state, state.session.currentUser),
  currentUser: state.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
