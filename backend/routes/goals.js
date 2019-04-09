const express = require('express');
const router = express.Router();
const { getAllGoals,
        getAll,
        getAGoal,
        postGoal,
        updateGoal } = require('../db/queries/goalsQueries.js')


// * GET /goals
// * Gets all goals
router.get('/', getAll);

// * `GET /goals/community/:community_id`
// * Gets all goals for a community
router.get('/community/:id', getAllGoals);

// *`GET /goals/:goalId`
// * Get a specific goal
router.get('/:id', getAGoal);

// * `POST /goals`
// * Posts a new goal (for Admin use only)
router.post('/', postGoal);

// * `PATCH /goals/:goalId`
// * Patches a specific goal based on goal_id
router.patch('/:id', updateGoal);


module.exports = router;
