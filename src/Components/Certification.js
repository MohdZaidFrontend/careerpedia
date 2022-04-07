import React from 'react'

const Certification = () => {
  return (
    <section className="certification">
      <h1>Certification</h1>
      <div className="sections">
        <div className="section1">
          <h1>
            Get <span>Certified</span>
          </h1>
          <a href="#">
            <button>Get Certified</button>
          </a>
        </div>
        <div className="section2">
          <img src={require("../Assets/batch.png")} alt="" />
        </div>

        <div className="section3">
          <img src={require("../Assets/certificate.png")} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Certification