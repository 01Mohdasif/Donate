const mongoose = require('mongoose');

const donateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    maxlength: 10,
  },
  donationAmount: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
  panNo: {
    type: String,
    // required: true,
  },
  subscribeNewsLetter: {
    type: Boolean,
    default: false,
  },

  
});

const NewDonate = new mongoose.model("NewDonate", donateSchema);

module.exports = NewDonate;
