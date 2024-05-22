// routes/users.routes.js

const express = require('express');
const { registerUser, loginUser } = require('../controller/users.controller');

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);

module.exports = {
  userRoutes
};
