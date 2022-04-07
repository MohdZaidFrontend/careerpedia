import { useState } from "react";
import down from "../../Assets/down.svg";

const DigitalMarketingCourses = () => {
  const Module1 = [
    "Introduction to Search Engines",
    "Keyword Research and Competition",
    "On-page Optimization",
    "Off-page Optimization",
    "Local SEO",
    "Penguin Recover Process",
    "SEO Reporting",
  ];

  const Module2 = [
    "Introduction to SMM",
    "Facebook Marketing",
    "Twitter Marketing",
    "Instagram Marketing",
    "LinkedIn Marketing",
    "Online Reputation Management",
    
  ];

  const Module3 = [
    "Search Advertising",
    "Display Advertising",
    "Shopping Ads",
    "Video Advertising",
    "Google AdWords Certification",
  ];

  const Module4 = [
    "Google Ads",
    "Screening Frog",
    "Ahrefs",
    "SEM rush",
    "Wordpress",
    "Google Analytics",
    "Web Master tool",
    "Adsense",
    "Ads Manager",
    "Hootsuite",
    "SEO Spy Glass"

  ];

  const Module5 = [
    "Components of Affiliate Marketing",
    "How affiliate marketing works",
    "Costing Techniques",
    "Product Allocation",
    "Affiliate Marketing tools",
  ];

  const Module6 = ["Hotstar", "Zee5", "SonyLiv"];



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
                <h3>SEO (Search Engine optimization)</h3>
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
              <h3>SMM (Social Media Marketing)</h3>
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
              <h3>SEM (Search Engine Marketing)</h3>
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
              <h3> Tools</h3>
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
              <h3>Affiliate Marketing</h3>
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
                  <h3>OTT</h3>
                  <ol className={data6 ? "content show": "content"}>
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

export default DigitalMarketingCourses;
