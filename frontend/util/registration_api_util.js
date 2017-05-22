export const createRegistration = (registration) => (
  $.ajax({
    method: 'POST',
    url: `api/registrations`,
    data: {registration}
  })
);
export const destroyRegistration = (registration) => (
  $.ajax({
    method: 'DELETE',
    url: `api/registrations/potato`,
    data: {registration}
  })
);
// export const leaveEvent = (eventId, userId) => (
//   $.ajax({
//     method: 'DELETE',
//     url: `api/registrations/${id}`
//   })
// );
