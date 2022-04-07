import { useState } from "react";
import down from "../../Assets/down.svg";

const GraphicDesignCourses = () => {
  const Module1 = [
    "Logo",
    "Typograph",
    "Color Palettes",
    "Images",
    "Branding Material",
  ];

  const Module2 = [
    "Postcards and Flyers",
    "Magazine and Newspaper Ads",
    "Posters, Banners and Billboards",
    "Infographics",
    "Brochures (Print and Digital)",
    "Vehicle Wraps",
    "Signage and Trade Show Displays",
    "Email Marketing Templates",
    "PowerPoint Presentations",
    "Menus",
    "Social Media Ads, Banners and Graphics",
    "Banner and Retargeting Ads",
    "Images for Websites and Blogs",
  ];

  const Module3 = [
    "Newsletters",
    "Annual Reports",
    "Catalogs",
    "Pitch Decks",
    "Types of Printing",
    "Printing Material",
  ];

  const Module4 = [
"    Choose a form that communicates the brand",
"The needs of the product",
"Types of packaging",
"Information on the package",
"Line considerations",
"Use of illustration and photography",
"Typography choices",
"Color considerations",
"Layout considerations",
"Materials, texture, and finishes"
  ];

  const Module5 = ["Adobe Photoshop", "Lightroom"];

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
              <h3>Visual Identity</h3>
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
              <h3>Marketing & Advertising </h3>
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
              <h3>Publications</h3>
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
              <h3>Packaging Design</h3>
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
              <h3>Image & Video Editing</h3>
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

export default GraphicDesignCourses;
