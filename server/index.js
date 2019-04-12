const express = require('express');
const cors = require('cors');

const authRoutes = require('./auth/auth-router');
const usersRoutes = require('./users/users-router');

const server = express();

const PORT = 4321;

server.use(cors());
server.use('/api', authRoutes);
server.use('/api/users', usersRoutes);

server.get('/', (req, res) => {
  res.json(`Welcome To My Token Auth Test API`)
});

server.listen(PORT, () => {
  console.log(`\n** Server Listening on Port ${PORT} **\n`);
});
