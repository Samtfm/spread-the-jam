import { connect } from 'react-redux';

import { requestCity } from '../../actions/city_actions';
import { selectCity } from '../../reducers/selectors';
import City from './city';



const mapStateToProps = (state, ownProps) => ({
  city: selectCity(state, ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestCity: () => dispatch(requestCity(ownProps.match.params.id)),
  chooseCity: (cityId) => console.log('todo: assign city to user')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
