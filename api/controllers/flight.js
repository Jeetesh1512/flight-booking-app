const Flight = require("../models/Flight.js");

//create
const createFlight = async (req, res, next) => {
  const newFlight = new Flight(req.body);

  try {
    const savedFlight = await newFlight.save();
    res.status(200).json(savedFlight);
  } catch (err) {
    next(err);
  }
};

//update
const updateFlight = async (req, res, next) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFlight);
  } catch (err) {
    next(err);
  }
};

//delete
const deleteFlight = async (req, res, next) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.status(200).json("Flight has been deleted.");
  } catch (err) {
    next(err);
  }
};

//get
const getFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.status(200).json(flight);
  } catch (err) {
    next(err);
  }
};

//getAll
const getAllFlight = async (req, res, next) => {
  try {
    const flights = await Flight.find(req.query).limit(req.query.limit);
    res.status(200).json(flights);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createFlight,
  updateFlight,
  deleteFlight,
  getFlight,
  getAllFlight,
};
