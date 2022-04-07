import ApplyNow from "../../Components/ApplyNow";
import Why from "../../Components/Why";
import Approach from "../../Components/Approach";
import Banner from "../../Components/Banner";
import HiringPartners from "../../Components/HiringPartners/HiringPartners";
import Brands from "../../Components/Brands";
import Testimonials from "./../../Components/Testimonial/Testimonials";
import Team from "../../Components/Team";
import DigitalMarketingCourses from "../../Components/Courses/DigitalMarketingCourses";
import Faq from "../../Components/Faq";
import Navbar from "../../Components/Navbar";
import CourseHeader from "../../Components/CourseHeader";
import Aim from "../../Components/Aim";
import Tools from "../../Components/Tools/Tools";
import Certification from "../../Components/Certification";
import Footer from "../../Components/Footer";

import HeaderImg from "../../Assets/NewAssets/headerDigitalMarketing.svg";

import googleAnalytics from "../../Assets/googleAnalytics.png";
import hootsuite from "../../Assets/hootsuitLogo.png";
import googlePlanner from "../../Assets/keywordPlanner.png";
import wordpress from "../../Assets/wordpress.png";
import ahref from "../../Assets/ahrefs.png";
import searchConsole from "../../Assets/searchConsole.png";
import frog from "../../Assets/screamingFrog.png";
import semrush from "../../Assets/semrush.jpg";
import googleAds from "../../Assets/googleAds.png";

import { Helmet } from "react-helmet-async";
import NewHeader from "../../Components/NewHeader";
import AllBrands from "../../Components/AllBrands";
import Filler from "../../Components/Filler";

const DigitalMarketing = () => {
  // Images for Tools Section
  const toolsImages = [
    googleAnalytics,
    hootsuite,
    googlePlanner,
    wordpress,
    frog,
    semrush,
    ahref,
    searchConsole,
    googleAds,
  ];

  // Data for CourseHeader Section
  const digitalData = [
    {
      id: 1,
      pageName: "Digital Marketing",
      pageDetails:
        " Careerpedia delivers unparalleled learning experiences. Gain 10+ Google & Facebook recognized digital marketing certifications. Build a Brand by mastering digital skills and advancing your marketing career.",
      img: HeaderImg,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best Digital Marketing Course in Hyderabad |Digital Marketing training
          institute | Careerpedia
        </title>
        <meta
          name="description"
          content=" The best choice for a Digital marketing course in Hyderabad
                    with placement. by real-time faculty with live projects. 
                    Our Institute provides 100% job placement assistance
                    and support. Get Hands-On Knowledge on SEO, SEM, SMM,
                    SMO, and many more. Become a Digital Marketer in 30 Days."
        />

        <meta
          name="keywods"
          content=" digital marketing training course, 
                    digital marketing course, 
                    digital marketing courses, 
                    digital marketing training, 
                    learn digital marketing, 
                    digital marketing classes,
                    Hyderabad, 
                    digital marketing training with placemen"
        />

        <link
          rel="canonical"
          href="https://www.careerpedia.co/Best-digital-marketing-course-hyderabad/"
        />
      </Helmet>

      <Navbar />
      <ApplyNow />
      <NewHeader
        headerData={digitalData}
        altdata="Digital marketing Course | Careerpedia "
      />
      <AllBrands />
      {/* <CourseHeader
        headerData={digitalData}
        altdata="Digital marketing Course | Careerpedia "
      /> */}
      <Filler data="Careerpedia offers some of the most innovative methods to teach digital marketing. It is self-evident that the Google digital marketing course is gaining traction. Careerpedia has integrated the Google certification and Facebook certification into its curriculum, or the Meta certification." />
      <Aim
        heading="Digital Marketing"
        p1=" Digital Marketing Program through Careerpedia aims at aspirants who
          want to kickstart their careers and grab techniques to match the trend
          of marketing with an improved skill set."
        p2=" Entrepreneurs, Marketers who own their business, and employees looking
          to grow their company’s business have a choice of opting it too."
      />
      <DigitalMarketingCourses />
      <Banner />
      <Certification />

      <Tools toolsImages={toolsImages} />
      <Filler data="But Careerpedia triumphs itself that the Google-certified digital marketing with them is unparalleled and the best in the country. Here at Careerpedia, the digital marketing course fees vary whether you opt for the digital marketing course online or the digital marketing course in Hyderabad. " />
      <Testimonials />
      <Banner />
      <Filler data="Careerpedia's digital marketing course curriculum is holistic. It is not only the best digital marketing course in Hyderabad but also one of the most prestigious certificates across India, given the acceptance rate in MNCs." />
      <Why />

      <Approach />
      <Banner />

      <HiringPartners />
      <Banner />

      <Filler data="Google digital marketing certification is tricky; as Google's rules and the program continue to change every day, it becomes increasingly difficult to keep yourself updated with Google digital marketing certificate updates. Careerpedia is a place you should be. With continuous access to our digital marketing certificate program, you will be able to read our blogs and highly prestigious digital marketing blogs available on Google. " />
      <Brands />
      <Banner />

      <Filler data="For anyone looking for the best institute for digital marketing in Hyderabad, look no further. Careerpedia's expert certification is valued as the finest institute for digital marketing." />

      <Team />
      <Banner />
      <Filler data="Since Careerpedia trains its members with Facebook, Instagram, LinkedIn, Youtube, and several other platforms, you receive a Facebook blueprint certificate by the end of the digital marketing certificate program. Moving from basic digital marketing concepts to more advanced marketing concepts, the course is well planned and well-taught." />
      <Faq />

      <Footer />
    </>
  );
};

export default DigitalMarketing;
