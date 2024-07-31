const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const flightRoute = require("./routes/flights.js");
const passengerRoute = require("./routes/passenger.js");
const seatRoute = require("./routes/seat.js")
const cookieParser = require("cookie-parser");
const cors = require('cors')

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/flights", flightRoute)
app.use("/api/seats", seatRoute)
app.use("/api/passengers", passengerRoute)

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  });
})

app.get("/users", (req,res) => {
    res.send("Hi");
})



app.listen(5000, () => {
  connect();
  console.log("connected to backend!");
});
