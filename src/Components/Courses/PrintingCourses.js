import { useState } from "react";
import down from "../../Assets/down.svg";

const PrintingCourses = () => {
  const Module1 = [
    "The purpose",
    "A third dimension and a physical product",
    "Conventional manufacturing methods",
    "Casting, Injection moulding",
    "Challenges faced by innovators and inventors",
  ];

  const Module2 = [
    "Subtractive vs Additive Manufacturing",
    "What is a prototype?",
    "Introduction to 3D Printing",
    "Types of 3D printing technologies",
  ];

  const Module3 = [
    "Terminology",
    "Filament, Extruder, Heat bed, Dual extruder, etc.",
    "Functioning (mechanical) of an FDM 3D printer",
    "How can a machine create an object so precisely?",
    "Basic introduction to CNC process",
    "Concept to Creation",
    "Computer design to real object (process)",
    "Dimensions, Extrusion, Slicing, etc.",
    "Different file formats",
  ];

  const Module4 = [
    "Introduction to Fusion 360 software",
    "Design and model a simple object in Fusion 360",
    "Introduce tools to model an object",
    "Draw, Extrude, Filler, Offset, etc.",
    "The student designs their personal name plate",
    "Export the file to desired format",
    "Slicing software",
    "Converting a design file into a computer code that the 3D printer understands",
    "Setting parameters like temperature, raft, infill, printing speed, etc.",
    "Transferring the code file to the 3D printer",
    "Operating a FDM 3D printer while the object prints (Flash Forge Adventurer 3)",
  ];

  const Module5 = [
    "Talk about various engineering and medical applications of 3D printing",
  ];

  const Module6 = ["Demonstration of designing complex objects"];

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

  const [data6, setdata6] = useState(false);
  const handleClick6 = () => {
    setdata6(!data6);
  };

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="courses">
        <div className="course-content">
          <h1>Course Content</h1>

          <div className="sections" onClick={handleClick1}>
            <div className="container">
              <h3>The world of manufacturing</h3>
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
              <h3>Additive Manufacturing</h3>
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
              <h3>FDM 3D printing</h3>
              <ol className={data3 ? "content show" : "content"}>
                {Module3.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data3 && "reverse"} alt="" />
          </div>

          <div className="sections" onClick={handleClick4}>
            <div className="cotainer">
              <h3> Let’s create something cool </h3>
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
              <h3>Different fields of applications </h3>
              <ol className={data5 ? "content show" : "content"}>
                {Module5.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data5 && "reverse"} alt="" />
          </div>

          {showMore && (
            <>
              <div className="sections" onClick={handleClick6}>
                <div className="container">
                  <h3>Bonus</h3>
                  <ol className={data6 ? "content show" : "content"}>
                    {Module6.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ol>
                </div>
                <img src={down} className={data6 && "reverse"} alt="" />
              </div>

              {/* <div className="sections" onClick={handleClick7}>
                <div className="container">
                  <h3>Copy writing</h3>
                  <ol className="content">
                    {Module7.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ol>
                </div>
                <img src={down} className={data7 && "reverse"} alt="" />
              </div> */}
            </>
          )}

          <p
            style={{ marginTop: "20px", color: "#2c4364" }}
            onClick={handleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrintingCourses;
