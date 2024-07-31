const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  departureCity: {
    type: String,
    required: true,
  },
  arrivalCity: {
    type: String,
    required: true,
  },
  departureDate: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  duration:{
    type:String,
    required:true,
  },
  seats:{
    type:String,
  },
  pricePerSeat: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Flight", flightSchema);
