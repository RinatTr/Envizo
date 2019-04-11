const { db } = require('./index.js');
const authHelpers = require("../../auth/helpers");

const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);

  db.one('INSERT INTO users(username, password_digest, email, community_id, avatar_img) VALUES(${username}, ${password_digest}, ${email}, ${community_id}, ${avatar_img}) RETURNING id',
    { username: req.body.username, password_digest: hash, email:req.body.email, community_id:req.body.community_id ,avatar_img:req.body.avatar_img })
   // req.body)
    .then((data) => {
      db.none('INSERT INTO activity(user_id, type) VALUES($1,$2)',[data.id,'joined'])
      .then(()=> {
        res.status(200).json({
          status: "success",
          message: "Created a user and new activity"
        })
      })
    })
    .catch(err => {
      next(err)
    })
}

const  logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
}

const loginUser = (req, res)=> {
    console.log("LOGINUSER ",req.user);
  res.json(req.user);
}

const isLoggedIn = (req, res) => {
  console.log("this is req.user on Isloggedin ", req.user);
  if (req.user) {

    res.json({ id: req.user });
  } else {
    res.json({ id: null });
  }
}

module.exports = {
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn
};
