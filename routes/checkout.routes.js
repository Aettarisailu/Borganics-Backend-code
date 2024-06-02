// routes/checkout.routes.js
const express = require('express');
const { createOrder } = require('../controllers/checkout.controller');

const checkoutRoutes = express.Router();

checkoutRoutes.post('/checkout', createOrder);

module.exports = { checkoutRoutes };
