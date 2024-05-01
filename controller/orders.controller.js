const orderModel = require('../model/orders.model');
const nodemailer = require('nodemailer');

const createOrder = async (req,res) => {
  try{
    console.log("req.body..",req.body)
    const order = new orderModel(req.body)
    order.save()
    res.send({"msg":"orderCreated.."})
  }catch(error){
    console.log(error)
    res.send({"msg":"server error"})

  }
}

const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({}, '-__v'); // Fetch all orders excluding the __v field
    res.status(200).json({ orders });
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  createOrder,
  getOrders
}