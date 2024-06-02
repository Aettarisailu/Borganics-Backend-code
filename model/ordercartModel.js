const mongoose = require('mongoose');

const ordercartSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    landmark: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: { type: String, required: true },
    cart: { type: Array, required: true },
    status: { type: String, required: true }
});

const Ordercart = mongoose.model('Ordercart', ordercartSchema);

module.exports = Ordercart;
