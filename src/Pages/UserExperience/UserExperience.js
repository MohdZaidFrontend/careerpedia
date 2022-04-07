import Why from "../../Components/Why";
import Approach from "../../Components/Approach";
import Banner from "../../Components/Banner";
import HiringPartners from "../../Components/HiringPartners/HiringPartners";
import Brands from "../../Components/Brands";
import Testimonials from "./../../Components/Testimonial/Testimonials";
import Team from "../../Components/Team";
import Certification from "../../Components/Certification";
import Faq from "../../Components/Faq";
import UserExperienceCourses from "../../Components/Courses/UserExperienceCourses";
import Navbar from "../../Components/Navbar";
import CourseHeader from "../../Components/CourseHeader";
import Aim from "../../Components/Aim";
import Tools from "../../Components/Tools/Tools";
import ApplyNow from "../../Components/ApplyNow";
import Footer from "../../Components/Footer";

import HeaderImg from "../../Assets/NewAssets/programsImg2.png";

import figma from "../../Assets/figma.png";
import xd from "../../Assets/xd.png";
import sheets from "../../Assets/sheets.png";
import balsamiq from "../../Assets/balsamiq.png";

import { Helmet } from "react-helmet-async";

const UserExperience = () => {
  // Images for Tools Section
  const toolsImages = [figma, xd, sheets, balsamiq];

  // Data for CourseHeader Section
  const UIUXData = [
    {
      id: 1,
      pageName: "UI/UX Designing",
      pageDetails:
        " The UI/UX Design course brings a design-centric approach to user interface and user-experience design. It presents practical, skill-based training centered around a graphical communications perspective, rather than on one focused on marketing or programming alone. Join the fastest-growing designing community.",
      img: HeaderImg,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          UI UX Design Course in Hyderabad Madhapur | UI UX Design Training
          Institute | Careerpedia
        </title>
        <meta
          name="description"
          content="We are one of the best UI UX Design Training institutes 
                  in Hyderabad Madhapur. In this course, you will 
                  understand the concept and difference between 
                  UI and UX. Become a UI/UX designer by learning from 
                  scratch to advance with careerpedia."
        />

        <meta
          name="keyword"
          content="UI UX Design Training in Hyderabad, 
                  UI UX Design Training in Madhapur Hyderabad, 
                  UI UX Design course Online in Hyderabad, 
                  UI UX Design course in Madhapur Hyderabad, 
                  UI UX Designer Institutes in Madhapur 
                  UI UX Design Classes in Madhapur, 
                  UI UX Design Coaching in Madhapur Hyderabad, 
                  UI UX Design Online Training in Madhapur, 
                  UI UX Designer course in Kondapur, "
        />

        <link
          rel="canonical"
          href="/https://www.careerpedia.co/ui-ux-designing-course-madhapur/"
        />
      </Helmet>

      <Navbar />
      <ApplyNow />
      <CourseHeader
        headerData={UIUXData}
        altdata="UI/UX design Course | Careerpedia "
      />
      <Aim
        heading="UI/UX Designing"
        p1="Regardless of your educational qualifications, everyone who wishes to design and be part of the user experience community can join the course."
        p2="The course is aimed at aspiring graphic designers, UI/UX designers, and web developers looking forward to developing interface and experience design."
      />
      <UserExperienceCourses />
      <Banner />
      <Certification />
      <Tools toolsImages={toolsImages} />
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

export default UserExperience;
