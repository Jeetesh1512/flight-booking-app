import React from "react";
import "./Boarding.css"

const Boarding = ({item,passenger,seat}) => {
  return (
    <div className="BoardingBody">
      <div className="boarding-pass">
        <div className="headerBoarding">
          <h1>BOARDING PASS</h1>
        </div>
        <div className="details">
          <div className="left">
            <p>
              <strong>Flight:</strong> {item.flightNumber}
            </p>
            <p>
              <strong>Date:</strong> {item.departureDate}
            </p>
            <p>
              <strong>Class:</strong> Economy
            </p>
            <p>
              <strong>Gate:</strong> -
            </p>
          </div>
          <div className="center">
            <p>
              <strong>From:</strong> {item.departureCity}
            </p>
            <p>
              <strong>To:</strong> {item.arrivalCity}
            </p>
            <p>
              <strong>Seat:</strong> {seat}
            </p>
          </div>
          <div className="right">
            <p>
              <strong>Passenger:</strong> {`${passenger.firstName} ${passenger.lastName}`}
            </p>
            <p>
              <strong>Priority:</strong> None
            </p>
          </div>
        </div>
        <div className="footer">
          <p>Thank you for flying with us!</p>
        </div>
      </div>
    </div>
  );
};

export default Boarding;
