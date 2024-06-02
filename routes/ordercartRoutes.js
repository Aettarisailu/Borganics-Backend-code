const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controller/ordercartController'); // Correct path

router.post('/ordercart', placeOrder);

module.exports = router;
