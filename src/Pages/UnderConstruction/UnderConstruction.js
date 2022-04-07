import React from 'react'

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <div className="nav">
        <img src={require("../../Assets/careerpedia_logo.png")} alt="" />
      </div>
      <div className="hero-img">
        <img src={require("../../Assets/underConstruction.png")} alt="" />
      </div>
      <div className="details">
        <h1>
          A giant leap to career advancement is under reconstruction... Stay
          tuned !!!
        </h1>
        <h2>
          Meanwhile drop a mail <span> info@inkprog.com</span> or call:{" "}
          <span>+91 90309 24741</span>
        </h2>
      </div>
    </div>
  );
}

export default UnderConstruction