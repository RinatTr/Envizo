const express = require('express');
const router = express.Router();
const { getAllSubscriptions, getSubscriptionsForAGoal, getSubscriptionsForAUser, addSubscription, deleteSubscription, getSingleSubscriptionIdForUserAndGoal  } = require('../db/queries/subscriptionQueries.js')


router.get('/', getAllSubscriptions);
router.get('/goal/:goal_id', getSubscriptionsForAGoal);
router.get('/user/:user_id', getSubscriptionsForAUser);
router.get('/:user_id/:goal_id', getSingleSubscriptionIdForUserAndGoal)
router.post('/new', addSubscription);
// router.delete('/:subscription_id', deleteSubscription);


module.exports = router
