# Schema

## users
column name     | data type | details
----------------|-----------|---------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## cities
column name     | data type | details
----------------|-----------|---------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique


## events
column name     | data type | details
----------------|-----------|---------
id              | integer   | not null, primary key
date            | date      | not null
time            | time      | not null
address         | string    | not null
description     | text      |
city_id         | integer   | not null, indexed, foreign key (cities)
host_id         | integer   | not null, indexed, foreign key (users)


## registrations
column name     | data type | details
----------------|-----------|---------
id              | integer   | not null, primary key
event_id        | integer   | not null, indexed, unique to user_id, foreign key (events)
user_id         | integer   | not null, indexed, foreign key (users)
