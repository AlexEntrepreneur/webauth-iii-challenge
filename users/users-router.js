const express = require('express');
const knex = require('knex');

const middleware = require('../middleware');
const knexConfig = require('../knexfile');

const router = express.Router();
const authRequired = middleware.restrictedRoute;
const Users = knex(knexConfig.development)('users');

router.use(express.json());

router.get('/', authRequired, (req, res) => {
  const requestUserInfo = req.decodedToken;
  const getUsersInDepartment = (department) => {
    return Users.select('id', 'username', 'department').where({ department });
  }

  getUsersInDepartment(requestUserInfo.department)
    .then(usersArray => {
      res.json(usersArray);
    })
    .catch(err => {
      res.status(500).json({
        message: `Failed to get users ${err}`
      });
    });
});

module.exports = router;
