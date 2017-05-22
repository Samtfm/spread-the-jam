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
# json.attendees event.attendees.map { |attendee| attendee.id }

if event.attendees.length == 0
  json.attendees []
else
  json.attendees do
    event.attendees.each do |attendee|
      json.set! attendee.id, true
    end
  end
end
