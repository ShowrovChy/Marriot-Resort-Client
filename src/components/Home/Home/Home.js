import React from "react";
import Resorts from "../../Resorts/Resorts";
import Banner from "../Banner/Banner";
import Management from "../Management/Management";
import Subscription from "../Subscription/Subscription";

const Home = () => {
  window.scroll(0, 0);
  return (
    <div>
      <Banner></Banner>
      <Resorts></Resorts>
      <Management></Management>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
