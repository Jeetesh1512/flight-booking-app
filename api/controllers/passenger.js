const Passenger = require("../models/Passenger.js");

//create
const createPassenger = async (req, res, next) => {
  const newPassenger = new Passenger(req.body);

  try {
    const savedPassenger = await newPassenger.save();
    res.status(200).json(savedPassenger);
  } catch (err) {
    next(err);
  }
};


//get
const getPassenger = async (req, res, next) => {
  try {
    const passenger = await Passenger.findById(req.params.id);
    res.status(200).json(passenger);
  } catch (err) {
    next(err);
  }
};

//getAll
const getAllPassenger = async (req, res, next) => {
  try {
    const passengers = await Passenger.find();
    res.status(200).json(passengers);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPassenger,
  getPassenger,
  getAllPassenger,
};
