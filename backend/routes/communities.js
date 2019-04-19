const express = require('express');
const router = express.Router();
const { 
  getAllCommunities, 
  getCommunityForAUser,
  addCommunity, 
  getAllActivityForACommunity  
} = require('../db/queries/communitiesQueries.js')

router.get('/', getAllCommunities);
router.get('/user/:id', getCommunityForAUser);
router.get('/:id/activity', getAllActivityForACommunity)
router.post('/new', addCommunity);

module.exports = router
