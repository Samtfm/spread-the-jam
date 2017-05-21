import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { selectJoinedEvents, selectHostedEvents } from '../../reducers/selectors';

const mapStateToProps = state => ({
  joinedEvents: selectJoinedEvents(state, 1),
  hostedEvents: selectHostedEvents(state, 1)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
