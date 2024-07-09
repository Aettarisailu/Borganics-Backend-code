require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { orderRoutes } = require('./routes/orders.routes.js');
const ordercartRoutes = require('./routes/ordercartRoutes'); // Import ordercartRoutes
const { adminRoutes } = require('./routes/admin.routes.js');
const emailRoutes = require('./routes/emailRoutes');
const authRoutes = require('./routes/auth.routes');

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
app.use("/api", adminRoutes); // adminRoutes routes
app.use("/send", emailRoutes.EmailRoutes); // Use email routes
app.use('/api/auth', authRoutes); // Use new a/c and login and forgot routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
