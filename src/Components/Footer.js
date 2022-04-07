import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../Components/ComponentCss/ComponentStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-section">
        <div className="section-one">
          <Link to="/" exact>
            <img
              className="careerpedia-logo"
              src={require("../Assets/careerpedia_logo.png")}
              alt="careerpedia logo"
              title="careerpedia logo"
              loading="eager"
            />
          </Link>

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
              href="https://www.instagram.com/careerpediaapp/"
              target={"_blank"}
            >
              <img
                src={require("../Assets/instaIcon.png")}
                alt="careerpedia instagram logo"
                title="careerpedia instagram logo"
                loading="eager"
              />
            </a>
            <a href="https://www.facebook.com/careerpedia" target={"_blank"}>
              <img
                src={require("../Assets/fbIcon.png")}
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
                src={require("../Assets/linkedinIcon.png")}
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
                src={require("../Assets/whatsappIcon.png")}
                alt="careerpedia whatsapp logo"
                title="careerpedia whatsapp logo"
                loading="eager"
              />
            </a>
          </div>

          <div className="links">
            {/* <Link to="/">About</Link> */}
            <HashLink to="/#programs">Programs</HashLink>
            <HashLink to="/#team">Team</HashLink>
            <a href="https://forms.gle/4xXp4VjganrCBwhH6" target="_blank">
              Contact Us
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

        <p className="terms" style={{ textAlign: "center" }}>
          Terms and Conditions | Privacy Policy | Cookie Policies
        </p>

        <p>© 2021. Careerpedia. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
