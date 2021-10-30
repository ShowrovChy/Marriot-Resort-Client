import React from "react";
import Resorts from "../../Resorts/Resorts";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  window.scroll(0, 0);
  return (
    <div>
      <Banner></Banner>
      {/* <Services></Services> */}
      <Resorts></Resorts>
    </div>
  );
};

export default Home;
