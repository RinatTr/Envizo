const passport = require("passport");
const {db} = require('../db/queries/index.js')


module.exports = () => {
  passport.serializeUser((user, done) => {

    //took out .username in user
    done(null, user.id);
  });
//took out name from user
  passport.deserializeUser((userId, done) => {


    db.one("SELECT * FROM users WHERE id = ${userId}", {
      //added user. instead of username to username
      userId: userId
    })
      .then(user => {
        // console.log('in deserial then, this is user ',user);
        //took out username from user.
        done(null, user.id);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
