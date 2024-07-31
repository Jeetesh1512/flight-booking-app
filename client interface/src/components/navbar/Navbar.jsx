import { FaUserAlt } from "react-icons/fa";
import { SiFlightaware } from "react-icons/si";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <SiFlightaware size={200} />
          <div className="navItems">
            <FaUserAlt size={20} />
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
