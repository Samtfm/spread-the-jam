# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
sam = User.create(username: "sam", password: 'password')
scrappy = User.create(username: "scrappy", password: 'password')
frank = User.create(username: "Frank", password: 'password')

City.destroy_all
sf = City.create(name: "San Francisco", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/san_francisco.jpg' )
ny = City.create(name: "New York", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/new_york.jpg')
City.create(name: "Nashville", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/nashville.jpg')
City.create(name: "Chicago", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/chicago.jpg')
City.create(name: "London", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/london.jpg')
City.create(name: "New Orleans", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/new_orleans.jpg')

Event.destroy_all
event1 = Event.create(
  address: "160 spear street",
  description: "neat folks and rad tunes!",
  city_id: sf.id,
  host_id: sam.id,
  date_time: DateTime.new(2017, 5, 28, 17, 30, 0)
)

event2 = Event.create(
  address: "160 spear street",
  description: "lunch time jam!",
  city_id: sf.id,
  host_id: sam.id,
  date_time: DateTime.new(2017, 5, 29, 12, 30, 0)
)

event3 = Event.create(
  address: "new york, new york",
  description: "some folks like to get away",
  city_id: ny.id,
  host_id: frank.id,
  date_time: DateTime.new(2017, 6, 15, 14, 00, 0)
)
