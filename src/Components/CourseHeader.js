import { Link } from "react-router-dom";

import HeaderImg from "../Assets/NewAssets/headerDigitalMarketing.svg";

import clock from "../Assets/NewAssets/clock.svg";
import location from "../Assets/NewAssets/location.svg";
import { HashLink } from "react-router-hash-link";

import { useState } from "react";
import Contact from "../Pages/Contact/Contact";

const CourseHeader = ({ headerData, altdata }) => {


// For opening contact-= us modal form
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };


  return (
    <section className="course-header">
      <div className="left-section">
        <div className="steps">
          <Link to="/" exact>
            Home
          </Link>

          <div className="back-img">
            <img src={require("../Assets/back.png")} alt="" />
          </div>

          <HashLink to="/#programs" exact>
            Programs
          </HashLink>

          <div className="back-img">
            <img src={require("../Assets/back.png")} alt="" />
          </div>

          {headerData.map((item) => {
            const { pageName } = item;
            return (
              <Link to="#" style={{ fontWeight: "800" }}>
                {pageName}
              </Link>
            );
          })}
        </div>

        {headerData.map((item) => {
          const { pageName } = item;
          return (
            <h1>
              Professional Certificate in <span>{pageName}</span>
            </h1>
          );
        })}

        <div className="sub-heading">
          <div className="timing">
            <img src={clock} alt="" />
            <h4>Online / Classroom </h4>
          </div>

          <div className="timing">
            <img src={location} alt="" />
            <h4>Hyderabad</h4>
          </div>
        </div>

        {headerData.map((item) => {
          const { pageDetails } = item;
          return <p>{pageDetails}</p>;
        })}

        <div className="buttons">
          <div className="sub-section">
            <button className="apply-now-btn" onClick={handleModal}>
              Apply Now
            </button>
            <p>Free course counselling</p>
          </div>

          {modal && <Contact event={handleModal} />}

          {/* <a href="" className="brochure-btn">
            <button>Download Brochure</button>
          </a> */}
        </div>
      </div>

      <div className="right-section">
        {headerData.map((item) => {
          const { img } = item;
          return <img src={img} alt={altdata} />;
        })}
      </div>
    </section>
  );
};

export default CourseHeader;
