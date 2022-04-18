import ApplyNow from "../../Components/ApplyNow";
import Why from "../../Components/Why";
import Approach from "../../Components/Approach";
import Banner from "../../Components/Banner";
import HiringPartners from "../../Components/HiringPartners/HiringPartners";
import Brands from "../../Components/Brands";
import Testimonials from "./../../Components/Testimonial/Testimonials";
import Team from "../../Components/Team";
import GraphicDesignCourses from "../../Components/Courses/GraphicDesignCourses";
import Faq from "../../Components/Faq";
import Navbar from "../../Components/Navbar";
import CourseHeader from "../../Components/CourseHeader";
import Aim from "../../Components/Aim";
import Tools from "../../Components/Tools/Tools";
import Certification from "../../Components/Certification";
import Footer from "../../Components/Footer";

import HeaderImg from "../../Assets/NewAssets/graphicDesign.svg";

import illustrator from "../../Assets/illustrator.jpg";
import photoshop from "../../Assets/photoshop.jpg";
import xd from "../../Assets/xd.png";
import indesign from "../../Assets/indesign.png";
import lightroom from "../../Assets/lightroom.png";
import coreldraw from "../../Assets/coreldraw.png";

import { Helmet } from "react-helmet-async";

const GraphicDesign = () => {
  // Images for Tools Section
  const toolsImages = [
    illustrator,
    photoshop,
    xd,
    indesign,
    lightroom,
    coreldraw,
  ];


  // Data for CourseHeader Section 
  const graphicData = [
    {
      id: 1,
      pageName: "Graphic Designing",
      pageDetails:
        "Careerpedia's Graphic design course is for anyone who wants to enter into a creative career, taught by industry experts and design experts from top MNCs. Let your creative side take a stunning shape.",
      img: HeaderImg,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Graphic Design Institute,Graphic Design Course,Graphic Design Training
          Madhapur Hyderabad | Careerpedia
        </title>
        <meta
          name="description"
          content="Best Graphic designing training institute in Hyderabad, Learn 
                    and implement creative logo, advt banners, fliers, etc., by 
                    applying graphic design. Graphic Design is the process of visual 
                    communication that combines words, images, and ideas to 
                    present the information to the audience."
        />

        <meta
          name="keywords"
          content="graphic design courses in hyderabad,
                  graphic Designing Training institutes in Hyderabad,
                  graphic Designing Course in Hyderabad,
                  graphic design classes in hyderabad,
                  graphic design training centres in hyderabad
                  Professional Graphic Designing Training institutes,
                  Adobe Photoshop Course,
                  Adobe Illustrator Course,"
        />

        <link
          rel="canonical"
          href="https://www.careerpedia.co/graphic-designing-training-hyderabad/"
        />
      </Helmet>

      <Navbar />
      <ApplyNow />
      <CourseHeader
        headerData={graphicData}
        altdata="Graphic design course | Careerpedia"
      />
      <Aim
        heading="Graphic Designing"
        p1="The graphic design course is for anyone without prior design experience, and we will teach you everything."
        p2=" The course is primarily directed towards individuals who wish to join design companies or start a career as a graphic design freelancer."
      />
      <GraphicDesignCourses />
      <Banner visibility="hidden" />
      <Certification />
      <Tools toolsImages={toolsImages} />
      <Testimonials />
      <Banner visibility="hidden" />
      <Why />
      <Approach />
      <Banner visibility="hidden" />
      <HiringPartners />
      <Banner visibility="hidden" />
      <Brands />
      <Banner visibility="hidden" />
      <Team />
      <Banner visibility="hidden" />
      <Faq />
      <Footer />
    </>
  );
};

export default GraphicDesign;
