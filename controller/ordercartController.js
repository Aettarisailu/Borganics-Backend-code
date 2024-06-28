const Ordercart = require('../model/ordercartModel');

// Controller to handle placing an order
const placeOrder = async (req, res) => {
    try {
        const { fullName, email, phone, address, landmark, city, state, pin, cart, status } = req.body;
        
        console.log('Order request received with data:', req.body);

        // Create a new order
        const newOrder = new Ordercart({
            fullName,
            email,
            phone,
            address,
            landmark,
            city,
            state,
            pin,
            cart,
            status
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();

        res.status(201).json({
            message: 'Order placed successfully',
            order: savedOrder
        });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Error placing order', error });
    }
};

// Controller to handle fetching orders
const getOrders = async (req, res) => {
    try {
        const orders = await Ordercart.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};


module.exports = {
    placeOrder,
    getOrders // Export the new getOrders function
};
