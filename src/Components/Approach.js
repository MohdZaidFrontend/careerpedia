import img1 from "../Assets/NewAssets/approachImg1.svg";
import img2 from "../Assets/NewAssets/approachImg2.svg";
import img3 from "../Assets/NewAssets/approachImg3.svg";
import img4 from "../Assets/NewAssets/approachImg4.png";

const Approach = () => {
  const data = [
    {
      id: 1,
      classname: "section",
      img: img1,
      heading: "Join Cohort",
      details:
        "After the initial assessment of your career goals, we onboard you to Careerpedia and join you in networking and alumni groups. You will be introduced to your teammates and mentors. Further, we will onboard you with all the software and tools that enhance your learning experience.",
    },
    {
      id: 2,
      img: img2,
      classname: "section section-reverse",
      heading: "Learn From Industry Experts",
      details:
        "Throughout your cohort, you will learn from industry expert mentors with several years of experience. You will get ample time to discuss your career interests and how they align with the current industry trends. Get feedback and insights from the best people who can guide you.",
    },
    {
      id: 3,
      img: img3,
      classname: "section",
      heading: "Complete Real-time Project",
      details:
        "You can work on your own project or take any industry project as part of the course thesis. You will have an opportunity to understand how real projects work, your role, and your responsibilities. This project will prepare you for your dream career.",
    },
    {
      id: 4,
      img: img4,
      classname: "section section-reverse",
      heading: "Get Certified",
      details:
        "Upon successfully completing your course and passing the skill test with minimum scores, you will be awarded an industry-standard certificate from Careerpedia that will boost your resume and your chances of landing your dream job",
    },
  ];

  return (
    <section className="approach">
      <h1>Our Approach</h1>
      <div className="sections">
        {data.map((section) => {
          const { img,classname, heading, details } = section;
          return (
            <div className={classname}>
              <div className="data">
                <div className="line1"></div>
                <div className="circle"></div>

                <h2>{heading}</h2>
                <p>{details}</p>
              </div>
              <div className="img">
                <img src={img} alt="" />

                <div className="line"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Approach;
