import indiaToday from "../../../Assets/NewAssets/indiaToday.png";
import times from "../../../Assets/NewAssets/times.png";
import economicForum from "../../../Assets/NewAssets/economicForum.png";
import economic from "../../../Assets/NewAssets/economic.png";
import businessStandard from "../../../Assets/NewAssets/businessStandard.png";

const Quotations = () => {
  const data = [
    {
      id: 1,
      details:
        "With the digital revolution leaving its indelible footprint, it becomes quintessential for the learner to remain technologically advanced.",
      small: "",
      img: indiaToday,
    },
    {
      id: 2,
      details:
        "Automation was already happening, and Covid accelerated a lot of what automation was already doing, — Raghav Gupta",
      small: " Managing Director - India and APAC at Coursera",
      img: "",
    },
    {
      id: 3,
      details:
        "Digital education and flexible teaching and learning models will help deliver the continuous learning individuals need to thrive in a disrupted economy",
      small: "",
      img: times,
    },
    {
      id: 4,
      details:
        "The World Economic Forum has estimated that 85 million jobs could be displaced by the rise of automation by 2025. More than 80 per cent of companies want to reskill their employees, and 90 per cent of Indian businesses are accelerating digitalisation.",
      small: "",
      img: economicForum,
    },
    {
      id: 5,
      details:
        "There is a need to reassess existing skills in the face of new industry demands because of technological advancements. Executive education provides a perfect avenue to upskill India’s working professionals, hence promoting a 'skill-based' approach towards education.",
      small: "",
      img: economic,
    },
    {
      id: 6,
      details:
        "From an employment perspective, there are still lakhs of unfilled vacancies due to the scarcity of skilled talent and with most companies adopting digital transformation. “The paths to grow for 'skilled employees' are unparalleled.",
      small: "",
      img: businessStandard,
    },
  ];

  return (
    <section className="quotations">
      {data.map((item) => {
        const { id, details, small, img } = item;
        return (
          <div className="quote" key={id}>
            <div className="data">
              <img
                src={require("../../../Assets/NewAssets/left-quote.png")}
                alt=""
              />
              <div className="demo">
                <p>{details}</p>
                <small>{small}</small>
              </div>
            </div>
            <img src={img} alt="" />
          </div>
        );
      })}
    </section>
  );
};

export default Quotations;
