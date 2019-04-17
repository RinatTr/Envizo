import axios from 'axios';
//Data: Tonnage
export const getTonnage = () => axios.get("https://data.cityofnewyork.us/resource/ebb7-mvp5.json?$limit=5000")
export const getAllGoals = () => axios.get("/goals")
export const getAllSubscriptions = () => axios.get("/subscriptions/")
export const getAllUsers = () => axios.get('/users/')
export const getActivityPerUser = (user_id) => axios.get('/users/activity/:user_id')