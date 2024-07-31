import React, { useEffect } from "react";
import Boarding from "../../components/boarding/Boarding";
import { useLocation } from "react-router-dom";

const Boardingpass = () => {
  const location = useLocation();
  const { data, selectedSeats } = location.state || {};
  const passengers = data?.passengers || [];
  const item = data?.item;

  console.log(passengers);
  console.log(selectedSeats);

  const combinedData = passengers.map((passenger, index) => ({
    passenger,
    seat: selectedSeats[index]
  }));

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="boarding-pass-container">
      {combinedData.map(({ passenger, seat }, index) => (
        <Boarding key={index} passenger={passenger} item={item} seat={seat} />
      ))}
    </div>
  );
};

export default Boardingpass;
