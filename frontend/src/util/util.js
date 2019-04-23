import axios from 'axios';
//Data: Tonnage
export const getTonnage = () => axios.get("https://data.cityofnewyork.us/resource/ebb7-mvp5.json?$limit=5000")

export const getAllGoals = () => axios.get("/goals")
export const getAllGoalsPerCommunity = (id) => axios.get(`/goals/community/${id}`)
export const getAllUsersPerGoal = (id) => axios.get(`/goals/${id}/users`)

export const getAllSubscriptions = () => axios.get("/subscriptions/")
export const getAllUsers = () => axios.get('/users')
export const getAllSubmissionsPerGoal = (id) => axios.get(`/submissions/goal/${id}`)
export const getAllSubscriptionsPerGoal = (id) => axios.get(`/subscriptions/goal/${id}`)


//User
export const getSingleSubscriptionIdForUserAndGoal = (userId, goalId) => axios.get(`/subscriptions/${userId}/${goalId}`)
export const addSubscription = (subscription) => axios.post(`/subscriptions/new`, subscription)
export const deleteSubscription = (subscriptionId) => axios.delete(`/subscriptions/${subscriptionId}`)
export const getSubscriptionsForAUser = (user_id) => axios.get(`/subscriptions/user/${user_id}`)
export const getActivityPerUser = (user_id) => axios.get(`/users/activity/${user_id}`)

//Community
export const getAllActivityForACommunity = (community_id) => axios.get(`/communities/${community_id}/activity`)