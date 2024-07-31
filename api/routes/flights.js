const express = require("express");
const {
  createFlight,
  updateFlight,
  deleteFlight,
  getFlight,
  getAllFlight,
} = require("../controllers/flight.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();


//create
router.post("/", verifyAdmin,createFlight);

//update
router.put("/:id", verifyAdmin,updateFlight);

//delete
router.delete("/:id",verifyAdmin,deleteFlight);

//get
router.get("/:id",getFlight);
//getall
router.get("/", getAllFlight);

module.exports = router;
