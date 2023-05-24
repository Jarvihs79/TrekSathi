const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Import your auth router
const authRouter = require('./routes/auth');
const trekRouter = require('./routes/trekroute');
const queryRouter = require('./routes/queryroute');

// Connect to MongoDB
mongoose.connect(
  'URL',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(express.json());
app.use(cors());

// Use the auth router for routes starting with '/api'
app.use('/api', authRouter);
app.use('/api', trekRouter);
app.use('/api', queryRouter);

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
