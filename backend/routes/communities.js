const express = require('express');
const router = express.Router();
const { getAllCommunities, addCommunity  } = require('../db/queries/communitiesQueries.js')

router.get('/', getAllCommunities);
router.post('/new', addCommunity);

module.exports = router
