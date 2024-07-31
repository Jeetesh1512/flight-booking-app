import React from 'react';
import './Seat.css';

const Seat = ({ seatId, isSelected, onClick }) => {
  return (
    <div
      className={`seat ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {seatId.split('-')[1]}
    </div>
  );
};

export default Seat;
