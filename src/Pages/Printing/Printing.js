import Why from "../../Components/Why";
import Approach from "../../Components/Approach";
import Banner from "../../Components/Banner";
import HiringPartners from "../../Components/HiringPartners/HiringPartners";
import Brands from "../../Components/Brands";
import Testimonials from "./../../Components/Testimonial/Testimonials";
import Team from "../../Components/Team";
import PrintingCourses from "../../Components/Courses/PrintingCourses";
import Faq from "../../Components/Faq";
import Navbar from "../../Components/Navbar";
import CourseHeader from "../../Components/CourseHeader";
import Aim from "../../Components/Aim";
import Tools from "../../Components/Tools/Tools";
import Certification from "../../Components/Certification";
import ApplyNow from "../../Components/ApplyNow";

import Footer from "../../Components/Footer";


import HeaderImg from "../../Assets/NewAssets/printing.svg";

import illustrator from "../../Assets/illustrator.jpg";
import photoshop from "../../Assets/photoshop.jpg";
import xd from "../../Assets/xd.png";
import indesign from "../../Assets/indesign.png";
import lightroom from "../../Assets/lightroom.png";
import coreldraw from "../../Assets/coreldraw.png";


import { Helmet } from "react-helmet-async";

const Printing = () => {
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
      pageName: "3D Printing",
      pageDetails:
        "Calling all 3D printing enthusiasts. With the Careerpedia 3D Printing course, you will be able to use the methods and techniques demonstrated in this course to design, model, and export your unique 3D models for 3D printing. The course is designed for practical learning and will walk you step by step through creating 3D models for and exporting them for 3D printing.",
      img: HeaderImg,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          3D Printer Training in Hyderabad, Classes, Courses, Institutes |
          Online & Classroom Course|Careerpedia
        </title>
        <meta
          name="description"
          content="Enroll for 3D Printer Training in Hyderabad, Careerpedia Training center Hyderabad, is one of the best 3d Printing training center Hyderabad, offers both Classroom & Online 3d Printer training with 100% placement support in hyderabad."
        />
        <meta
          name="keywords"
          content="3d printer training in hyderabad,
                    3d printer courses in hyderabad,
                    3d printer classes in hyderabad,
                    3d printer institutes in hyderabad,
                    3d printer training contact in hyderabad,
                    3d printer institutes phone numbers in hyderabad,
                    get 3d printer course fees in hyderabad,
                    3d printer classes in hyderabad"
        />
        <link
          rel="canonical"
          href="https://www.careerpedia.co/3D-printing-course-training-hyderabad/"
        />
      </Helmet>

      <Navbar />
      <ApplyNow />
      <CourseHeader
        headerData={graphicData}
        altdata="3D prininting course | Careerpedia"
      />
      <Aim
        heading="3D Printing"
        p1="Students who wish to learn design package for their professional use, anyone interested to start 3D printing, students of design, 3D print hobbyist"
        p2=""
      />
      <PrintingCourses />
      <Banner />
      <Certification />
      {/* <Tools toolsImages={toolsImages} /> */}
      <Testimonials />
      <Banner />
      <Why />
      <Approach />
      <Banner />
      <HiringPartners />
      <Banner />
      <Brands />
      <Banner />
      <Team />
      <Banner />
      <Faq />
      <Footer />
    </>
  );
};

export default Printing;
