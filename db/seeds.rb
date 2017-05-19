# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "sam", password: 'password')
User.create(username: "scrappy", password: 'password')

City.destroy_all
City.create(name: "San Francisco", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/san_francisco.jpg' )
City.create(name: "New York", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/new_york.jpg')
City.create(name: "Nashville", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/nashville.jpg')
City.create(name: "Chicago", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/chicago.jpg')
City.create(name: "London", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/london.jpg')
City.create(name: "New Orleans", img_url: 'http://res.cloudinary.com/samtfm/image/upload/c_scale,w_1200/v1495168184/new_orleans.jpg')
