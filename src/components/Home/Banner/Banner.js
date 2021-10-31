import { Carousel, Button } from "react-bootstrap";
import React from "react";
import "./Banner.css";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();

  const handleAboutBtn = () => {
    history.push("/about");
  };
  return (
    <div className="w-100">
      <Carousel className="carouselStyle " interval={2500} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/q09X5dB/banner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carouselCaption">
            <h3 className="carouselHeading">
              Experience everything nature has to offer
            </h3>
            <p className="carouselDescription">Nature benefits you.</p>
            <div>
              <Button
                onClick={handleAboutBtn}
                className="carousel-btn btn-one "
              >
                {" "}
                About us
              </Button>
              <Button className="carousel-btn btn-two "> Book </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/9TS4mmm/banner2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="carouselCaption">
            <h3 className="carouselHeading">
              Experience earth's magic with your soulmate.
            </h3>
            <p className="carouselDescription">Travel with your soul.</p>
            <div>
              <Button
                onClick={handleAboutBtn}
                className="carousel-btn btn-one "
              >
                {" "}
                About us
              </Button>
              <Button className="carousel-btn btn-two ">Book</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/yqthWB2/banner4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carouselCaption">
            <h3 className="carouselHeading">
              You can travel and work from any destination.
            </h3>
            <p className="carouselDescription">Choose a healthy environment.</p>
            <div>
              <Button onClick={handleAboutBtn} className="carousel-btn btn-one">
                {" "}
                About us
              </Button>
              <Button className="carousel-btn btn-two"> Book</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
