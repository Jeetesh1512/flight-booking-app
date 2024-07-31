import React from "react";
import { useLocation } from "react-router-dom";
import SeatMap from "../../components/SeatMap/SeatMap";

const Bookseats = () => {
  const location = useLocation();
  const { item, passengersNumber, passengers } = location.state || {};
  const maxSeats=passengersNumber;
  return (
    <div>
      <p className="tell">Select the seats you want below:</p>
      <SeatMap data={{maxSeats,item,passengersNumber,passengers}}/>
    </div>
  );
};

export default Bookseats;
