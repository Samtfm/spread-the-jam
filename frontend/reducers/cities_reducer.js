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
    console.log(action);
      if (action.city){
        const cityData = {};
        cityData[action.city.id] = { id: action.city.id, name: action.city.name };
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
