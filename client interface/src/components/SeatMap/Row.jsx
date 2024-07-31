import React from 'react';
import Seat from './Seat';
import './Row.css';

const Row = ({ rowNumber, seats, selectedSeats, onSeatClick }) => {
  return (
    <div className="seatRow">
      {seats.map((seat) => {
        const seatId = `${rowNumber}-${seat}`;
        const isSelected = selectedSeats.includes(seatId);
        return (
          <Seat
            key={seatId}
            seatId={seatId}
            isSelected={isSelected}
            onClick={() => onSeatClick(rowNumber, seat)}
          />
        );
      })}
    </div>
  );
};

export default Row;
