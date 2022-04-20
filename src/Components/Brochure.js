import { FaTimes } from "react-icons/fa";
import { useState } from "react";

import brochure1 from "../Assets/NewAssets/DigitalMarketingCareerpediasyllabus.pdf";

const Brochure = (props) => {
  const { event } = props;

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formError, setFormError] = useState({});
  const [alert, setAlert] = useState(false);

  //Get data from input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //Action when user clicks the submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(userData));

    if (Object.keys(formError).length === 0) {
      postData();
    }
  };

  //Submit Form data to firebase
  const postData = async () => {
    const { name, phone, email } = userData;
    const res = await fetch(
      "https://careerpedia-830dd-default-rtdb.firebaseio.com/BrochureData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
        }),
      }
    );

    if (res && name && email && phone) {
      setAlert(!alert);

      setUserData({
        name: "",
        phone: "",
        email: "",
      });
    }
  };

  //Validation function
  const validate = (value) => {
    const errors = {};

    if (!value.name) {
      errors.name = "Name is required!";
    }
    if (!value.email) {
      errors.email = "Email is required!";
    }
    if (!value.phone) {
      errors.phone = "Phone Number is required!";
    } else if (isNaN(value.phone)) {
      errors.phone = "Please provide a valid phone number!";
    } else if (value.phone.length !== 10) {
      errors.phone = "Please provide a valid phone number!";
    }

    return errors;
  };

  
  return (
    <div className="overlay">
      <section className="contact">
        <div className="contact-img" onClick={event}>
          <FaTimes size={25} style={{ color: "#2c4364" }} />
        </div>

        <form onSubmit={handleSubmit} method="POST" className="brochure-form">
          <h2>Enter Details for Brochure</h2>
          <label htmlFor="name">
            Name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter your name"
          />
          <br />
          <span>{formError.name}</span>
          <br />
          <br />

          <label htmlFor="email">
            Email<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter your email"
          />
          <br />
          <span>{formError.email}</span>
          <br />
          <br />

          <label htmlFor="tel">
            Phone<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter your phone number"
          />
          <br />
          <span>{formError.phone}</span>
          <br />
          <br />

          <div className="brochure-btn">
            <button type="submit">Submit</button>

            {Object.keys(formError).length === 0 && alert ? (
              <a href={brochure1} download="broucher" style={{ color: "red" }}>
                Download brochure
              </a>
            ) : (
              ""
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Brochure;
