const restrictedRoute = (req, res, next) => {
  const jwt = require('jsonwebtoken');
  const knex = require('knex');

  const knexConfig = require('./knexfile');

  const Users = knex(knexConfig.development)('users');
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, 'Temporary Secret For Testing', (error, decodedToken) => {
      if (error) {
        res.status(401).json('unauthorized token');
      }
      else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  }
  else {
    res.json('You shall not pass! You need to be authed');
  }
}

module.exports = {
  restrictedRoute
};
