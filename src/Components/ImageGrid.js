import React from 'react'

const ImageGrid = () => {

  return (
    <div className="gallery">
      <h1 className="gallery-heading">Gallery</h1>
      <div className="images">
        <img
          className="image1 same1"
          src={require("../Assets/gridImg1.png")}
          alt=""
        />
        <img
          className="image2 same1"
          src={require("../Assets/gridImg2.png")}
          alt=""
        />
        <img
          className="image3 same2"
          src={require("../Assets/gridImg3.png")}
          alt=""
        />
        <img
          className="image4 same2"
          src={require("../Assets/gridImg4.png")}
          alt=""
        />
        <img
          className="image5"
          src={require("../Assets/gridImg5.png")}
          alt=""
        />
        <img
          className="image6 same2"
          src={require("../Assets/gridImg6.png")}
          alt=""
        />
        <img
          className="image7 same2"
          src={require("../Assets/gridImg7.png")}
          alt=""
        />
        <img
          className="image8 same2"
          src={require("../Assets/gridImg8.png")}
          alt=""
        />
        <img
          className="image9 same2"
          src={require("../Assets/gridImg9.png")}
          alt=""
        />
      </div>
    </div>
  );
}

export default ImageGrid