import { useState } from "react";

const Testimonial = ({ title, details1, details2 ,imageUrl }) => {
  const [data, setData] = useState(false);

  const handleClick = () => {
    setData(!data);
  };

  return (
    <div className="testimonial">
      <div className="testimonial-details">
        <img src={imageUrl} alt="" />
        <h2>{title}</h2>
      </div>
      <p>{details1} {data && details2} </p>
      {/* {data && <p>{details2}</p>} */}
      <p
        style={{ color: "black", cursor: "pointer", marginTop: "20px" }}
        onClick={handleClick}
      >
        {data ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default Testimonial;
