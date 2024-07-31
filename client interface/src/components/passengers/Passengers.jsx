import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import RadioButton from "../../utils/RadioButton";
import "./Passengers.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Passengers = () => {
  const location = useLocation();
  const { item, passengersNumber } = location.state || {};

  const [submitted, setSubmitted] = useState(false);
  const [passengers, setPassengers] = useState([
    {
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      gender: "",
    },
  ]);

  const handleAddPassenger = () => {
    if (passengers.length < passengersNumber) {
      setPassengers([
        ...passengers,
        {
          firstName: "",
          lastName: "",
          dateOfBirth: null,
          gender: "",
        },
      ]);
    }
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newPassengers = [...passengers];
    newPassengers[index][name] = value;
    setPassengers(newPassengers);
  };

  const handleGenderChange = (index, gender) => {
    const newPassengers = [...passengers];
    newPassengers[index].gender = gender;
    setPassengers(newPassengers);
  };

  const handleSubmit = () => {
    console.log(passengers);
    setSubmitted(true);
  };

  if (submitted) {
    return null;
  }

  return (
    <div>
      <div className="passengerForm">
        {passengers.map((passenger, index) => (
          <div key={index} className="passenger">
            <div className="radioSelection">
              <RadioButton
                className="radioButton"
                label="Male"
                value="Male"
                checked={passenger.gender === "Male"}
                onChange={() => handleGenderChange(index, "Male")}
              />
              <RadioButton
                className="radioButton"
                label="Female"
                value="Female"
                checked={passenger.gender === "Female"}
                onChange={() => handleGenderChange(index, "Female")}
              />
              <RadioButton
                className="radioButton"
                label="Others"
                value="Others"
                checked={passenger.gender === "Others"}
                onChange={() => handleGenderChange(index, "Others")}
              />
            </div>
            <p>Name should be as per Government ID</p>
            <div className="otherDetails">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={passenger.firstName}
                className="names"
                onChange={(event) => handleChange(index, event)}
              />
              <input
                type="text"
                className="names"
                name="lastName"
                placeholder="Last Name"
                value={passenger.lastName}
                onChange={(event) => handleChange(index, event)}
              />
              {/* <DatePicker
                                className="datePick"
                                selected={passenger.dateOfBirth}
                                onChange={(date) => handleDateChange(index, date)}
                                dateFormat={"dd-MM-yyyy"}
                            /> */}
              <input
                type="text"
                onChange={(event) => handleChange(index, event)}
                className="date"
                value={passenger.dateOfBirth}
                placeholder="Date of birth: dd-mm-yyyy"
              />
            </div>
          </div>
        ))}
        {passengers.length < passengersNumber && (
          <button
            type="button"
            className="PassengerButton"
            onClick={handleAddPassenger}
          >
            Add Passenger
          </button>
        )}
      </div>
      <Link to={`/flights/${item._id}/seats`} state={{ item, passengersNumber, passengers}}>
        <button
          type="button"
          className="SubmitButton"
          onClick={handleSubmit}
          hidden={passengers.length < passengersNumber}
        >
          Submit
        </button>
      </Link>
    </div>
  );
};

export default Passengers;
