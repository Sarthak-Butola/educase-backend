// const schoolRoutes = require('./routes/schoolRoutes');
// app.use('/api', schoolRoutes);


const express = require('express');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');

// Load environment variables
dotenv.config();

// Init express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api', schoolRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
