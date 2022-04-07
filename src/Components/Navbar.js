import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../Components/ComponentCss/ComponentStyle.css";
import Contact from "../Pages/Contact/Contact";

import { FaBars, FaTimes } from "react-icons/fa";
import Mentor from "../Pages/Contact/Mentor";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    return setClick(!click);
  };

  const [color, setColor] = useState(false);

  const handleColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  const [modalMentor, setModalMentor] = useState(false);
  const handleMentorModal = () => {
    setModalMentor(!modalMentor);
  };

  window.addEventListener("scroll", handleColor);

  return (
    <div className={color ? "navbar navbar-scroll" : "navbar "}>
      <div className="logo">
        <Link to="/" exact>
          <img
            src={require("../Assets/careerpedia_logo.png")}
            alt="careerpedia logo"
            title="careerpedia logo"
            loading="eager"
          />
        </Link>
      </div>

      <div className={click ? "nav-menu active" : "nav-menu"}>
        <div className="container">
          <HashLink to="/#programs">
            <p onClick={handleClick} className="nav-link">
              Programs
            </p>
          </HashLink>

          <Link to="/about-us">
            <p onClick={handleClick} className="nav-link">
              About Us
            </p>
          </Link>

          <p onClick={handleModal} className="nav-link">
            Contact Us
          </p>
          {modal && <Contact event={handleModal} />}
        </div>

        <div className="mentor-btn">
          <p onClick={handleMentorModal}>Apply for Mentor</p>
          {modalMentor && <Mentor event={handleMentorModal} />}
        </div>
      </div>

      <div className="nav-hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={25} style={{ color: "#2C3554" }} />
        ) : (
          <FaBars size={25} style={{ color: "#2C3554" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
