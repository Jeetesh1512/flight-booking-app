import React, { useState, useEffect } from "react";
import "./List.css";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import SearchItems from "../../components/searchItems/searchItems.jsx";

const List = () => {
  const location = useLocation();
  const initialData = location.state;

  const [departureCity, setDepartureCity] = useState(initialData.departureCity);
  const [arrivalCity, setArrivalCity] = useState(initialData.arrivalCity);
  const [startDate, setStartDate] = useState(initialData.startDate);
  const [options, setOptions] = useState(initialData.options);
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/flights?departureCity=${departureCity}&arrivalCity=${arrivalCity}&departureDate=${startDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFlightData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [departureCity, arrivalCity, startDate]);

  return (
    <div>
      <Header type="list" />

      <div className="listResult">
        {flightData.map((item) => (
          <SearchItems key={item._id} item={item} passengersNumber={initialData.options} />
        ))}
      </div>
    </div>
  );
};

export default List;
