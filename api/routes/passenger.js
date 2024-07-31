const express = require("express");
const {
  createPassenger,
  getPassenger,
  getAllPassenger,
} = require("../controllers/passenger.js");
const {verifyUser} = require("../utils/verifyToken.js");

const router = express.Router();


//create
router.post("/", verifyUser,createPassenger);

//get
router.get("/:id",verifyUser,getPassenger);
//getall
router.get("/",verifyUser,getAllPassenger);

module.exports = router;
