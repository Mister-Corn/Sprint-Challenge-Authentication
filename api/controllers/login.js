const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      console.log("login.js--login ERROR:",err);
      res.status(500).json({ error: 'Cannot log you in. Please try again later.' });
      return;
    }
    if (user === null) {
      res.status(403).json({ error: 'Invalid Username/Password' });
      return;
    }
    // user.checkPassword(password, (nonMatch, hashMatch) => {
    //   // This is an example of using our User.method from our model.
    //   if (nonMatch !== null) {
    //     res.status(422).json({ error: 'passwords dont match' });
    //     return;
    //   }
    //   if (hashMatch) {
    //     const payload = {
    //       username: user.username
    //     }; // what will determine our payload.
    //     const token = jwt.sign(payload, mysecret); // creates our JWT with a secret and a payload and a hash.
    //     res.json({ token }); // sends the token back to the client
    //   }
    // });
    user.checkPassword(password)
      .then(bool => {
        if (bool) {
          const payload = {
            username: user.username
          }; // what will determine our payload.
          const token = jwt.sign(payload, mysecret); // creates our JWT with a secret and a payload and a hash.
          res.json({ token }); // sends the token back to the client
        } else {
          res.status(403).json({ error: 'Invalid Username/Password' });
        }
      })
      .catch(err => {
        console.log("login.js--login-checkPassword ERROR:",err);
        res.status(500).json({ error: 'Cannot log you in. Please try again later.' });
      });
  });
};

module.exports = {
  login
};
