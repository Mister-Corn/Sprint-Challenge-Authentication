const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create({ username, password })
    .then(({username}) => {
      const payload = {
        username
      }; // what will determine our payload.
      const token = jwt.sign(payload, mysecret); // creates our JWT with a secret and a payload and a hash.
      res.status(201).json({username, token});
    })
    .catch(err => {
      console.log("controllers--users-createUser ERROR:",error);
      res.status(500).json({ error: "Could not register user into server", message: err.message });
    });
};

module.exports = {
  createUser
};
