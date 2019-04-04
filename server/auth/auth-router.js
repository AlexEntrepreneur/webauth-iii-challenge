const express = require('express');
const knex = require('knex');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const knexConfig = require('../knexfile');

const Users = knex(knexConfig.development)('users');
const router = express.Router();

router.use(express.json());

router.post('/register', (req, res) => {
  let { username, password, department } = req.body;
  const requestBodyComplete = !!(username && password && department);
  const hash = bcrypt.hashSync(password, 10);

  password = hash;

  if (requestBodyComplete) {
    Users.insert({ username, password, department })
      .then(success => {
        res.status(201).json({
          message: `Registered as ${req.body.username}`
        })
      })
      .catch(err => {
        res.status(500).json({
          message: `Failed to create user ${req.body.username}. Try again.`,
          error: `${err}`
        });
      });
  }
  else {
    res.status(400).json({
      message: "Please provide a username, password & department"
    })
  }
});

function makeTokenFromUser(user) {
  const payload = {
    user_id: user.id,
    username: user.username,
    department: user.department
  }

  const options = {
    expiresIn: '1d'
  }

  const token = jwt.sign(payload, 'Temporary Secret For Testing', options);

  return token;
}

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const requestBodyComplete = !!(username && password);

  if (requestBodyComplete) {
    Users.select('*').where({ username }).first()
      .then(userObj => {
        if (userObj) {
          return userObj;
        }
        else {
          throw 'Invalid credentials. Try again.';
        }
      })
      .then(userObj => {
        const passwordIsCorrect = bcrypt.compareSync(password, userObj.password);
        if (passwordIsCorrect) {
          const token = makeTokenFromUser(userObj);
          res.json({
            token,
            message: `Welcome ${userObj.username}`
          });
        }
        else {
          throw 'Bad credentials. Try again.';
        }
      })
      .catch(err => {
        res.status(404).json({
          message: err
        });
      })
      .catch(err => {
        res.status(500).json({
          message: `failed to get users ${err}`
        });
      });
  }
  else {
    res.status(400).json({
      message: "Please provide a username, password & department"
    })
  }
});

module.exports = router;
