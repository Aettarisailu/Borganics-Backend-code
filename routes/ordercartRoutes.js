const express = require('express');
const router = express.Router();
const { placeOrder, getOrders } = require('../controller/ordercartController'); // Correct path

router.post('/ordercarts', placeOrder);
router.get('/ordercarts', getOrders); // Add the new GET route

module.exports = router;
