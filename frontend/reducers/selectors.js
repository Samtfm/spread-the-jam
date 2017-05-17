import values from 'lodash/values';

export const selectCities = state => (
  values(state.cities)
);
