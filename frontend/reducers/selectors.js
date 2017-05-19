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

// export const selectAttendees = (state, id) => (
//   (id && state.users[id]) ? state.users[id] : {}
// );

export const selectEvents = (state, cityId) => {
  const events = values(state.events).filter(event => event.cityId === cityId);
  events.forEach(eventObj => {
    console.log(eventObj.hostId);
    eventObj.host = state.users[eventObj.hostId];
    // eventObj.attendees =
  });
  return events;
};
