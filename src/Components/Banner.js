import { useState } from "react";
import Contact from "../Pages/Contact/Contact";
import Brochure from "./Brochure";

const Banner = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  const [brochure, setBrochure] = useState(false);
  const handleBrochure = () => {
    setBrochure(!brochure);
  };

  return (
    <section className="banner">
      <button onClick={handleModal}>Apply now</button>
      <button className="brochure" onClick={handleBrochure}>
        Download Brochure
      </button>

      {modal && <Contact event={handleModal} />}

      {brochure && <Brochure event={handleBrochure} />}
    </section>
  );
};

export default Banner;
