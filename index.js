require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { orderRoutes } = require('./routes/orders.routes.js');
const ordercartRoutes = require('./routes/ordercartRoutes'); // Import ordercartRoutes
const { adminRoutes } = require('./routes/admin.routes.js');
// const { checkoutRoutes } = require('./routes/checkout.routes.js');
const emailRoutes = require('./routes/emailRoutes');
// const { userRoutes } = require('./routes/users.routes.js'); //userlogin

const app = express();
const PORT = process.env.PORT || 5001;
// Connection URI
const mongodb_url = process.env.mongodb_url;

// Connect to MongoDB
mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => {
    console.log('Connected to MongoDB');
  })
 .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(cors());
app.use(bodyParser.json());

// Create Nodemailer transporter


// Routes
app.use('/api', ordercartRoutes); // Use ordercart routes
app.use('/api', orderRoutes); // Use order routes
app.use("/api", adminRoutes);
app.use("/send", emailRoutes.EmailRoutes); // Use email routes
// app.use('/api', checkoutRoutes); // Use checkout routes
// app.use('/api', userRoutes);  //userlogin

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
