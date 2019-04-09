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
  db.any('SELECT * FROM submissions JOIN subscriptions ON subscriptions_id = subscriptions.id WHERE goal_id = $1', goalId)
  .then(data => {
    res.status(200).json({
      status: 'success',
      submissions: data,
      message: 'Received all submissions for a single goal'
    })
  })
  .catch(err => next(err))
}

const createNewSubmission = (req, res, next) => {
  db.none('INSERT INTO submissions(img_url, subscriptions_id) VALUES(${img_url}, ${subscriptions_id})', req.body)
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

module.exports = {
  getAllSubmissions,
  getAllSubmissionForSingleGoal,
  createNewSubmission,
  deleteSubmission
}
