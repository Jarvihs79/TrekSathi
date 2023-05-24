const mongoose = require('mongoose');

const trekSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  trekDateTime: {
    type: Date,
    required: true,
  },
  startingPoint: {
    type: String,
    required: true,
  },
  endPoint: {
    type: String,
    required: true,
  },
  trekDifficulty: {
    type: String,
    required: true,
  },
  moreInfo: {
    type: String,
  },
  trekName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Trek', trekSchema);
