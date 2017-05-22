json.extract! event,
  :id,
  :date_time,
  :address,
  :description,
  :city_id,
  :host_id

# json.host_username event.host.username

json.host { json.partial! 'api/users/user', user: event.host }
json.city { json.partial! 'api/cities/city', city: event.city }
json.attendees event.attendees.map { |attendee| attendee.id }
