import React from 'react'

const SystemRequirement = () => {
  return (
    <div className="system-requirement">
      <h1>System Requirement</h1>

      <div className="system">
        <div className="windows">
          <h3 className="title">Windows</h3>
          <img src={require("../Assets/windows.png")} alt="" />
          <div className="details">
            <div className="title">
              <p>Processor</p>
              <p>RAM</p>
              <p>Storage</p>
              <p>OS</p>
            </div>
            <div className="title">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className="value">
              <p>i5 and above </p>
              <p>8 GB and above</p>
              <p>256 GB and above</p>
              <p>Windows 10 and above</p>
            </div>
          </div>
        </div>

        <div className="mac">
          <h3 className="title">Apple Mac</h3>
          <img src={require("../Assets/mac.png")} alt="" />
          <div className="details">
            <div className="title">
              <p>Processor</p>
              <p>RAM</p>
              <p>Storage</p>
              <p>OS</p>
            </div>
            <div className="title">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className="value">
              <p>i5 and above </p>
              <p> 8 GB and above</p>
              <p>256 GB and above</p>
              <p>Mac OS V10.15 (Catalina) or later</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemRequirement