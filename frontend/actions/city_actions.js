import * as APIUtil from '../util/city_api_util';

export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_CITY = "RECEIVE_CITY";

export const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities
});

export const receiveCity = (city) => ({
  type: RECEIVE_CITY,
  city
});

export const requestCities = next => dispatch => (
  APIUtil.fetchCities()
    .then(res => dispatch(receiveCities(res)))
);

export const requestCity = id => dispatch => (
  APIUtil.fetchCity(id)
    .then(res => dispatch(receiveCity(res)))
);
window.requestCities = requestCities;
