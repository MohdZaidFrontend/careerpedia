import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import { useState } from "react";

const NewHeader = ({ headerData, altdata }) => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //Submit Form data to firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { name, phone } = userData;

    if (name && phone && phone.length === 10) {
      const res = await fetch(
        "https://careerpedia-data-default-rtdb.firebaseio.com/UserData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          phone: "",
        });
        alert("Thank you for the details. We will get back to you shortly!");
        window.location.reload();
      } else {
        alert("Something Went wrong!");
      }
    } else {
      alert("Please fill all the fields correctly!");
    }
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
              Expert-Level <span>Certificate in {pageName}</span>
            </h1>
          );
        })}

        <div className="star">
          <img src={require("../Assets/NewAssets/star.png")} alt="" />
          <img src={require("../Assets/NewAssets/star.png")} alt="" />
          <img src={require("../Assets/NewAssets/star.png")} alt="" />
          <img src={require("../Assets/NewAssets/star.png")} alt="" />
          <img src={require("../Assets/NewAssets/star.png")} alt="" />
        </div>

        <div className="tagline">
          <h3>Don't just learn. Build a brand</h3>
        </div>

        {headerData.map((item) => {
          const { pageDetails } = item;
          return <p>{pageDetails}</p>;
        })}

        <div className="certifiation">
          <h3>Certification</h3>
          <div className="images">
            <img src={require("../Assets/NewAssets/certificates.png")} className="bigger-certificate" alt="" />
            <img src={require("../Assets/NewAssets/google.png")} alt="" />
            <img src={require("../Assets/NewAssets/hubspot.png")} alt="" />
            <span>+10 more</span>
          </div>
        </div>

        <div className="boxes">
          <div className="card">
            <div className="box">
              <h4>157+</h4>
            </div>
            <p>Success Stories</p>
          </div>

          <div className="card">
            <div className="box">
              <h4>95+</h4>
            </div>
            <p>Partnered Companies</p>
          </div>

          <div className="card">
            <div className="box">
              <h4>9+</h4>
            </div>
            <p>Mentors & Trainers</p>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="form">
          <h2>Reserve your Seat</h2>
          <form method="POST">
            <div className="field">
              <label htmlFor="Name">
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                required
                autoComplete="off"
                name="name"
                value={userData.name}
                onChange={postUserData}
              />
            </div>
            <div className="field">
              <label htmlFor="number">
                Phone Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                required
                autoComplete="off"
                name="phone"
                value={userData.phone}
                onChange={postUserData}
              />
            </div>
            {/* <div className="field">
              <label htmlFor="number">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                value={userData.email}
                onChange={postUserData}
              />
            </div> */}

            <div className="btn">
              <button type="submit" onClick={submitData}>
                RESERVE MY SEAT
              </button>
              <p>4 Seats Left</p>
            </div>

            <p className="terms">Terms and Conditions Apply</p>
          </form>
        </div>
        <h2>
          Want to work in <span> Top Companies</span> Up-skill with{" "}
          <span>Careerpedia</span> and get <span> placed</span> in top
          companies.
        </h2>
      </div>
    </section>
  );
};

export default NewHeader;
