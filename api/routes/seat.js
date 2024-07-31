const express = require("express");

const { verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();

const {
  createSeat,
  updateSeat,
  deleteSeat,
  getSeat,
  getAllSeat,
} = require("../controllers/seat.js")


//create
router.post("/:flightId", verifyAdmin,createSeat);

//update
router.put("/:id", verifyAdmin,updateSeat);

//delete
router.delete("/:id/:flightId",verifyAdmin,deleteSeat);

//get
router.get("/:id",getSeat);
//getall
router.get("/", getAllSeat);

module.exports = router;