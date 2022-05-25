import "./Registration.css";
import VideoPlayer from "react-video-js-player";
import video from "../../Assets/Video/video1.mp4";
import thumbnail from "../../Assets/NewAssets/poster.jpg";

const Registration = () => {
  const videoSrc = video;
  const poster = thumbnail;

  return (
    <>
      <div className="registration">
        <div className="logo">
          <img src={require("../../Assets/careerpedia_logo.png")} alt="" />
        </div>

        <img
          src={require("../../Assets/NewAssets/celebrations.jpg")}
          alt=""
          className="celebrations1"
        />
        <img
          src={require("../../Assets/NewAssets/celebrations.jpg")}
          alt=""
          className="celebrations2"
        />

        <h2>Thank You</h2>

        <p>Next steps to be followed</p>

        <VideoPlayer src={videoSrc} poster={poster} />

        <div className="cards">
          <div className="card">
            <h3>Step 1</h3>
            <img src={require("../../Assets/underConstruction.png")} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus repellendus porro eum perspiciatis? Ad aliquam amet
              necessitatibus quos accusamus quae.
            </p>
          </div>

          <div className="card">
            <h3>Step 2</h3>
            <img src={require("../../Assets/underConstruction.png")} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus repellendus porro eum perspiciatis? Ad aliquam amet
              necessitatibus quos accusamus quae.
            </p>
          </div>

          <div className="card">
            <h3>Step 3</h3>
            <img src={require("../../Assets/underConstruction.png")} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus repellendus porro eum perspiciatis? Ad aliquam amet
              necessitatibus quos accusamus quae.
            </p>
          </div>
        </div>

        <h3>Lorem ipsum dolor amet adipisicing elit. Quas, eos?</h3>
      </div>

      <footer className="footer">
        <div className="upper-section">
          <div className="section-one">
            <img
              className="careerpedia-logo"
              src={require("../../Assets/careerpedia_logo.png")}
              alt="careerpedia logo"
              title="careerpedia logo"
              loading="eager"
            />

            <div className="footer-address">
              <h3>Address</h3>
              <p>
                1st floor A&A Lake front, opp. Durgam <br /> Cheruvu, Hyderabad,
                Telangana 500081
              </p>
            </div>
          </div>

          <div className="section-two">
            <div className="social-logo">
              <a
                href="https://www.instagram.com/careerpedia_upskill/"
                target={"_blank"}
              >
                <img
                  src={require("../../Assets/instaIcon.png")}
                  alt="careerpedia instagram logo"
                  title="careerpedia instagram logo"
                  loading="eager"
                />
              </a>
              <a href="https://www.facebook.com/careerpedia" target={"_blank"}>
                <img
                  src={require("../../Assets/fbIcon.png")}
                  alt="careerpedia facebook logo"
                  title="careerpedia facebook logo"
                  loading="eager"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/careerpedia1/"
                target={"_blank"}
              >
                <img
                  src={require("../../Assets/linkedinIcon.png")}
                  alt="careerpedia linkedin logo"
                  title="careerpedia linkedin logo"
                  loading="eager"
                />
              </a>
              <a
                href="https://wa.me/919030924741?text=Hello there!"
                target={"_blank"}
              >
                <img
                  src={require("../../Assets/whatsappIcon.png")}
                  alt="careerpedia whatsapp logo"
                  title="careerpedia whatsapp logo"
                  loading="eager"
                />
              </a>
            </div>
          </div>

          <div className="section-three">
            <h3>Phone No.</h3>
            <a href="tel:9030924741">
              <p>+91 90309 24741</p>
            </a>
          </div>
        </div>

        <div className="lower-section">
          <a
            href="https://inkprog.com/"
            target="_blank"
            style={{ color: "#2F4362" }}
          >
            <p>
              A product of <span style={{ fontWeight: "800" }}>INKPROG</span>
            </p>
          </a>

          <p>© 2021. Careerpedia. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Registration;
