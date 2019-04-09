const express = require('express');
const router = express.Router();
const { getAllCommunities, addCommunity, getAllActivityForACommunity  } = require('../db/queries/communitiesQueries.js')

router.get('/', getAllCommunities);
router.get('/:id/activity', getAllActivityForACommunity)
router.post('/new', addCommunity);

module.exports = router
