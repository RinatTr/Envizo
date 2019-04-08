const express = require('express');
const router = express.Router();
const { getAllSubscriptions, getSubscriptionsForAGoal, getSubscriptionsForAUser, addSubcription, deleteSubscription  } = require('.../db/queries/subscriptionQueries.js')





module.exports = router
