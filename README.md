# Spread the Jam

[Live Site][heroku]

[heroku]: http://www.spreadthejam.net

[tws]: http://www.teawithstrangers.com

Spread the jam is a meetup app for musicians based on [Tea With Strangers][tws]. Users can find and join events in their home city, as well as host events.

## Tools

### Languages/Frameworks
 - ruby
 - javascript
 - rails

### Libraries
 - react
 - redux
 - BCrypt
 - react-modal
 - react-dateTime

## Features
  - Set your home city
  - Join and leave Events
  - Host events, with option to edit and delete them later.
  - View all joined and hosted events in dashboard


## Screenshots
![alt text][san_francisco]

[san_francisco]: docs/screenshots/SF_events.png "San Francisco events"

![alt text][dashboard]

[dashboard]: http://res.cloudinary.com/samtfm/image/upload/c_scale,w_600/v1495836980/dashboard2_ev3dvi.png "Event detail in dashboard"

## Code Samples

### Normalized State
The state is fully normalized, so local storage doesn't have any duplicated data. For example a user doesn't hold a homeCityName, but rather a key to a city object that is stored in a separate slice of state.

This has the advantage of ensuring consistency of the state, as well as avoiding duplicate data.

However, the server returns fully nested data, so as to ensure the client has access to all the information it needs. Then the reducers user the following code to parse this nested server response into a normalized state.

```js
// reducers/users_reducer.js

// helper function
const mergeBasics = (state, obj) => {
  // select all keys of the object that do not point to complex data
  const keys = Object.keys(obj).filter( key =>
    (typeof obj[key]) !== 'object'
  );
  const simpleObj = pick(obj, keys); // create object from simple keys
  state[obj.id] = simpleObj; // assign object to the slice of state
};

const UsersReducer = (state = {}, action) => {
  const newState = merge({}, state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      mergeBasics(newState, action.user); // merge only non-object keys
      return newState;
    ...

// reducers/cities_reducer.js
const CitiesReducer = (state = {}, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // extract full city object from response
      const city = action.user.city;
      if (city){
        // assign that city to the cities slice
        newState[city.id] = city;
        return newState;
      } else { // user did not have a home city
        return state;
      }
    ...

```

### Authentication for Editing Events

Beyond the standard authentication that registers whether a user is logged in, access editing events must be restricted to the host of that event.
However, it wasn't possible to check the host of an event before loading the edit page.

Say we have an event with an id of 23, and a hostId of 6.
Visiting the url `/edit-event/23` will make an api call to event 23. Until the page loads, the user is never redirected. Once this api call returns with a response, we see that it's hostId is 6. The User is redirected unless the currentUserId stored in the state is 6.

In the future, I plan to refactor this code by populating each user with a list of hosted event Ids. This will avoid needing such a complicated Route solution.

```js
//route_util.js
const Host = ({ component: Component, path, loggedIn, currentUser, eventObj}) => {
  return (
    <Route path={path} render={(props) => (
      // ensure user is redirected, and page either hasn't finished loading,
      // or the loaded event has a matching hostId
      (loggedIn && (!eventObj || (currentUser.id === eventObj.hostId))) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  );
};
const mapStateToProps = (state, ownProps) => {
  // parse eventId from path
  const params = ownProps.location.pathname.split('/');
  const eventId = parseInt(params[params.length - 1]);
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.users[state.session.currentUser],
    eventObj: state.events[eventId]  // find event object in state
  };
};
export const HostRoute = withRouter(connect(mapStateToProps)(Host));
//HostRoute can now be used instead of the standard Route component

```


## Future Directions

 - Google Maps integration
 - Register for events with an instrument
