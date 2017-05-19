import { connect } from 'react-redux';
import { selectEvents } from '../../reducers/selectors';
import Events from './events';

const mapStateToProps = (state) => ({
  events: selectEvents()
});

const mapDispatchToProps = (dispatch) => ({
  requestEvents: () => console.log("request the events!")
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
