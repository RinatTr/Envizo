import axios from 'axios';
//Data: Tonnage
export const getTonnage = () => axios.get("https://data.cityofnewyork.us/resource/ebb7-mvp5.json?$limit=5000")
export const getAllGoals = () => axios.get("/goals")
export const getAllSubscriptions = () => axios.get("/subscriptions/")

//Goal
export const getAllSubmissionsPerGoal = (id) => axios.get(`/submissions/goal/${id}`)
export const getAllSubscriptionsPerGoal = (id) => axios.get(`/subscriptions/goal/${id}`)


//User
export const getSingleSubscriptionIdForUserAndGoal = (userId, goalId) => axios.get(`/subscriptions/${userId}/${goalId}`)
export const addSubscription = (subscription) => axios.post(`/subscriptions/new`, subscription)
export const deleteSubscription = (subscriptionId) => axios.delete(`/subscriptions/${subscriptionId}`)
