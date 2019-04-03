const express = require('express');
const knex = require('knex');
const jwt = require('jsonwebtoken');

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
        res.json({
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

router.post('/login', (req, res) => {
  res.send(`Logged in as ${req.body.username}`);
});

module.exports = router;
