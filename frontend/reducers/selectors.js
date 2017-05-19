import values from 'lodash/values';

export const selectCities = state => (
  values(state.cities)
);

export const selectCity = (state, id) => (
  (id && state.cities[id]) ? state.cities[id] : {}
);

export const selectUser = (state, id) => (
  (id && state.users[id]) ? state.users[id] : {}
);

export const selectEvents = (state) => (
  values(state.events)
);
