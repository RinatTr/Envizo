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
  db.any(`SELECT subscriptions.id, subscriptions.goal_id, subscriptions.user_id, goals.description, goals.title, goals.target_value, goals.community_id, users.username, communities.name FROM subscriptions
          JOIN goals ON goals.id = subscriptions.goal_id
          JOIN users ON subscriptions.user_id = users.id
          JOIN communities ON goals.community_id = communities.id
          WHERE goals.id=$1`, goalId)
    .then(data => {
      res.status(200).json({
        subscriptions: data,
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

const addSubscription = (req, res, next) => {
  db.one('INSERT INTO subscriptions(goal_id, user_id) VALUES(${goal_id}, ${user_id}) RETURNING id', {
    goal_id: req.body.goal_id,
    user_id: req.body.user_id
  })
  .then((data) => {
    db.none('INSERT INTO activity(type, user_id, subscription_id) VALUES($1,$2,$3)',['subscribed',parseInt(req.body.user_id),parseInt(data.id)])
      .then(() => {
        res.status(200).json({
          message: 'user subscribed to a goal and added activity'
        })
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

module.exports = { getAllSubscriptions, getSubscriptionsForAGoal, getSubscriptionsForAUser, addSubscription, deleteSubscription, getSingleSubscriptionIdForUserAndGoal }
