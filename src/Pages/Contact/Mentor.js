import "../Contact/Contact.css";

import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Mentor = (props) => {
 const { event } = props;

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    course: "",
    email: "",
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
    const { name, phone, course, email } = userData;

    if (name && phone && course && phone.length == 10) {
      const res = await fetch(
        "https://careerpedia-830dd-default-rtdb.firebaseio.com/MentorData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            course,
            email,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          phone: "",
          course: "", 
          email: "",
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
    <div className="overlay">
      <section className="contact">
        <div className="contact-img" onClick={event}>
          <FaTimes size={25} style={{ color: "#2c4364" }} />
        </div>

        <form method="POST">
          <h2>Please Fill Up The Details</h2>
          <div className="field">
            <label htmlFor="Name">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
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
              placeholder="Enter your phone number"
              required
              autoComplete="off"
              name="phone"
              value={userData.phone}
              onChange={postUserData}
            />
          </div>

          <div className="field">
            <label htmlFor="number">
              Course interested in Mentoring 
              <span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              placeholder="Enter the name of course"
              required
              autoComplete="off"
              name="course"
              value={userData.course}
              onChange={postUserData}
            />
          </div>

          <div className="field">
            <label htmlFor="number">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              value={userData.email}
              onChange={postUserData}
            />
          </div>

          <div className="btn">
            <button type="submit" onClick={submitData}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Mentor