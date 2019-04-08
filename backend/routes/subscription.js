const express = require('express');
const router = express.Router();
const { getAllSubscriptions, getSubscriptionsForAGoal, getSubscriptionsForAUser, addSubcription, deleteSubscription  } = require('../db/queries/subscriptionQueries.js')


router.get('/', getAllSubscriptions);
router.get('/goal/:goal_id', getSubscriptionsForAGoal);
router.get('/user/:user_id', getSubscriptionsForAUser);
router.post('/new', addSubcription);
router.delete('/:subscription_id', deleteSubscription);

module.exports = router
