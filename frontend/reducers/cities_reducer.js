import { RECEIVE_CITIES, RECEIVE_CITY } from '../actions/city_actions';
import merge from 'lodash/merge';
const CitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CITY:
      const newState = merge({}, state);
      newState[action.city.id] = action.city;
      return newState;
    case RECEIVE_CITIES:
      return action.cities;
    default:
      return state;
  }
};

export default CitiesReducer;
