##Backend Schema##

**Community**
id
name

**Users**
id
username
password_digest
email
community_id references(community.id) NOT NULL
avatar_img
timestamp

**Goals**
id
description
name
target_value int
completed (boolean)
community_id references community.id

**Subscriptions**
id
goal_id references goals.id
user_id references users.id
timestamp

**Submission**
id
img_url
subscription_id references subscriptions.id
timestamp
