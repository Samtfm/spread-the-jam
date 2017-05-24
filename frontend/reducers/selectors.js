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

const countAttendees = (attendees) => {
  let count = 0;
  for (let id in attendees) if (attendees[id]) count++;
  return count;
};
const selectAttendees = (state, attendeesObj) => {
  const attendees = [];
  for (let id in attendeesObj) if (attendeesObj[id]) attendees.push(state.users[id]);
  return attendees;
};

const constructEvent = (state, eventObj) => ({
  host: state.users[eventObj.hostId],
  attendees: selectAttendees(state, eventObj.attendees),
  numAttendees: countAttendees(eventObj.attendees),
  description: eventObj.description,
  id: eventObj.id,
  address: eventObj.address,
  dateTime: eventObj.dateTime
});
export const selectEvent = (state, eventId) => {
  return constructEvent(state, state.events[eventId]);
};
export const selectEvents = (state, cityId) => {
  const events = values(state.events).filter(event => event.cityId === cityId);
  return events.map(eventObj => constructEvent(state, eventObj)).sort((a,b) => new Date(a.dateTime) > new Date(b.dateTime));
};
export const selectJoinedEvents = (state, userId) => {
  const events = values(state.events).filter(event => event.attendees[userId]);
  return events.map(eventObj => constructEvent(state, eventObj)).sort((a,b) => new Date(a.dateTime) > new Date(b.dateTime));
};
export const selectUserEvents = (state, userId) => {
  const events = values(state.events).filter(event => event.hostId === userId || event.attendees[userId]);
  return events.map(eventObj => constructEvent(state, eventObj)).sort((a,b) => new Date(a.dateTime) > new Date(b.dateTime));
};
export const selectHostedEvents = (state, hostId) => {
  const events = values(state.events).filter(event => event.hostId === hostId);
  return events.map(eventObj => constructEvent(state, eventObj)).sort((a,b) => new Date(a.dateTime) > new Date(b.dateTime));
};
