const Ordercart = require('../model/ordercartModel');

// Controller to handle placing an order
const placeOrder = async (req, res) => {
    try {
        const { fullName, email, phone, address, landmark, city, state, pin, cart, status } = req.body;
        
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

module.exports = {
    placeOrder
};
