
import "./App.css";
import "./Components/ComponentCss/ComponentStyle.css";

import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";
import Homepage from "./Pages/Homepage/Homepage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import DigitalMarketing from "./Pages/DigitalMarketing/DigitalMarketing";
import UserExperience from "./Pages/UserExperience/UserExperience";
import ReactJs from "./Pages/ReactJs/ReactJs";
import GraphicDesign from "./Pages/GraphicDesign/GraphicDesign";
import Printing from "./Pages/Printing/Printing";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import ReactGa from "react-ga";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { LiveChatWidget } from "@livechat/widget-react";
import Registration from "./Pages/Registration/Registration";

function App() {

  // For google analytics
  useEffect(() => {
    ReactGa.initialize("UA-168580290-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);



  return (
    <>
      <Helmet>
        <title>
          India's #1 training via live global projects with placements
        </title>
        <meta
          name="description"
          content="Careerpedia is a TECHNOLOGY & DESIGN learning platform that only works on building the “PRACTICAL KNOWLEDGE” of the students."
        />

        <link rel="canonical" href="/" />
      </Helmet>

      <div className="App">
        <LiveChatWidget license="13874766" group="0" />
        <Router>
          <ScrollToTop>
            {/* <Routes>
              <Route path="/" exact element={<UnderConstruction/>} />
            </Routes> */}
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route
                path="/Best-digital-marketing-course-hyderabad"
                element={<DigitalMarketing />}
              />
              <Route
                path="/ui-ux-designing-course-madhapur"
                element={<UserExperience />}
              />
              <Route
                path="/reactjs-training-hyderabad-madhapur"
                element={<ReactJs />}
              />
              <Route
                path="/graphic-design-institute-in-hyderabad"
                element={<GraphicDesign />}
              />
              <Route
                path="/3D-printing-course-training-hyderabad"
                element={<Printing />}
              />

              <Route
                path="/registration"
                element={<Registration/>}
              />
            </Routes>
          </ScrollToTop>
        </Router>
      </div>
    </>
  );
}

export default App;
