// routes/orders.js

const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Import the Order model

// Route to fetch orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders
    res.status(200).json({ orders });
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
