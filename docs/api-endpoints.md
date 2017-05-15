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
- `PATCH api/cities/:city_id/events/:event_id`
- `GET api/cities/:city_id/events/:event_id`
- `DELETE api/cities/:city_id/events/:event_id`

### event
- `GET api/events`
- `POST api/events`
- `PATCH api/events/:id`
- `GET api/events/:id`
- `DELETE api/events/:id`

### attendees
- `GET api/cities/:city_id/events/:event_id/attendees`
- `POST api/cities/:city_id/events/:event_id/attendees`
- `DELETE api/cities/:city_id/events/:event_id/attendees/:id`
