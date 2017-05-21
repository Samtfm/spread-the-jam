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
  return events.map(eventObj => ({
    host: state.users[eventObj.hostId],
    attendees: ["fill", "me", "up"], //array? object?
    description: eventObj.description,
    id: eventObj.id,
    address: eventObj.address
    // eventObj.host = state.users[eventObj.hostId];
    // eventObj.attendees =
  }));
};
