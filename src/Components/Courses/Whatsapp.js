import { Link as ScrollLink } from "react-scroll";

const Whatsapp = () => {
  return (
    <>
      <div className="whatsapp">
        <a
          href="https://wa.me/919030924741?text=Hello there!"
          target={"_blank"}
        >
          <img src={require("../../Assets/whatsapp.png")} alt="" />
        </a>
      </div>

      {/* <div className="upward-arrow">
        <ScrollLink
          to="header"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          <img src={require("../../Assets/upwardArrow.png")} alt="" />
        </ScrollLink>
      </div> */}
    </>
  );
};

export default Whatsapp;
