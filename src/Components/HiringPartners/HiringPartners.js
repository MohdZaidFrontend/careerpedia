import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import financeBox from "../../Assets/financeBox.jpg";
import homapp from "../../Assets/homeapp.jpg";
import icabs from "../../Assets/icabs.png";
import inkprog from "../../Assets/inkprog.jpg";
import tasqr from "../../Assets/tasqr.jpg";
import sup from "../../Assets/NewAssets/flyGraduateLogo.png";

import HiringPartnerItem from "./HiringPartnerItem";

const HiringPartners = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight size={25} style={{ color: "#49637E" }} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft size={25} style={{ color: "#49637E" }} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    className: "hiring-slider",
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="hiring-partners">
      <h1 className="hiring-heading">Hiring Partners</h1>
      <Slider {...settings}>
        <HiringPartnerItem img={inkprog} />
        <HiringPartnerItem img={financeBox} />
        <HiringPartnerItem img={homapp} />
        <HiringPartnerItem img={icabs} />
        <HiringPartnerItem img={tasqr} />
        <HiringPartnerItem img={sup} />
      </Slider>
    </div>
  );
};

export default HiringPartners;
