import img1 from "../Assets/NewAssets/whyImg1.svg";
import img2 from "../Assets/NewAssets/whyImg2.svg";
import img3 from "../Assets/NewAssets/whyImg3.svg";
import img4 from "../Assets/NewAssets/whyImg4.svg";


const Why = () => {

    const data = [
      {
        id: 1,
        img: img1,
        heading: "Industry expert",
        details:
          "Nothing beats experience. At Careerpedia, we want you to learn for industry experts to know and learn from real experience and how they overcame challenges.",
      },

      {
        id: 2,
        img: img2,
        heading: "Live Mentoring",
        details:
          "Upon completing the course, you can take the Careerpedia skill test to see if you land an Internship with us and work on real industry projects.",
      },
      {
        id: 3,
        img: img3,
        heading: "Excellent ROI",
        details:
          "Every Careerpedia graduate saw an average of 55% increase in their salaries and career progression.",
      },
      {
        id: 4,
        img: img4,
        heading: "Career Progression",
        details:
          "Our metrics indicate that you can earn back your investment in less than two months with referral programs and career progression. ",
      },
    ];
  return (
    <section className="why">
        <h1>Why Careerpedia?</h1>

        <div className="cards">
            {
                data.map((card)=>{
                    const{id, img, heading, details} = card;
                    return (
                      <div className="card" key={id}>
                        <div className="img">
                          <img src={img} alt="" />
                        </div>
                        <h3>{heading}</h3>
                        <p>{details}</p>
                      </div>
                    );
                })
            }
        </div>
    </section>
  )
}

export default Why