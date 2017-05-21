
json.extract! user, :username, :id, :city_id
if user.city
  json.city name: user.city.name, id: user.city.id
end
