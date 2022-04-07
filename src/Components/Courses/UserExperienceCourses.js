import { useState } from "react";
import down from "../../Assets/down.svg";

const UserExperienceCourses = () => {
  const Module1 = [
    "Introduction",
    "UX principles",
    "User Research",
    "Wireframing",
  ];

  const Module2 = ["User Testing", "Layout", "Image", "Color Theory"];

  const Module3 = ["Icons", "Typography", "Prototyping", "UX Testing"];

  const Module4 = [
    "Design Systems",
    "Dashboard Design",
    "Filles Export and Management",
    "UI UX Resources",
  ];

  const Module5 = [
    "Product Design",
    "Interaction Design",
    "Portfolio Building",
    "Apple, Android Guidelines",
  ];

  const [data1, setdata1] = useState(false);
  const handleClick1 = () => {
    setdata1(!data1);
  };

  const [data2, setdata2] = useState(false);
  const handleClick2 = () => {
    setdata2(!data2);
  };

  const [data3, setdata3] = useState(false);
  const handleClick3 = () => {
    setdata3(!data3);
  };
  const [data4, setdata4] = useState(false);
  const handleClick4 = () => {
    setdata4(!data4);
  };

  const [data5, setdata5] = useState(false);
  const handleClick5 = () => {
    setdata5(!data5);
  };

  return (
    <>
      <div className="courses">
        <div className="course-content">
          <h1>Course Content</h1>

          <div className="sections" onClick={handleClick1}>
            <div className="container">
              <h3>Module 1</h3>
              <ol className={data1 ? "content show" : "content"}>
                {Module1.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data1 && "reverse"} alt="" />
          </div>

          <div className="sections" onClick={handleClick2}>
            <div className="container">
              <h3>Module 2</h3>
              <ol className={data2 ? "content show" : "content"}>
                {Module2.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data2 && "reverse"} alt="" />
          </div>

          <div className="sections" onClick={handleClick3}>
            <div className="container">
              <h3>Module 3</h3>
              <ol className={data3 ? "content show" : "content"}>
                {Module3.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data3 && "reverse"} alt="" />
          </div>

          <div className="sections" onClick={handleClick4}>
            <div className="container">
              <h3>Module 4</h3>
              <ol className={data4 ? "content show" : "content"}>
                {Module4.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data4 && "reverse"} alt="" />
          </div>

          <div className="sections" onClick={handleClick5}>
            <div className="container">
              <h3>Module 5</h3>
              <ol className={data5 ? "content show" : "content"}>
                {Module5.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data5 && "reverse"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserExperienceCourses;
