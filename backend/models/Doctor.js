const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  experience: Number,
  rating: Number,
  location: String,
  consultationFee: Number,
});

module.exports = mongoose.model('Doctor', doctorSchema);
