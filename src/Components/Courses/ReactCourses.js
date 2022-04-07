import { useState } from "react";
import down from "../../Assets/down.svg";

const ReactCourses = () => {
  const Htmltopics = [
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

  const Csstopics = [
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

  const Jstopics = [
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

  const AdvJstopics = [
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

  const Reacttopics = [
    "Introduction",
    "Folder Structure",
    "JSX",
    "Components",
    "Functional vs Class based Components",
    "Styling in React JS",
    "Event Handling",
    "Props",
    "State",
    "Hooks",
    "useState Hook",
    "Conditional Rendering",
    "Maps & Loops in JSX",
    "useEffect Hook (Handling API requests)",
    "Forms",
    "Context API (useContext Hook)",
    "React Router",
    "Redux",
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
              <h3>HTML</h3>
              <ol className={data1 ? "content show" : "content"}>
                {Htmltopics.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data1 && "reverse"} alt="" />
          </div>

          <div className="sections" onClick={handleClick2}>
            <div className="container">
              <h3>CSS</h3>
              <ol className={data2 ? "content show" : "content"}>
                {Csstopics.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data2 && "reverse"} alt="" />
          </div>

          <div className="sections" onClick={handleClick3}>
            <div className="container">
              <h3>JavaScript</h3>
              <ol className={data3 ? "content show" : "content"}>
                {Jstopics.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data3 && "reverse"} alt="" />
          </div>

          <div className="sections" onClick={handleClick4}>
            <div className="container">
              <h3>Advance JavaScript</h3>
              <ol className={data4 ? "content show" : "content"}>
                {AdvJstopics.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
            <img src={down} className={data4 && "reverse"} alt="" />
          </div>

          <div className="sections" onClick={handleClick5}>
            <div className="container">
              <h3>React Js</h3>
              <ol className={data5 ? "content show" : "content"}>
                {Reacttopics.map((item) => (
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

export default ReactCourses;
