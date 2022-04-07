import headerImg from "../../../Assets/NewAssets/headerAbout.svg";

const Header = () => {
  return (
    <section className="about-header">
      <h1>
        Our <span>Vision</span>
      </h1>
      <div className="sections">
        <div className="left-section">
          <h2>
            The <span>Problem</span>
          </h2>

          <div className="details">
            <p>
              Fundamentally the digital world job seekers face a prevalent
              issue. It is our education. Most of what we learn in schools and
              during our graduation does not often materialize into
              industry-ready skills, nor will they equip us with soft skills
              that enable us to take up the challenge of preparing for an
              interview and land a job.
            </p>
            <p>
              These are irrefutable facts, and as India gears up to become the
              leader in the digital space, the challenge of a skilled workforce
              continues to bring the question of 'where are we failing?'
            </p>
          </div>
        </div>

        <div className="right-section">
          <img src={headerImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Header