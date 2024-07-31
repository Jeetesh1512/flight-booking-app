const Seat = require("../models/Seat.js");
const Flight = require("../models/Flight.js");
const createError = require("../utils/error.js");

const createSeat = async (req, res, next) => {
  const flightId = req.params.flightId;
  const newSeat = new Seat(req.body);

  try {
    const savedSeat = await newSeat.save();
    try {
      await Flight.findByIdAndUpdate(flightId, {
        $push: { seats: savedSeat._id },
      });
      res.status(200).json(savedSeat);
    } catch (err) {
      next(createError(500, "Error updating flight with new seat"));
    }
  } catch (err) {
    next(createError(500, "Error saving seat"));
  }
};


//update
const updateSeat = async (req, res, next) => {
  try {
    const updatedSeat = await Seat.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSeat);
  } catch (err) {
    next(err);
  }
};

//delete
const deleteSeat = async (req, res, next) => {

  const flightId = req.params.flightId;

  try {
    await Flight.findByIdAndUpdate(flightId, {
      $pull: { seats: req.params.id },
    });
  } catch (err) {
    next(createError(500, "Error updating flight with new seat"));
  }
  try {
    await Seat.findByIdAndDelete(req.params.id);
    res.status(200).json("Seat has been deleted.");
  } catch (err) {
    next(err);
  }
};

//get
const getSeat = async (req, res, next) => {
  try {
    const seat = await Seat.findById(req.params.id);
    res.status(200).json(seat);
  } catch (err) {
    next(err);
  }
};

//getAll
const getAllSeat = async (req, res, next) => {
  try {
    const seats = await Seat.find();
    res.status(200).json(seats);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSeat,
  updateSeat,
  deleteSeat,
  getSeat,
  getAllSeat,
};

