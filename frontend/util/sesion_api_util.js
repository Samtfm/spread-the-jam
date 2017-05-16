export const signUp = () => (
  $.ajax({
    method: 'POST',
    url: 'api/users'
  })
);

export const signIn = (user) => (
    $.ajax({
    method: "POST",
    url: "api/session",
    data: {user}
  })
);

export const signOut = () => (
    $.ajax({
    method: "DELETE",
    url: "api/session"
  })
);
