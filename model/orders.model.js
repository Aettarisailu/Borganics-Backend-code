// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//   price: {
//     type: String,
//     required: true
//   },
//   product: {
//     type: String,
//     required: true
//   },
//   Date: {
//     type: Date,
//     default: Date.now
//   },
//   quantity: {
//     type: String,
//     required: true
//   },
//   time: {
//     type: Date,
//     default: Date.now
//   },
//   paymentMethod: {
//     type: String
//   },
//   email: {
//     type: String
//   },
//   addr: {
//     type: String
//   },
//   landmark: {
//     type: String
//   },
//   city: {
//     type: String
//   },
//   state: {
//     type: String
//   },
//   pin: {
//     type: String
//   },
//   phone: {
//     type: String
//   },
//   username: {
//     type: String
//   }
// });

// const orderModel = mongoose.model('Orders', orderSchema);

// module.exports = orderModel;


//This is for add Cart updated
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true
  },
  product: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  },
  quantity: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  paymentMethod: {
    type: String
  },
  email: {
    type: String
  },
  addr: {
    type: String
  },
  landmark: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  pin: {
    type: String
  },
  phone: {
    type: String
  },
  username: {
    type: String
  },
  status: {
    type: String,
    default: 'in_cart', // can be 'in_cart' or 'placed'
    enum: ['in_cart', 'placed']
  }
});

const orderModel = mongoose.model('Orders', orderSchema);

module.exports = orderModel;
