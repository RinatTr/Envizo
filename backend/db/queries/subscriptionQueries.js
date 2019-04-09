const { db } = require('./index');


const getAllSubscriptions = (req, res, next) => {
  db.any('SELECT * FROM subscriptions')
    .then(subscriptions => {
      res.status(200).json({
        subscriptions: subscriptions,
        message: 'All Subscriptions'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSubscriptionsForAGoal = (req, res, next) => {
  const goalId = parseInt(req.params.goal_id)
  db.any('SELECT * FROM subscriptions JOIN goals ON goals.id = subscriptions.goal_id WHERE goals.id=$1', goalId)
    .then(subscripGoals => {
      res.status(200).json({
        subscripGoals: subscripGoals,
        message: 'Active subscriptions for a given goal'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSingleSubscriptionIdForUserAndGoal  = (req, res, next) => {
  const userId = parseInt(req.params.user_id)
  const goalId = parseInt(req.params.goal_id)
  db.any('SELECT subscriptions.id FROM subscriptions WHERE subscriptions.user_id=$1 AND subscriptions.goal_id=$2', [userId, goalId])
    .then(subId => {
      res.status(200).json({
        subId: subId
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSubscriptionsForAUser = (req, res, next) => {
  const userId = parseInt(req.params.user_id)
  db.any('SELECT * FROM subscriptions JOIN users ON users.id = subscriptions.user_id WHERE users.id=$1', userId)
    .then(subscripUser => {
      res.status(200).json({
        subscripUser: subscripUser,
        message: 'Subscriptions for a user'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addSubcription = (req, res, next) => {
  db.none('INSERT INTO subscriptions(goal_id, user_id) VALUES(${goal_id}, ${user_id})', {
    goal_id: req.body.goal_id,
    user_id: req.body.user_id
  })
    .then(newSubscript => {
      res.status(200).json({
        message: 'You have subscribed to a goal!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deleteSubscription = (req, res, next) => {
  const subscriptionId = parseInt(req.params.subscription_id)
  db.none('DELETE FROM subscriptions WHERE id=$1', subscriptionId)
    .then(() => {
      res.status(200).json({
        message: 'You have unsubscribed from a goal'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllSubscriptions, getSubscriptionsForAGoal, getSubscriptionsForAUser, addSubcription, deleteSubscription, getSingleSubscriptionIdForUserAndGoal }
