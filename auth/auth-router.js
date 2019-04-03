const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/register', (req, res) => {
  res.send(`Registered up as ${req.body.username}`);
});

router.post('/login', (req, res) => {
  res.send(`Logged in as ${req.body.username}`);
});

module.exports = router;
