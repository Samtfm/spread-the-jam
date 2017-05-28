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

# carlos = User.create(username: "Carlos", password: 'password')
# maria = User.create(username: "Maria", password: 'password')
#
# frank = User.create(username: "Frank", password: 'password')

sf = City.create(name: "San Francisco", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/san_francisco.jpg' )
ny = City.create(name: "New York", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/new_york.jpg')
nv = City.create(name: "Nashville", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/nashville.jpg')
ch = City.create(name: "Chicago", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/chicago.jpg')
ld = City.create(name: "London", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/london.jpg')
# no = City.create(name: "New Orleans", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/new_orleans.jpg')
pl = City.create(name: "Portland", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495999282/portland-1840765_1920_zjxlpa.jpg')

descriptions = [
  "Let's play some folk music, I play #{Faker::Music.instrument.downcase} and have a spare #{Faker::Music.instrument.downcase} if anyone needs an instrument.",
  "Has your significant other done left ya? Let's play some blues.",
  "Looking for others interested in exploring experimental found-object music. Anything is an instrument if you hit it with a stick!",
  "Anyone interested in starting a small choral group? I have a piano if anyone can play.",
  "Big fan of indie rock. Any songwriters out there feel free to bring anything you want to try out with a group.",
  "I play #{Faker::Music.instrument.downcase} but can't sing for the life of me. Anyone want to get together and play some blues?",
  "Anyone want to practice vocal harmonies over some classic beatles songs?",
  "I play #{Faker::Music.instrument.downcase}, and have a drumset. Anyone up for some jazz standards?"
]
# event1 = Event.create(
#   address: Faker::Address.street_address,
#   description: "neat folks and rad tunes!",
#   city_id: sf.id,
#   host_id: sam.id,
#   date_time: DateTime.new(2017, 5, 28, 17, 30, 0)
# )
#
# event2 = Event.create(
#   address: Faker::Address.street_address,
#   description: "lunch time jam!",
#   city_id: ch.id,
#   host_id: carlos.id,
#   date_time: DateTime.new(2017, 5, 29, 12, 30, 0)
# )
#
# event4 = Event.create(
#   address: "new york, new york",
#   description: "some folks like to get away",
#   city_id: ny.id,
#   host_id: frank.id,
#   date_time: DateTime.new(2017, 6, 15, 14, 00, 0)
# )

20.times do
  User.create(username: Faker::Name.first_name, password: 'password', city_id: City.all.sample.id)
end
20.times do
  user = User.all.sample
  Event.create(
  address: Faker::Address.street_address,
  description: descriptions.sample,
  city_id: user.city.id,
  host_id: user.id,
  date_time: DateTime.new(2017, 6 + rand(3), 1 + rand(30), 10 + rand(10), rand(2)*30, 0)
  )
end
33.times do
  user = User.all.sample
  Registration.create(user_id: user.id, event_id: user.city.events.sample.id);
end
sam = User.create(username: "Sam", password: 'password', city_id: sf.id)
