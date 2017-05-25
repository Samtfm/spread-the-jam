json.partial! 'event', event: @event
json.city City.find(@event.city_id)
json.users do
  @event.attendees.each do |attendee|
    json.set! attendee.id do
      json.extract! User.find(attendee.id), :username, :id
    end
  end
end
