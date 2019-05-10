const { db } = require('.');


const getAllSubmissions = (req, res, next) => {
  db.any('SELECT * FROM submissions')
  .then(data => {
    res.status(200).json({
      status: 'success',
      submissions: data,
      message: 'Received all submissions'
    })
  })
  .catch(err => next(err))
}

const getAllSubmissionForSingleGoal = (req, res, next) => {
  let goalId = parseInt(req.params.goalId);
  db.any('SELECT * FROM submissions WHERE goal_id = $1', goalId)
  .then(data => {
    res.status(200).json({
      status: 'success',
      submissions: data,
      message: 'Received all submissions for a single goal'
    })
  })
  .catch(err => next(err))
}

const getAllSubmissionsPerUserPerGoal = (req, res, next) => {
  let goalId = parseInt(req.params.goal_id)
  let userId = parseInt(req.params.user_id)
  db.any(`SELECT * FROM submissions WHERE goal_id = $1 AND user_id = $2`, [goalId, userId])
    .then(data => {
      res.status(200).json({
        status: 'success',
        submissions: data,
        message: "Received all submissions for a goal for user "+userId
      })
    })
    .catch(err => next(err))
}

const createNewSubmission = (req, res, next) => {
  //req.body needs to include goal_id,subscription_id and params needs to have user_id
  let subCount = +req.body.sub_count
  if (subCount === 500) {
    db.none('UPDATE goals SET completed = $1 WHERE id = $2', [true, req.body.goal_id])
    .then(() => {
      db.none('INSERT INTO activity(type, user_id, subscription_id) VALUES($1,$2,$3)',['milestone',parseInt(req.params.user_id),parseInt(req.body.subscriptions_id)])
      .then(() => {
        res.status(200).json({
          status: 'success',
          message: 'Updated Goal and added activity'
        })
      })
    })
    .catch(err => next(err))
  } else {
    db.none('INSERT INTO submissions(img_url, user_id, goal_id ) VALUES($1, $2, $3)', [req.body.img_url,req.params.user_id, req.body.goal_id])
    .then(() => {
      db.none('INSERT INTO activity(type, user_id, subscription_id) VALUES($1,$2,$3)',['uploaded',parseInt(req.params.user_id),parseInt(req.body.subscriptions_id)])
      .then(() => {
        res.status(200).json({
          status: 'success',
          message: 'Received a new submission and added activity'
        })
      })
    })
    .catch(err => next(err))
  }
}

const deleteSubmission = (req, res, next) => {
  let submissionId = parseInt(req.params.submissionId);
  db.none('DELETE FROM submissions WHERE id = $1', submissionId)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Submission deleted'
    })
  })
  .catch(err => next(err))
}

const countSubPerGoal = ( req, res, next) => {
  let goalId = req.params.goalId;
  db.any('SELECT COUNT(submissions.id) AS submissions_count, goal_id FROM submissions WHERE goal_id = $1 GROUP BY goal_id',goalId)
    .then(data => {
      res.status(200).json({
        status:'success',
        message:'Received subs for a goal',
        count:data
      })
    })
    .catch(err => next(err))
}

module.exports = {
  getAllSubmissions,
  getAllSubmissionForSingleGoal,
  getAllSubmissionsPerUserPerGoal,
  createNewSubmission,
  deleteSubmission,
  countSubPerGoal
}
