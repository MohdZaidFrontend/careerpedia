import "./Homepage.css";

import Navbar from "../../Components/Navbar";
import Header from "./Components/Header";
import Why from "../../Components/Why";
import Programs from "./Components/Programs";
import Approach from "../../Components/Approach";
import Banner from "../../Components/Banner";
import HiringPartners from "../../Components/HiringPartners/HiringPartners";
import Brands from "../../Components/Brands";
import Testimonials from "./../../Components/Testimonial/Testimonials";
import Team from "../../Components/Team";
import Footer from "../../Components/Footer";
import { Helmet } from "react-helmet-async";
import Learn from "./Components/Learn";
import ApplyNow from "../../Components/ApplyNow";

const Homepage = () => {
  
  // For Changing Header Image in web and mobile View
  const viewport_width = document.documentElement.clientWidth;

  return (
    <>
      <Helmet>
        <title>Careerpedia</title>
        <meta
          name="description"
          content="Careerpedia is a TECHNOLOGY & DESIGN learning 
          the platform that only works on building the
          “PRACTICAL KNOWLEDGE” of the students."
        />

        <meta
          name="keywords"
          content="Best training institute 
          training institute in Hyderabad
          Training institute 
          Training institute near me
          coaching institute in Hyderabad
          top coaching centers in Hyderabad
          "
        />

        <link rel="canonical" href="https://www.careerpedia.co/" />
      </Helmet>

      <Navbar />
      <ApplyNow />
      <Header />
      <Learn />
      {viewport_width > "800" ? (
        <>
          <Why />
          <Programs />
        </>
      ) : (
        <>
          <div className="gap" style={{ marginTop: "150px" }}></div>
          <Programs />
          <Why />
        </>
      )}
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
    </>
  );
};

export default Homepage;
