import Why from "../../Components/Why";
import Approach from "../../Components/Approach";
import Banner from "../../Components/Banner";
import HiringPartners from "../../Components/HiringPartners/HiringPartners";
import Brands from "../../Components/Brands";
import Testimonials from "./../../Components/Testimonial/Testimonials";
import Team from "../../Components/Team";
import ReactCourses from "../../Components/Courses/ReactCourses";
import Faq from "../../Components/Faq";
import Navbar from "../../Components/Navbar";
import CourseHeader from "../../Components/CourseHeader";
import Aim from "../../Components/Aim";
import Tools from "../../Components/Tools/Tools";
import Certification from "../../Components/Certification";
import Footer from "../../Components/Footer";

import HeaderImg from "../../Assets/NewAssets/Programming.png";

import html from "../../Assets/html.png";
import css from "../../Assets/css.png";
import js from "../../Assets/js.png";
import react from "../../Assets/react.png";
import vscode from "../../Assets/vscode.png";
import node from "../../Assets/node.png";

import { Helmet } from "react-helmet-async";
import ApplyNow from "../../Components/ApplyNow";

const ReactJs = () => {
  
  // Images for Tools Section
  const toolsImages = [html, css, js, react, node, vscode];

  // Data for CourseHeader Section
  const reactData = [
    {
      id: 1,
      pageName: "React JS",
      pageDetails:
        "Our leading global Tech-industry experts teach React JS and real industry projects to prepare you to become an advanced React JS developer with global standards.  ",
      img: HeaderImg,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          React JS Training in Hyderabad Madhapur | Best Online and offline
          ReactJS Training Institute Hyderabad | Careerpedia
        </title>
        <meta
          name="description"
          content="Careerpedia proudly announces its presence for React JS course 
                  training in Hyderabad under professional Mentors with a 
                  limited batch in the heart of Hyderabad city  which is with  
                  well-equipped ambiance added  classroom training for
                  effective holistic practical React JS training with high rated addition of HTML, CSS, JAVASCRIPT and other trending 
                  programming/non-programming courses in Hyderabad.
"
        />

        <meta
          name="keywords"
          content="React js Training in Hyderabad Madhapur, 
                  React Js Course in Hyderabad Madhapur, 
                  React Js Institutes in Hyderabad Madhapur, 
                  React js in Hyderabad, 
                  React js Classes in Hyderabad, 
                  React js Classroom Training in Hyderabad, 
                  React js Project Training in Hyderabad."
        />

        <link
          rel="canonical"
          href="https://www.careerpedia.co/reactjs-training-hyderabad-madhapur/"
        />
      </Helmet>

      <Navbar />
      <ApplyNow />
      <CourseHeader
        headerData={reactData}
        altdata="React Js Course | Careerpedia "
      />
      <Aim
        heading="ReactJS"
        p1="Whether you are a student or a professional looking to develop React JS skills to be part of the front-end development in a tech team in the software industry, Careerpedia's React JS course is for you. "
        p2="Learn React JS from industry experts and become a React JS developer in less than 4-weeks."
      />
      <ReactCourses />
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

export default ReactJs;
