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
City.create(name: "San Francisco", img_url: '/assets/san_francisco.jpg' )
City.create(name: "New York", img_url: '/assets/new_york.jpg')
City.create(name: "Nashville", img_url: '/assets/san_francisco.jpg')
City.create(name: "Chicago", img_url: '/assets/new_york.jpg')
City.create(name: "London", img_url: '/assets/san_francisco.jpg')
City.create(name: "New Orleans", img_url: '/assets/new_york.jpg')
