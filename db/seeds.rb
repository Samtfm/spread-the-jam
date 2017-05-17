# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "sam", password: 'password')
User.create(username: "scrappy", password: 'password')

City1.create(name: "San Francisco")
City2.create(name: "New York")
City3.create(name: "Nashville")
City4.create(name: "Chicago")
City5.create(name: "London")
City6.create(name: "New Orleans")
