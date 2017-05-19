export const fetchEvents = (cityId) => (
  $.ajax({
    method: 'GET',
    url: `api/cities/${cityId}/events`
  })
);

export const createEvent = (event) => (
  $.ajax({
    method: 'POST',
    url: `api/cities/${event.cityId}/events`
  })
);

export const updateEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`
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
