import idea from "../../../Assets/NewAssets/Careerpedia motion icons/idea.mp4";
import award from "../../../Assets/NewAssets/Careerpedia motion icons/award.mp4";
import diploma from "../../../Assets/NewAssets/Careerpedia motion icons/diploma.mp4";
import document from "../../../Assets/NewAssets/Careerpedia motion icons/document.mp4";
import goal from "../../../Assets/NewAssets/Careerpedia motion icons/goal.mp4";
import physics from "../../../Assets/NewAssets/Careerpedia motion icons/physics.mp4";
import rocket from "../../../Assets/NewAssets/Careerpedia motion icons/rocket.mp4";
import socialCare from "../../../Assets/NewAssets/Careerpedia motion icons/social-care.mp4";
import socialMedia from "../../../Assets/NewAssets/Careerpedia motion icons/social-media.mp4";
import target from "../../../Assets/NewAssets/Careerpedia motion icons/target.mp4";
import { useState } from "react";

const Learn = () => {
  const data1 = [
    {
      id: 1,
      Number: 1,
      classname: "card cardOne",
      img: idea,
      heading: "Linkedin Optimization",
      details:
        "LinkedIn can help you present yourself, stand out from the crowd, and score interviews.",
    },
    {
      id: 2,
      Number: 2,
      classname: "card cardTwo",
      img: award,
      heading: "ATS Optimized Resume",
      details:
        "Not all resumes are the same and are selected. We help you create ATS-optimized resumes that will be selected for interviews.",
    },
    {
      id: 3,
      Number: 3,
      classname: "card cardThree",
      img: diploma,
      heading: "English Proficiency",
      details:
        "Sit and learn from professionals to develop your corporate English proficiency to become a better fit in any company. ",
    },
  ];

  const data2 = [
    {
      id: 4,
      Number: 6,
      classname: "card cardSix",
      img: document,
      heading: "Select your Skill",
      details:
        "Select the skill you want to have a career in, and we will help you choose the right one.",
    },
    {
      id: 5,
      Number: 5,
      classname: "card cardFive",
      img: goal,
      heading: "Learn on Real Time Projects",
      details:
        "No theory can account for real-time learning, and we will make you work on real projects to enhance your practical skills.",
    },
    {
      id: 6,
      Number: 4,
      classname: "card cardFour",
      img: physics,
      heading: "Become a Pro",
      details:
        "By the end of this course, you will master the skill to either join a company or become a professional freelancer.",
    },
  ];

  const data3 = [
    {
      id: 7,
      Number: 7,
      classname: "card cardSeven",
      img: rocket,
      heading: "Build Portfolio",
      details:
        "As you build a brand of yourself, you need to showcase your skills, your work in a professional way. We will help you create one.",
    },
    {
      id: 8,
      Number: 8,
      classname: "card cardEight",
      img: socialCare,
      heading: "Learn Interpersonal Skills",
      details:
        "Learn soft skills like team communication, interview, email drafting to become a professional.",
    },
    {
      id: 9,
      Number: 9,
      classname: "card cardNine",
      img: socialMedia,
      heading: "Networking & Connections",
      details:
        "You will have several opportunities to improve your network with the Careerpedia team, alumni, and workshop speakers.",
    },
  ];

  const [demo, setDemo] = useState(true);

  const [demo2, setDemo2] = useState(false);

  const [showData2, setShowData2] = useState(false);

  const [showData3, setShowData3] = useState(false);

  return (
    <>
      <section className="learn">
        <h1 className="heading">What you will learn from Careerpedia</h1>

        <div className="cards">
          {data1.map((card) => {
            const { id, Number, classname, img, heading, details } = card;
            return (
              <div className={classname} key={id}>
                <h2>{id}</h2>
                <div className="img">
                  <video width="70%" autoPlay muted loop>
                    <source src={img} type="video/mp4" />
                  </video>
                </div>
                <div className="details">
                  <h3>{heading}</h3>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}

          {showData2 && (
            <>
              {data2.map((card) => {
                const { id, Number, classname, img, heading, details } = card;
                return (
                  <div className={classname} key={id}>
                    <h2>{id}</h2>
                    <div className="img">
                      <video width="70%" height="70%" autoPlay muted loop>
                        <source src={img} type="video/mp4" />
                      </video>
                    </div>
                    <div className="details">
                      <h3>{heading}</h3>
                      <p>{details}</p>
                    </div>
                  </div>
                );
              })}

              {showData3 && (
                <>
                  {data3.map((card) => {
                    const { id, Number, classname, img, heading, details } =
                      card;
                    return (
                      <div className={classname} key={id}>
                        <h2>{id}</h2>
                        <div className="img">
                          <video width="70%" height="70%" autoPlay muted loop>
                            <source src={img} type="video/mp4" />
                          </video>
                        </div>
                        <div className="details">
                          <h3>{heading}</h3>
                          <p>{details}</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>

        {demo ? (
          <p
            style={{ marginTop: "-50px", cursor: "pointer" }}
            onClick={() => {
              setShowData2(!showData2);
              setDemo(!demo);
            }}
          >
            Show More
          </p>
        ) : (
          <p style={{ display: "none", marginTop: "-50px" }}></p>
        )}

        {showData2 && (
          <p
            style={{ marginTop: "-50px" }}
            onClick={() => {
              setShowData3(!showData3);
            }}
          >
            {showData3 ? (
              <p style={{  cursor: "pointer" }}>Show Less</p>
            ) : (
              <p style={{ cursor: "pointer" }}>Show More</p>
            )}
          </p>
        )}
      </section>
    </>
  );
};

export default Learn;
