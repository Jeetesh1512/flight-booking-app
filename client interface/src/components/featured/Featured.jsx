import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
import { MdCardTravel, MdOutlineFlight } from "react-icons/md";
import "../featured/Featured.css";

const Featured = () => {
  return (
    <div>
      <div className="features">
        <div className="singleFeature">
          <TbWorldSearch size={35} />
          <p className="write">Explore everwhere</p>
        </div>
        <div className="singleFeature">
          <FaUmbrellaBeach size={35} />
          <p className="write">Best travel places</p>
        </div>
        <div className="singleFeature">
          <MdCardTravel size={35} />
          <p className="write">Travel for work</p>
        </div>
        <div className="singleFeature">
          <MdOutlineFlight size={55} />
          <p className="write">Best and cheapest flights</p>
        </div>
      </div>

      <div className="pictureDiv">
        <img
          src="flight.jpg"
          alt=".../public/image"
          className="picture"
        />
      </div>
    </div>
  );
};

export default Featured;
