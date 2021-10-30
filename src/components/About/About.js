import React from "react";
import "./About.css";
const About = () => {
  window.scroll(0, 0);
  return (
    <div className="container about-container">
      <h1 className="text-center fw-light ">ABOUT US</h1>
      <p className="text-center mt-5">
        Our core values make us who we are. As we change and grow, the beliefs
        that are most important to us stay the same—putting people first,
        pursuing excellence, embracing change, acting with integrity and serving
        our world. Being part of Marriott International means being part of a
        proud history and a thriving culture.Today, business plays an
        increasingly critical role… in taking on our world’s most pressing
        social, environmental and economic issues. With our size and scale, we
        have a global responsibility and a unique opportunity to be a force for
        good. Guided by our 2025 Sustainability and Social Impact Goals, as well
        as the UN Sustainable Development Goals, we commit to creating positive
        and sustainable impact wherever we do business.
      </p>
    </div>
  );
};

export default About;
