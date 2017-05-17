import * as APIUtil from '../util/city_api_util';

export const RECEIVE_CITIES = "RECEIVE_CITIES";

export const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities
});

export const requestCities = next => dispatch => () => (
  APIUtil.fetchCities()
    .then(res => dispatch(receiveCities(res)))
);
