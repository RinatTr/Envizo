const express = require('express');
const router = express.Router();
const { 
  getAllSubmissions, 
  getAllSubmissionForSingleGoal, 
  createNewSubmission, 
  deleteSubmission
} = require('../db/queries/submissionQueries');

router.get('/', getAllSubmissions);
router.get('/:goalId', getAllSubmissionForSingleGoal);
router.post('/', createNewSubmission);
router.delete('/:submissionId', deleteSubmission);

module.exports = router;