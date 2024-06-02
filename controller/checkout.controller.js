// controllers/checkout.controller.js
const OrderModel = require('../models/orders.model');

const createOrder = async (req, res) => {
  try {
    const order = new OrderModel(req.body);
    await order.save();
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createOrder };
