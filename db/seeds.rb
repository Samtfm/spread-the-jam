# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#TODO: MAKE ALL THE SEEDS
User.destroy_all
Registration.destroy_all
Event.destroy_all
City.destroy_all

sam = User.create(username: "sam", password: 'password')
scrappy = User.create(username: "scrappy", password: 'password')
carlos = User.create(username: "Carlos", password: 'password')
maria = User.create(username: "Maria", password: 'password')

frank = User.create(username: "Frank", password: 'password')

sf = City.create(name: "San Francisco", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/san_francisco.jpg' )
ny = City.create(name: "New York", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/new_york.jpg')
nv = City.create(name: "Nashville", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/nashville.jpg')
ch = City.create(name: "Chicago", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/chicago.jpg')
ld = City.create(name: "London", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/london.jpg')
no = City.create(name: "New Orleans", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/new_orleans.jpg')

event1 = Event.create(
  address: Faker::Address.street_address,
  description: "neat folks and rad tunes!",
  city_id: sf.id,
  host_id: sam.id,
  date_time: DateTime.new(2017, 5, 28, 17, 30, 0)
)

event2 = Event.create(
  address: Faker::Address.street_address,
  description: "lunch time jam!",
  city_id: ch.id,
  host_id: carlos.id,
  date_time: DateTime.new(2017, 5, 29, 12, 30, 0)
)

event4 = Event.create(
  address: "new york, new york",
  description: "some folks like to get away",
  city_id: ny.id,
  host_id: frank.id,
  date_time: DateTime.new(2017, 6, 15, 14, 00, 0)
)

20.times do
  User.create(username: Faker::Name.first_name, password: 'password', city_id: City.all.sample.id)
end
20.times do
  Event.create(
  address: Faker::Address.street_address,
  description: Faker::Lorem.sentence(4),
  city_id: City.all.sample.id,
  host_id: User.all.sample.id,
  date_time: DateTime.new(2017, 6 + rand(3), 1 + rand(30), 10 + rand(10), rand(2)*30, 0)
  )
end
33.times do
  Registration.create(user_id: User.all.sample.id, event_id: Event.all.sample.id );
end
