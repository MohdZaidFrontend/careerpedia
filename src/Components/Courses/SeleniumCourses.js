import { useState } from "react";
import down from "../../Assets/down.svg";

const SeleniumCourses = () => {
  const Module1 = [
      "IT Industry & Services",
      "SDLC Models",
      "Testing Terminology",
      "Testing Design",
      "Testing Lifecycle",
      "Test Cases",

  ];

  const Module2 = [
      "Test Environment",
      "MVC Architecture",
      "Servers",
      "Test Execution",
      "Defect Management",
      "Defect Lifecycle",
      "Mobile App Testing",
  ];

  const Module3 = [
      "Selenium Components/Objects",
      "Automation Testing Process",
      "Core JAVA",
      "Web Drivers",
      "Test NG",
  ];

  const Module4 = [
    "Framework Implementaton",
    "Selenium Grid",
    "Remote Web Drivers",
    "Sikuli Tool",
    "ANT Report Generation",
    "Jenkins",
    "GIT",
    "API",
    "Framework Implementaton with Third Party Tools",
  ];

  const Module5 = [
      "Mobile Automation with Appium",
      "Selenium with Mobile",
      "Appium with Selenium Web Drivers",
      "Working Architecture of Appium on Real Devices",
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
            <img
              src={require("../../Assets/down.png")}
              className={data1 && "reverse"}
              alt=""
            />
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
            <img
              src={require("../../Assets/down.png")}
              className={data2 && "reverse"}
              alt=""
            />
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
            <img
              src={require("../../Assets/down.png")}
              className={data3 && "reverse"}
              alt=""
            />
          </div>

          <div className="sections" onClick={handleClick4}>
            <div className="cotainer">
              <h3>Module 4</h3>
              <ol className={data4 ? "content show" : "content"}>
                {Module4.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img
              src={require("../../Assets/down.png")}
              className={data4 && "reverse"}
              alt=""
            />
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
            <img
              src={require("../../Assets/down.png")}
              className={data5 && "reverse"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeleniumCourses;
