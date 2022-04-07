import React from "react";

const Aim = ({ heading, p1, p2 }) => {
  return (
    <section className="aim">
      <h1>
        This <span>{heading} Course </span> is aimed <span></span> at
      </h1>
      <div className="details">
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </section>
  );
};

export default Aim;
