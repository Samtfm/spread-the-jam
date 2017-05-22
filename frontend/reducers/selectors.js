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

const constructEvent = (state, eventObj) => ({
  host: state.users[eventObj.hostId],
  attendees: eventObj.attendees, //array? object?
  description: eventObj.description,
  id: eventObj.id,
  address: eventObj.address,
  dateTime: eventObj.dateTime
});

export const selectEvents = (state, cityId) => {
  const events = values(state.events).filter(event => event.cityId === cityId);
  return events.map(eventObj => constructEvent(state, eventObj));
};
export const selectJoinedEvents = (state, userId) => {
  const events = values(state.events).filter(event => event.attendees.includes(userId));
  return events.map(eventObj => constructEvent(state, eventObj));
};
export const selectHostedEvents = (state, hostId) => {
  const events = values(state.events).filter(event => event.hostId === hostId);
  return events.map(eventObj => constructEvent(state, eventObj));
};
