let express = require('express');
let router = express.Router();
const { getAllUsers, getAllUsersPerCommunity, getActivityPerUser, createUser, editUser} = require('.../db/queries/usersQueries.js')

// * `GET /users`
//   * Get all users
// * `GET /users/community/:id`
//   * Get all users per community
// * `GET /users/activity/:user_id`
//   * Get all activity for a user
// * `POST /users`
//   * Create a new user
// * `PATCH /users/:user_id`
//   * Update a specific user

router.get('/', getAllUsers)
router.get('/community/:id', getAllUsersPerCommunity)
router.get('/activity/:user_id', getActivityPerUser)
router.post('/users', createUser)
router.patch('/users/:user_id', editUser)

module.exports = router;
