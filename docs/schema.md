
# Schema
## community
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | varchar   | not null, unique
## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | integer   | not null, references users(id)
password_digest | varchar   | not null, unique
email           | varchar   | not null
community_id    | int       | references community(id)
avatar_img      | varchar   |
time_stamp      | timestamp | default
## goals
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
description     | varchar   |
name            | varchar   |
community_id    | int       | references community(id)
target_value    | int       |
completed       | boolean   |
## subscriptions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
goal_id         | integer   | references goals(id)
user_id         | integer   | references users(id)
time_stamp      | timestamp |
## submission
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
img_url         | varchar   |
subscriptions_id| integer   | references subscriptions(id)
time_stamp      | timestamp |
