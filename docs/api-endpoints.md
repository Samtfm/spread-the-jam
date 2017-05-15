# API Endpoints

## HTML API

### root
- `GET /`

## JSON API

### users
- `POST api/users`

### session
- `POST api/session`
- `DELETE api/session`

### city
- `GET api/cities`

### event
- `GET api/cities/:city_id/events`
- `POST api/cities/:city_id/events`
- `PATCH api/events/:event_id`
- `GET api/events/:event_id`
- `DELETE api/events/:event_id`

### attendees
- `GET api/cities/:city_id/events/:event_id/attendees`
- `POST api/cities/:city_id/events/:event_id/attendees`

### registrations
- `DELETE api/registrations/:id`
