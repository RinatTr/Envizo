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


const addCommunity = (req, res, next) => {
  db.none('INSERT INTO community (name) VALUES(${name})', {
    name: req.body.name
  })
    .then(()) => {
      res.status(200).json({
        message: 'You have added a community'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllCommunities, addCommunity }
