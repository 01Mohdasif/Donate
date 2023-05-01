const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  

  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pan: {
    type: String,
    // required: true,
  },
  
});

const Donate = new mongoose.model("Donate", donationSchema);

module.exports = Donate;
