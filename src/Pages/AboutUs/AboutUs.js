import "../AboutUs/AboutUs.css";
import "../../Components/ComponentCss/ComponentStyle.css";
import intersection from "../../Assets/NewAssets/intersection.svg";

import Navbar from "../../Components/Navbar";
import Header from "../AboutUs/Components/Header";
import Why from "../../Components/Why";
import Approach from "../../Components/Approach";
import Banner from "../../Components/Banner";
import HiringPartners from "../../Components/HiringPartners/HiringPartners";
import Brands from "../../Components/Brands";
import Testimonials from "./../../Components/Testimonial/Testimonials";
import Team from "../../Components/Team";
import Footer from "../../Components/Footer";

import { Helmet } from "react-helmet-async";
import Quotations from "./Components/Quotations";
import Others from "./Components/Others";
import ApplyNow from "../../Components/ApplyNow";

const AboutUs = () => {
  return (
    <div className="about-us">
      <>
        <Helmet>
          <title>Careerpedia Training Company in Hyderabad, India</title>
          <meta
            name="description"
            content="Careerpedia, established in 2019 is the top and best institution in Hyderabad. We provide training courses on Digital  Marketing, React Js, Graphic design, UI/UX design, 3D Printing."
          />

          <link rel="canonical" href="https://www.careerpedia.co/about-us/" />
        </Helmet>

        <Navbar />
        <ApplyNow />
        <Header />
        <Quotations />
        <div className="intersection">
          <img src={intersection} alt="" />
        </div>
        <Others />

        <Why />
        <Approach />
        <Banner />
        <HiringPartners />
        <Banner />
        <Brands />
        <Banner />
        <Testimonials />
        <Team />
        <Banner />
        <Footer />
        {/* <Whatsapp /> */}
      </>
    </div>
  );
};

export default AboutUs;
