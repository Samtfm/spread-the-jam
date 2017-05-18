import { connect } from 'react-redux';

import { requestCities } from '../../actions/city_actions';
import { selectCities } from '../../reducers/selectors';
import Cities from './cities';

const mapStateToProps = state => ({
  cities: selectCities(state)
});

const mapDispatchToProps = dispatch => ({
  requestCities: () => dispatch(requestCities()),
  chooseCity: (cityId) => console.log('todo: assign city to user')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
