const db = require('./index.js');
// * `GET /users`
//   * Get all users
const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        message:'Retrieved All Users'
        data:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message:'Error: could not get all users'
      })
      next(err)
    });
}
// * `GET /users/community/:id`
//   * Get all users per community
const getAllUsersPerCommunity = (req, res, next) => {
  let community_id = parseInt(req.params.id);
  db.any('SELECT * FROM users WHERE community_id=$1', community_id)
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        message:'Retrieved All Users from community_id '+community_id,
        data:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message:'Error: could not get all users with the community id of '+community_id
      })
      next(err)
    });
}


// * `GET /users/activity/:user_id`
//   * Get all activity for a user

const getActivityPerUser = (req, res, next) => {
  let user_id = parseInt(req.params.user_id);
  db.any('SELECT * FROM activity WHERE user_id=$1', user_id)
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        message:'Retrieved All activity from user_id '+user_id,
        data:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message:'Error: could not get all all activity for user '+user_id
      })
      next(err)
    });
}
// * `POST /users`
//   * Create a new user
const createUser = (req, res, next) => {
  db.none('INSERT INTO users(username) VALUES(${username}) RETURNING id', req.body)
    .then(()=> {
      res.status(200).json({
        status: "success",
        message: "Created a user"
      })
    })
    .catch(err => {
      next(err)
    })
}

// * `PATCH /users/:user_id`
//   * Update a specific user
const editUser = (req, res, next) => { //PATCH
  let user_id = parseInt(req.params.user_id)
  let queryString = '';
  for (let key in req.body) {
    if (key !== undefined) {
    queryString += key + "=${" + key + "}, "
    }
  }
  queryString = queryString.slice(0,-2);
  db.none('UPDATE users SET '+queryString+' WHERE id='+user_id, req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Editted user with user_id "+user_id
      })
    })
    .catch(err => next(err));
}

module.exports = {
  getAllUsers,
  getAllUsersPerCommunity,
  getActivityPerUser,
  createUser,
  editUser
}
