# API ENDPOINTS

## HTML API

### ROOT
* `GET /`
  * loads the React web app

## JSON API


### USERS
* `GET /users`
  * Get all users
* `GET /users/community/:id`
  * Get all users per community
* `GET /users/activity/:user_id`
  * Get all activity for a user
* `POST /users`
  * Create a new user
* `PATCH /users/:user_id`
  * Update a specific user

### GOALS
* `GET /goals/:goalId`
  * Get a specific goal
* `GET /goals/community/:community_id`
  * Gets all goals for a community
* `POST /goals`
  * Posts a new goal (for Admin use only)
* `PATCH /goals/:goalId`
  * Patches a specific goal based on goal_id

### COMMUNITY
* `POST /community`
  * Get all communities
* `GET /community/:id/activity`
  * Get all activity for a community
* `POST /community`
  * Add a new community

### SUBSCRIPTIONS
* `GET /subscriptions`
  * get all subscriptions
* `GET /subscriptions/goal/:goal_id`
  * Get all subscriptions for that goal
* `GET /subscriptions/user/:user_id`
  * Get all subscriptions for a user
* `GET /subscriptions/:user_id/:goal_id`
  * a single subscription id for a user and a goal
* `POST /subscriptions/new`
  * Subscribe to a goal
* `DELETE /subscriptions/:goal_id`
  * Unsubscribe to a goal


### SUBMISSIONS
* `GET /submissions`
  * Get all submissions
* `GET /submissions/:goalId`
  * Get all submissions per goal id
* `POST /submissions`
  * Add a new submission (img_url)
* `DELETE /submissions/:submissionId`
  * delete a submission
