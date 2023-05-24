// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add more fields as needed (e.g., username, name, etc.)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
