DROP DATABASE IF EXISTS envizo;
CREATE DATABASE envizo;

\c envizo;

CREATE TABLE communities (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  community_id INT REFERENCES communities(id),
  avatar_img VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE goals (
  id SERIAL PRIMARY KEY,
  description VARCHAR,
  title VARCHAR,
  community_id INT REFERENCES communities(id),
  target_value INT,
  completed BOOLEAN,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscriptions (
  id SERIAL PRIMARY KEY,
  goal_id INT REFERENCES goals(id),
  user_id INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE submissions (
  id SERIAL PRIMARY KEY,
  img_url VARCHAR,
  subscriptions_id INT REFERENCES subscriptions(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE activity (
  id SERIAL PRIMARY KEY,
  type VARCHAR,
  activity_init_id INT,
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
