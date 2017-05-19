import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CitiesReducer from './cities_reducer';
import UsersReducer from './users_reducer';
import EventsReducer from './events_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CitiesReducer,
  users: UsersReducer,
  events: EventsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
