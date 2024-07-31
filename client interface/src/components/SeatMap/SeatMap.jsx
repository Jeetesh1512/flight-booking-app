import React, { useState } from "react";
import Row from "./Row";
import "./SeatMap.css";
import { Link } from "react-router-dom";

const rowsData = Array.from({ length: 6 }, (_, i) => ({
  rowNumber: i + 1,
  seats: ["A", "B", "C"],
}));

const SeatMap = ({ data }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (rowNumber, seat) => {
    const seatId = `${rowNumber}-${seat}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats((prev) => prev.filter((s) => s !== seatId));
    } else if (selectedSeats.length < data.maxSeats) {
      setSelectedSeats((prev) => [...prev, seatId]);
    }
  };

  return (
    <>
      <div className="seatMap">
        {rowsData.map(({ rowNumber, seats }) => (
          <div key={rowNumber} className="rows">
            <p className="rowNumbers">{rowNumber}</p>
            <Row
              rowNumber={rowNumber}
              seats={seats}
              selectedSeats={selectedSeats}
              onSeatClick={handleSeatClick}
            />
          </div>
        ))}
      </div>
      <Link to={`/flights/${data.item._id}/seats/printboarding`} state={{data,selectedSeats}}>
        <button className="seatFinalize">Confirm Seats</button>
      </Link>
    </>
  );
};

export default SeatMap;
