export const fetchEvents = (cityId) => (
  $.ajax({
    method: 'GET',
    url: `api/cities/${cityId}/events`
  })
);
export const fetchUserEvents = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/events`
  })
);

export const createEvent = (eventObj) => (
  $.ajax({
    method: 'POST',
    url: `api/cities/${eventObj.city_id}/events`,
    data: {event: eventObj}
  })
);

export const updateEvent = (eventObj) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${eventObj.id}`,
    data: {event: eventObj}
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const destroyEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);
