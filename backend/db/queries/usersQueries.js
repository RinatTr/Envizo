const { db } = require('./index.js');
// * `GET /users`
//   * Get all users
const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        message:'Retrieved All Users',
        users:data
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
//Gets specific user by id
const getAUser = ( req, res, next ) => {
  let userId = req.params.id
  db.one('SELECT * FROM users WHERE id=$1',userId)
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        message:'Retrieved User: ', userId,
        user:data
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
  db.any('SELECT activity.id as activity_id, type, username, goals.id as goal_id, activity.time_stamp, users.id as user_id, name, communities.id as community_id, title FROM activity JOIN users ON users.id = activity.user_id JOIN communities ON communities.id = users.community_id JOIN goals ON goals.id = communities.id WHERE users.id=$1 ORDER BY activity.time_stamp DESC', user_id)
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
  db.one('INSERT INTO users(username, password_digest, email, community_id, avatar_img) VALUES(${username}, ${password_digest}, ${email}, ${community_id}, ${avatar_img}) RETURNING id', req.body)
    .then((data) => {
      db.none('INSERT INTO activity(user_id, type) VALUES($1,$2)',[data.id,'joined'])
      .then(()=> {
        res.status(200).json({
          status: "success",
          message: "Created a user and new activity"
        })
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
  getAUser,
  getAllUsersPerCommunity,
  getActivityPerUser,
  createUser,
  editUser
}
