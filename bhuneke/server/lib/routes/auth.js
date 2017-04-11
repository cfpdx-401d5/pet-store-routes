const router = require('express').Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user');
const token = require('../auth/token');
const ensureAuth = require('../auth/ensure-auth')();

function hasUsernameAndPassword(req, res, next) {
  const user = req.body;
  if(!user.username || !user.password) {
    return next({
      code: 400,
      error: 'username and password are required'
    });
  }
  next();
};

router
  .get('/verify', ensureAuth, (req, res) => {
    res.send({ valid: true });
  })
  .post('/signup', 
    bodyParser, 
    hasUsernameAndPassword, 
    (req, res, next) => {
      const userInfo = req.body;
      User.find({ username: userInfo.username }).count()
        .then(count => {
          // if (count > 0)
          //   throw {
          //     code: 400,
          //     error: `username ${userInfo.username} already exists`,
          //   };
          return new User(userInfo).save();
        })
        .then(user => {
          console.log('user', user);
          return token.sign(user);
        })
        .then(token => {
          console.log(token);
          return res.send({ token });
        })
        .catch(next);
    });

module.exports = router;
