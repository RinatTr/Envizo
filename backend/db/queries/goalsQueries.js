const db = require('./index.js');


// * `GET /goals/community/:community_id`
// * Gets all goals for a community
const getAllGoals = (req, res, next) => {

  let community_id = req.paragms.id;

  db.any('SELECT * FROM goals WHERE community_id=$1', community_id)
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        message:'Retrieved All Goals from a community, with the id of ' ,
        data:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message:'Something Went Wrong, Could Not get all goals with the community id of ', community_id
      })
      next(err)
    });
}



// *`GET /goals/:goalId`
// * Get a specific goal
 const getAGoal = (req, res, next) => {

   let goalId = req.params.id;

   db.one('SELECT * FROM goals WHERE id=$1', goalId)
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        message:'Retrieved A Specific goal, with the id of ', goalId,
        data:data
      })
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message:'Could not Find the goal with the id of ', goalId
      })
      next(err)
    });
 }


// * `POST /goals`
// * Posts a new goal (for Admin use only)
const postGoal = (req, res, next) => {
  db.none('INSERT into goals(description,title,community_id,target_value,completed) VALUES(${descriptiion},${title},${community_id},${target_value},${completed})', req.body)
  .then(()=> {
    res.status(200)
      .json({
        status:"Success",
        message:"New Goal has been added successfully"
      })
  })
  .catch(err => {
    res.status(404)
      .json({
        status:404,
        message:'Something went wrong. Could not post a new goal'
      })
      next(err)
  })
}


// * `PATCH /goals/:goalId`
// * Patches a specific goal based on goal_id
const updateGoal = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ");
  if (req.body.description && req.body.description.toLowerCase() === "null") {
    req.body.description = null;
  }
  if (req.body.title && req.body.title.toLowerCase() === "null") {
    req.body.title = null;
  }
  if (req.body.community_id && req.body.community_id.toLowerCase() === "null") {
    req.body.community_id = null;
  }
  if (req.body.target_value && req.body.target_value.toLowerCase() === "null") {
    req.body.target_value = null;
  }
  if (req.body.completed && req.body.completed.toLowerCase() === "null") {
    req.body.completed = null;
  }
  db.none(
      "UPDATE goals SET " + queryString + " WHERE id=" + req.params.id,
      req.body
    )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Successfully updated a goal with the id of ", req.params.id
      });
    })
    .catch(err => {
      res.status(404).json({
        status:404,
        message: 'Could not update goal with the id of ', req.params.id
      })
      next(err);
    });

}

module.exports = {
  getAllGoals,
  getAGoal,
  postGoal,
  updateGoal
}
