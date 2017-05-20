json.user do
  json.extract! user, :username, :id, :city_id
end
if user.city
  json.city do
    json.id user.city_id
    json.name user.city.name
  end
end
