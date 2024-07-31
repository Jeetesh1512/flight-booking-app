const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    seatNumbers: [
      {
        row: {
          type: Number,
          required: true,
        },
        column: {
          type: String,
          required: true,
        },
        availability: {
          type: Boolean,
          required: true,
        }
      }
    ]
  }, 
  { timestamps: true }
);

module.exports = mongoose.model("Seat", seatSchema);
