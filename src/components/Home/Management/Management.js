import React from "react";
import "./Management.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const Management = () => {
  const chefs = [
    {
      id: 201,
      name: "john Doe",
      post: "CEO",
      image: " https://i.ibb.co/9GVj0gB/ceo.jpg",
    },
    {
      id: 202,

      name: "Evanaa",
      post: "Director",
      image: "https://i.ibb.co/9cY7RtY/director.jpg",
    },
    {
      id: 203,
      name: "john smith",
      post: " Manager",
      image: "https://i.ibb.co/d276CLP/it-mg.jpg",
    },
    {
      id: 204,
      name: "Knot Doe",
      post: "Asst. Manager ",
      image: " https://i.ibb.co/kBCxmVG/mg.jpg ",
    },
  ];
  window.scrollTo(0, 0);

  return (
    <div id="chefs" className="container chefs-main-Container">
      <h1 className="text-center">Our Management</h1>
      <p className="text-center mt-4">
        We have the finest management team. Your safety and comfort are our
        first priority.We ensure out customers they will Experience what they
        expect.We do not compromise our service quality and strategy.
      </p>
      <Row className="w-100">
        {chefs.map((chef) => (
          <Col md={3} className="chefDiv  mt-5" key={chef.id} chef={chef}>
            <div className="chefImgDiv">
              <img className="chefImage" src={chef.image} alt="" />

              <div className="chefCardMiddle text-center text-light pt-2">
                <h4 className="">{chef.name}</h4>
                <h6>{chef.post}</h6>
              </div>
            </div>

            <div className="chefCardBottom text-center d-flex justify-content-center mt-2">
              <div className="iconDiv fs-5">
                <FaFacebook />
              </div>
              <div className="iconDiv fs-5">
                <FaTwitter />
              </div>{" "}
              <div className="iconDiv fs-5">
                <FaInstagram />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Management;
