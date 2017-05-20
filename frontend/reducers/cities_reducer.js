import { RECEIVE_CITIES, RECEIVE_CITY } from '../actions/city_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';
const CitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CITY:
      newState[action.city.id] = action.city;
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.user && action.user.cityId){
        const cityData = {};
        console.log(action);
        cityData[action.user.cityId] = { id: action.user.cityId, name: action.user.cityName };
        return merge({}, state, cityData);
      } else {
        return state;
      }
    case RECEIVE_CITIES:
      return action.cities;
    default:
      return state;
  }
};

export default CitiesReducer;
