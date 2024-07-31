import "./Header.css";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [startDate, setStartDate] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(1);

  const navigate = useNavigate();

  const handleInterchange = () => {
    setDepartureCity(arrivalCity);
    setArrivalCity(departureCity);
  };

  const handleOption = (operation) => {
    setOptions((prev) => {
      const newCount = operation === "i" ? prev + 1 : prev - 1;
      return newCount >= 0 ? newCount : 0;
    });
  };

  const handleSearch = () => {
    navigate("/flights", {
      state: { departureCity, arrivalCity, startDate, options },
    });
  };

  return (
    <div className="header">
      <div className="tagline">
        Millions of cheap flights. One simple search.
      </div>

      {type !== "list" && (
        <div className="headerSearch">
          <div className="headerSearchItem">
            <input
              type="text"
              placeholder="Departure Code"
              className="headerSearchInput"
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
            />
          </div>
          <FaArrowRightArrowLeft
            className="arrow"
            style={{ color: "gray" }}
            onClick={handleInterchange}
          />
          <div className="headerSearchItem">
            <input
              type="text"
              placeholder="Arrival Code"
              className="headerSearchInput"
              value={arrivalCity}
              onChange={(e) => setArrivalCity(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <span className="headerSearchText">Departure date</span>
            <input
              type="text"
              onChange={(e) => setStartDate(e.target.value)}
              className="date"
              placeholder="Date: dd-mm-yyyy"
            />
          </div>
          <div className="headerSearchItemNo">
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >
              {`Passengers: ${options}`}
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionItems">
                  <span className="optionText">Passengers</span>
                  <div className="counters">
                    <button
                      disabled={options <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
