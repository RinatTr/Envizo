import axios from 'axios';
//Data: Tonnage
export const getTonnage = () => axios.get("https://data.cityofnewyork.us/resource/ebb7-mvp5.json?$limit=5000")
export const getAllGoals = () => axios.get("/goals")
