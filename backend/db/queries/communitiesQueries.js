const { db } = require('./index');


const getAllCommunities = (req, res, next) => {
  db.any('SELECT * FROM communities')
    .then(communities => {
    res.status(200).json({
      communities: communities,
      message: 'All Communities'
    })
    })
    .catch(err => {
      return next(err)
    })
}

const getAllActivityForACommunity = (req, res, next) => {
  const communityId = parseInt(req.params.id)
  db.any('SELECT activity.id, type, time_stamp, username, community_id FROM activity JOIN users ON users.id = activity.user_id JOIN communities ON communities.id = users.community_id WHERE communities.id=$1', communityId)
    .then(activity => {
      res.status(200).json({
        activity: activity
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addCommunity = (req, res, next) => {
  db.none('INSERT INTO communities (name) VALUES(${name})', {
    name: req.body.name
  })
    .then(() => {
      res.status(200).json({
        message: 'You have added a community'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllCommunities, addCommunity, getAllActivityForACommunity }
