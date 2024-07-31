import React, { useState, useEffect } from 'react';
import Passengers from '../../components/passengers/Passengers';
import Header from '/home/jeet/Dropbox/flight-booking/src/components/header/Header.jsx';
import SeatMap from '../../components/SeatMap/SeatMap';
import './Details.css';
import { useLocation } from "react-router-dom";

const Details = () => {

  const location = useLocation();
  const {item,passengersNumber} = location.state || {};

  return (
    <div>
      <Header type="list" />
      <Passengers />
      {/* <p className="tell">
        Select the seats you want below:
      </p>
      <SeatMap maxSeats={passengersNumber} item={item}/> */}
    </div>
  );
}

export default Details;
