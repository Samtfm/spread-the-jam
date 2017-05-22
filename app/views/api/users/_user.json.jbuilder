
json.extract! user, :username, :id, :city_id
json.set! 'cool' do
  true
end
if user.city
  json.city name: user.city.name, id: user.city.id
end
