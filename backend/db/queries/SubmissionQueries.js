const { db } = require('./index');

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

const getAllSubmissionForSingleGoal = () => {
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

const createNewSubmission = () => {
  db.one('INSERT INTO submissions(img_url, subscriptions_id) VALUES(${img_url}, ${subscriptions_id}) RETURNING *', req.body)
  .then(data => {
    res.status(200).json({
      status: 'success',
      submissions: data,
      message: 'Received a new submission'
    })
  })
  .catch(err => next(err))
}

const deleteSubmission = () => {
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
