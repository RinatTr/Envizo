const express = require('express');
const router = express.Router();
const {
  getAllSubmissions,
  getAllSubmissionForSingleGoal,
  createNewSubmission,
  deleteSubmission
} = require('../db/queries/SubmissionQueries');

router.get('/', getAllSubmissions);
router.get('/:goalId', getAllSubmissionForSingleGoal);
router.post('/:user_id', createNewSubmission);
router.delete('/:submissionId', deleteSubmission);

module.exports = router;
