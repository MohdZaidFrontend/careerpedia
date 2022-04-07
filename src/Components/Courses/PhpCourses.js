import { useState } from "react";
import down from "../../Assets/down.svg";

const PhpCourses = () => {
  const htmlTopics = [
    " Web page structure and designing",
    // "Introduction",
    // "HTML Tags",
    // "Self Closing Tags",
    // "Semantic Tags",
    // "HTML Elements",
    // "Nested HTML Elements",
    // "HTML Attributes",
    // "Headings",
    // "Paragraphs",
    // "<br> & <hr> Tags",
    // "Anchor Tag",
    // "Image Tag",
    // "Lists (Ordered & Unordered)",
    // "Tables",
    // "Forms",
    // "Button Tag",
    // "Inline & Block Elements",
    // "iframe Tag",
  ];

  const cssTopics = [
    // "Introduction",
    // "Selectors",
    // "Measurement Units",
    // "Colors",
    // "Background",
    // "Borders",
    // "Margin",
    // "Padding",
    // "Width(max/min) & Height(max/min)",
    // "Box Shadow",
    // "Images",
    // "Background",
    // "Font",
    // "Lists",
    // "Tables",
    // "Visibility",
    // "Positioning",
    // "z-index",
    // "Flexbox",
    // "Grid",
    // "Psuedo Elements",
    // "Transform",
    // "Transition",
    // "Responsiveness (Media Queries)",
    // "Variables",
    // "Modern Layout Structure",
  ];

  const jsTopics = [
    " Javascript & jQuery is used to connect with HTML elements in the browser via the DOM",
    // "Introduction",
    // "Variables",
    // "Data Types",
    // "Operators",
    // "Conditional Statements",
    // "Loops",
    // "Nested Loops",
    // "Arrays",
    // "Objects",
    // "Functions",
    // "DOM Manipulation",
    // "Traversing DOM",
    // "Events",
    // "Styling Elements in JS",
    // "Authentication",
    // "CRUD Operations",
    // "Introduction",
    // "Hoisting",
    // "Template Literals",
    // "Arrow Functions",
    // "Higher Order Functions",
    // "Array Methods",
    // "Template Literals",
    // "Destructuring",
    // "REST Operator",
    // "SPREAD Operator",
    // "Closure",
    // "Asynchronous JS",
    // "Callbacks",
    // "Promises",
    // "Async/Await",
    // "Fetch API (Getting Data from an API)",
  ];

  const advJsTopics = [
    "To simply the web page design and responsive design",
    // "Introduction",
    // "Hoisting",
    // "Template Literals",
    // "Arrow Functions",
    // "Higher Order Functions",
    // "Array Methods",
    // "Template Literals",
    // "Destructuring",
    // "REST Operator",
    // "SPREAD Operator",
    // "Closure",
    // "Asynchronous JS",
    // "Callbacks",
    // "Promises",
    // "Async/Await",
    // "Fetch API (Getting Data from an API)",
  ];

  const sqlTopics = [
    "Mysql is a database to store data",
    // "Introduction",
    // "Installing Xampp",
    // "Data Types",
    // "Creating and Dropping Databases",
    // "Creating Tables",
    // "Dropping Tables",
    // "Inserting into Tables",
    // "Updating and Deleting",
    // "Operators",
    // "Primary Keys",
    // "Foreign Keys",
    // "Functions",
    // "Select and Where",
    // "Order by",
    // "Group by",
    // "Alters",
    // "Aliases",
    // "Inner Joins",
    // "Left and Right Joins",
  ];

  const phpTopics = [
    "It will cover the php language, logic implementation and develop web applications using php along with HTML, CSS, Javascript, jquery and Bootstrap",
  ];

  const laravelTopics = [
    " Laravel is a PHP Framework. Here we can build web applications with predefined features and standard structural coding. With this framework we can easily develop complex web applications with the help of Laravel predefined functionalities.",
  ];

  const api = [
    "API is used for interacting between database and frontend applications like mobile applications and web applications. It acts like middleware between frontend and backend.",
  ];

  const thirdParty = [
    "For many applications, you need to integrate with third party applications like Payment Gateway, SMS Gateway, Google maps, etc.. and also sometimes you need to communicate with other applications.",
  ];

  const server = [
    "Project uploading and update and maintaining server side backups. Handling cpanel, web hosting, domain settings etc.",
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
  const [data6, setdata6] = useState(false);
  const handleClick6 = () => {
    setdata6(!data6);
  };
  const [data7, setdata7] = useState(false);
  const handleClick7 = () => {
    setdata7(!data7);
  };

  const [data8, setdata8] = useState(false);
  const handleClick8 = () => {
    setdata8(!data8);
  };

  const [data9, setdata9] = useState(false);
  const handleClick9 = () => {
    setdata9(!data9);
  };

  const [data10, setdata10] = useState(false);
  const handleClick10 = () => {
    setdata10(!data10);
  };

  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="courses">
      

        <div className="course-content">
          <h1>Course Content</h1>

          <div className="sections" onClick={handleClick1}>
            <div className="container">
              <h3>HTML & CSS</h3>
              <div className={data1 ? "content show" : "content"}>
                {htmlTopics.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
            <img
              src={require("../../Assets/down.png")}
              className={data1 && "reverse"}
              alt=""
            />
          </div>

          {/* <div className="sections" onClick={handleClick2}>
            <div className="container">
              <h3>CSS</h3>
              <ol className={data2 ? "content show" : "content"}>
                {cssTopics.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img
              src={require("../../Assets/down.png")}
              className={data2 && "reverse"}
              alt=""
            />
          </div> */}

          <div className="sections" onClick={handleClick3}>
            <div className="container">
              <h3>JavaScript & JQuery</h3>
              <div className={data3 ? "content show" : "content"}>
                {jsTopics.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
            <img
              src={require("../../Assets/down.png")}
              className={data3 && "reverse"}
              alt=""
            />
          </div>

          <div className="sections" onClick={handleClick4}>
            <div className="container">
              <h3>Bootstrap</h3>
              <div className={data4 ? "content show" : "content"}>
                {advJsTopics.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
            <img
              src={require("../../Assets/down.png")}
              className={data4 && "reverse"}
              alt=""
            />
          </div>

          <div className="sections" onClick={handleClick5}>
            <div className="cotainer">
              <h3>MySQL</h3>
              <div className={data5 ? "content show" : "content"}>
                {sqlTopics.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
            <img
              src={require("../../Assets/down.png")}
              className={data5 && "reverse"}
              alt=""
            />
          </div>

          <div className="sections" onClick={handleClick6}>
            <div className="container">
              <h3>Php</h3>
              <div className={data6 ? "content show" : "content"}>
                {phpTopics.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
            <img
              src={require("../../Assets/down.png")}
              className={data6 && "reverse"}
              alt=""
            />
          </div>

          {showMore && (
            <>
              <div className="sections" onClick={handleClick7}>
                <div className="container">
                  <h3>Laravel</h3>
                  <div className={data7 ? "content show" : "content"}>
                    {laravelTopics.map((item) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </div>
                <img
                  src={require("../../Assets/down.png")}
                  className={data7 && "reverse"}
                  alt=""
                />
              </div>

              <div className="sections" onClick={handleClick8}>
                <div className="container">
                  <h3>API</h3>
                  <div className={data8 ? "content show" : "content"}>
                    {api.map((item) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </div>
                <img
                  src={require("../../Assets/down.png")}
                  className={data8 && "reverse"}
                  alt=""
                />
              </div>
              <div className="sections" onClick={handleClick9}>
                <div className="container">
                  <h3>Third Party Integration</h3>
                  <div className={data9 ? "content show" : "content"}>
                    {thirdParty.map((item) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </div>
                <img
                  src={require("../../Assets/down.png")}
                  className={data9 && "reverse"}
                  alt=""
                />
              </div>

              <div className="sections" onClick={handleClick10}>
                <div className="container">
                  <h3>Server Handling</h3>
                  <div className={data10 ? "content show" : "content"}>
                    {server.map((item) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </div>
                <img
                  src={require("../../Assets/down.png")}
                  className={data10 && "reverse"}
                  alt=""
                />
              </div>
            </>
          )}

          <p
            style={{ marginTop: "20px", color: "#2c4364" }}
            onClick={handleClick}
          >
            {!showMore ? "Show More" : "Show Less"}
          </p>
        </div>
      </div>

    </>
  );
};

export default PhpCourses;
