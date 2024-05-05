require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { orderRoutes } = require('./routes/orders.routes.js');
const { adminRoutes } = require('./routes/admin.routes.js');

const app = express();

// Connection URI
// const uri = 'mongodb://localhost:27017/Orderconform';
// const uri = 'mongodb+srv://nanisaimedia:Dzz6ACykBKlJtCb7@cluster0.7i80y3t.mongodb.net/Orderconform'
const mongodb_url = process.env.mongodb_url

// Connect to MongoDB
mongoose.connect(mongodb_url
  
)
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', orderRoutes); // Use order routes
app.use("/api", adminRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});