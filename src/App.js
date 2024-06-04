import "./App.css";

import { useState } from "react";

import Carousel from "./Carousel.js";
import Design1 from "./design1.js";
import Popform from "./popform.js";
import Why from "./why.js";
import Project from "./project.js";
import Company from "./company.js";
import FeedbackSection from "./feedback.js";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <Popform closePopup={() => setOpen(false)} />
      ) : (
        <>
          <Design1 openPopup={() => setOpen(true)} />
          <Carousel />
          <Why />
          <Project />

          <Company />

          <FeedbackSection />
        </>
      )}
    </>
  );
};

export default App;
