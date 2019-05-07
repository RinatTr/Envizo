import axios from 'axios';
//Data: Tonnage
export const getTonnage = () => axios.get("https://data.cityofnewyork.us/resource/ebb7-mvp5.json?$limit=5000")

export const getAllGoals = () => axios.get("/api/goals")
export const getAllGoalsPerCommunity = (id) => axios.get(`/api/goals/community/${id}`)
export const getAllUsersPerGoal = (id) => axios.get(`/api/goals/${id}/users`)

export const getAllSubscriptions = () => axios.get("/api/subscriptions/")
export const getAllUsers = () => axios.get('/api/users')
export const getAllSubmissionsPerGoal = (id) => axios.get(`/api/submissions/goal/${id}`)
export const getAllSubscriptionsPerGoal = (id) => axios.get(`/api/subscriptions/goal/${id}`)

export const addSubmission = (userId, sub) => axios.post(`/api/submissions/user/${userId}`, sub)

//User
export const getSingleSubscriptionIdForUserAndGoal = (userId, goalId) => axios.get(`/api/subscriptions/${userId}/${goalId}`)
export const addSubscription = (subscription) => axios.post(`/api/subscriptions/new`, subscription)
export const deleteSubscription = (subscriptionId) => axios.delete(`/api/subscriptions/${subscriptionId}`)
export const getSubscriptionsForAUser = (user_id) => axios.get(`/api/subscriptions/user/${user_id}`)
export const getActivityPerUser = (user_id) => axios.get(`/api/users/activity/${user_id}`)

//Community
export const getAllActivityForACommunity = (community_id) => axios.get(`/api/communities/${community_id}/activity`)
