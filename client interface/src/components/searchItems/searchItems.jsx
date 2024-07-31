import "./searchItems.css";
import { Link } from "react-router-dom";

const SearchItems = ({ item, passengersNumber }) => {

  return (
    <div className="allData">
      <div className="dataContainer">
        <div className="leftData">
          <div className="flightNumber">
            <img src="icDottedPlane.svg" alt="" className="flightLogo" />
            <p>{item.flightNumber}</p>
          </div>
          <div className="timeAndAirport">
            <span>{item.departureTime}</span>
            <p>{item.departureCity}</p>
          </div>
        </div>
        <div className="centreData">{item.duration}</div>
        <div className="rightData">
          <div className="timeAndAirport">
            <span>{item.arrivalTime}</span>
            <p>{item.arrivalCity}</p>
          </div>
        </div>
        <div className="prices">
          <span>{item.pricePerSeat}</span>
          <Link to={`/flights/${item._id}`} state={{ item, passengersNumber }}>
            <button className="bookButton">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
