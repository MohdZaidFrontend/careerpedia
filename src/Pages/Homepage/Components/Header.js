import { Link } from "react-router-dom";
import "../Homepage.css";

import headerImg1 from '../../../Assets/NewAssets/headerImg.svg'
import headerImg2 from "../../../Assets/NewAssets/headerImg.png";

import { useState } from "react";
import Contact from "../../Contact/Contact";

const Header = () => {
  const viewport_width = document.documentElement.clientWidth;

  const[modal, setModal] = useState(false);
  const handleModal = () =>{
    setModal(!modal)
  }

  return (
    <header className="header">
      {viewport_width > "800" ? (
        <img src={headerImg1} alt="Tranining institute | Careerpedia " />
      ) : (
        <img src={headerImg2} alt="Tranining institute | Careerpedia " />
      )}

      {/* <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" sandbox="" /> */}

      <div className="container">
        <h1>
          Master a <span>skill</span> and <br /> grow <span>15X</span>
        </h1>
        <div className="sub-section">
          <p
            className="apply-now-btn"
            onClick={handleModal}
            style={{ cursor: "pointer" }}
          >
            Apply Now
          </p>
          {modal && <Contact event={handleModal} />}
          <p>Free course counselling</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
