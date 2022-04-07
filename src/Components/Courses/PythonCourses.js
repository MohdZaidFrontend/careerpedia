import { useState } from "react";
import down from "../../Assets/down.svg";

const PythonCourses = () => {
  const htmlTopics = [
    "Introduction",
    "HTML Tags",
    "Self Closing Tags",
    "Semantic Tags",
    "HTML Elements",
    "Nested HTML Elements",
    "HTML Attributes",
    "Headings",
    "Paragraphs",
    "<br> & <hr> Tags",
    "Anchor Tag",
    "Image Tag",
    "Lists (Ordered & Unordered)",
    "Tables",
    "Forms",
    "Button Tag",
    "Inline & Block Elements",
    "iframe Tag",
  ];

  const cssTopics = [
    "Introduction",
    "Selectors",
    "Measurement Units",
    "Colors",
    "Background",
    "Borders",
    "Margin",
    "Padding",
    "Width(max/min) & Height(max/min)",
    "Box Shadow",
    "Images",
    "Background",
    "Font",
    "Lists",
    "Tables",
    "Visibility",
    "Positioning",
    "z-index",
    "Flexbox",
    "Grid",
    "Psuedo Elements",
    "Transform",
    "Transition",
    "Responsiveness (Media Queries)",
    "Variables",
    "Modern Layout Structure",
  ];

  const jsTopics = [
    "Introduction",
    "Variables",
    "Data Types",
    "Operators",
    "Conditional Statements",
    "Loops",
    "Nested Loops",
    "Arrays",
    "Objects",
    "Functions",
    "DOM Manipulation",
    "Traversing DOM",
    "Events",
    "Styling Elements in JS",
    "Authentication",
    "CRUD Operations",
  ];

  const advJstopics = [
    "Introduction",
    "Hoisting",
    "Template Literals",
    "Arrow Functions",
    "Higher Order Functions",
    "Array Methods",
    "Template Literals",
    "Destructuring",
    "REST Operator",
    "SPREAD Operator",
    "Closure",
    "Asynchronous JS",
    "Callbacks",
    "Promises",
    "Async/Await",
    "Fetch API (Getting Data from an API)",
  ];

  const sqlTopics = [
    "Introduction & Installation",
    "Creating Table",
    "Insertion of Data",
    "Constraints",
    "Where Clause",
    "Operators",
    "Between & Not Between",
    "Like Operators",
    "Wild Cards",
    "Order By & Distinct",
    "IS NULL & IS NOT NULL",
    "Limit & Offset",
    "Min, Max, Sum, Count",
    "Update, Commit & Rollback",
    "Delete",
    "Joins",
    "Join (Multiple Tables)",
    "Group By & Hving Clause",
    "Sub Query with Exist & Not Exist",
    "Statements",
    "Functions (Arithematic, String, Date, Time)",
    "Alter",
    "Drop & Truncate",
    "View",
  ];

  const pythonTopics = [
    "Backend Introduction",
    "Command Line& Terminal Overview",
    "Strings",
    "Lists",
    "Dictionaries",
    "Tuples, Sets & Boolean",
    "Regular Expressions",
    "Errors & Exceptions",
    "Modules & Packages",
    "Decorators",
    "Name & Main",
  ];

  const djangoTopics = [
    "Backend Introduction",
    "Command Line& Terminal Overview",
    "Strings",
    "Lists",
    "Dictionaries",
    "Tuples, Sets & Boolean",
    "Regular Expressions",
    "Errors & Exceptions",
    "Modules & Packages",
    "Decorators",
    "Name & Main",
    "Django Setup",
    "Django Project",
    "Django Application",
    "URL Mappings",
    "Templates",
    "Static Files",
    "Creating Models",
    "Population Scripts",
    "Models-Templates-Views Paradigm",
    "Django Forms",
    "Form Validation",
    "Model Forms",
    "URL Template Inheritance",
    "Django Passwords",
    "User Models",
    "Registration",
    "Logins",
    "Django Deployment",
    "Template Views with CBV",
    "Detail View and List View",
    "CRUD Views",
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
              <h3>HTML</h3>
              <ol className={data1 ? "content show" : "content"}>
                {htmlTopics.map((item) => (
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
          </div>

          <div className="sections" onClick={handleClick3}>
            <div className="container">
              <h3>JavaScript</h3>
              <ol className={data3 ? "content show" : "content"}>
                {jsTopics.map((item) => (
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
            <div className="container">
              <h3>Advance JavaScript</h3>
              <ol className={data4 ? "content show" : "content"}>
                {advJstopics.map((item) => (
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
            <div className="cotainer">
              <h3>MySQL</h3>
              <ol className={data5 ? "content show" : "content"}>
                {sqlTopics.map((item) => (
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

          {showMore && (
            <>
              <div className="sections" onClick={handleClick6}>
                <div className="cotainer">
                  <h3>Python</h3>
                  <ol className={data6 ? "content show" : "content"}>
                    {pythonTopics.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ol>
                </div>
                <img
                  src={require("../../Assets/down.png")}
                  className={data6 && "reverse"}
                  alt=""
                />
              </div>

              <div className="sections" onClick={handleClick7}>
                <div className="container">
                  <h3>Django</h3>
                  <ol className={data7 ? "content show" : "content"}>
                    {djangoTopics.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ol>
                </div>
                <img
                  src={require("../../Assets/down.png")}
                  className={data7 && "reverse"}
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

export default PythonCourses;
