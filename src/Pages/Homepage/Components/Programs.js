import { Link } from "react-router-dom";
import img1 from "../../../Assets/NewAssets/headerDigitalMarketing.svg";
import img2 from "../../../Assets/NewAssets/programsImg2.png";
import img3 from "../../../Assets/NewAssets/Programming.png";
import img4 from "../../../Assets/NewAssets/graphicDesign.svg";
import img5 from "../../../Assets/NewAssets/printing.svg";

import { useState } from "react";

import Contact from "../../Contact/Contact";

const Programs = () => {
  const data = [
    {
      id: 1,
      img: img1,
      heading: "Digital Marketing",
      link: "Best-digital-marketing-course-hyderabad/",
    },
    {
      id: 2,
      img: img2,
      heading: "UI/UX Designing",
      link: "/ui-ux-designing-course-madhapur",
    },

    {
      id: 3,
      img: img3,
      heading: "React JS",
      link: "/reactjs-training-hyderabad-madhapur",
    },
    {
      id: 4,
      img: img4,
      heading: "Graphic Designing",
      link: "/graphic-design-institute-in-hyderabad",
    },
    {
      id: 5,
      img: img5,
      heading: "3D Printing",
      link: "/3D-printing-course-training-hyderabad",
    },
  ];

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <section className="programs" id="programs">
      <h1>Programs</h1>
      <div className="cards">
        {data.map((card) => {
          const { id, img, heading, link } = card;
          return (
            <div className="card" key={id}>
              <Link to={link}>
                <div className="img">
                  <img src={img} alt="" />
                </div>
              </Link>
              <Link to={link}>
                <h3>{heading}</h3>
              </Link>
              <Link to={link}>
                <p>4 weeks, weekday cohort</p>
              </Link>

              

              <button onClick={handleModal}>Apply Now</button>
              {modal && <Contact event={handleModal} />}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
