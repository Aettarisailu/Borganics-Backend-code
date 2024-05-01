const express = require('express');
const { createOrder, getOrders } = require('../controller/orders.controller');

const orderRoutes = express.Router();

orderRoutes.post('/place/order',createOrder);
orderRoutes.get('/orders', getOrders);

module.exports = {
    orderRoutes,
}
