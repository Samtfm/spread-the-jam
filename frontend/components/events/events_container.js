import { connect } from 'react-redux';

import { requestEvents } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';
import Events from './events';

const mapStateToProps = (state, ownProps) => ({
  events: selectEvents(state, ownProps.cityId),
  cityId: ownProps.cityId
});

const mapDispatchToProps = (dispatch) => ({
  requestEvents: (cityId) => dispatch(requestEvents(cityId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
