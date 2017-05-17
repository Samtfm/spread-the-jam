import { connect } from 'react-redux';

import { selectCities } from '../reducers/selectors';
import Cities from './cities';

const mapStateToProps = state => ({
  cities: selectCities(state)
});

const mapDispatchToProps = dispatch => ({
  chooseCity: (cityId) => console.log('todo: assign city to user')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
