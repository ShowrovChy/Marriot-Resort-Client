import React from "react";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CgFacebook, CgInstagram, CgTwitter, CgYoutube } from "react-icons/cg";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  window.scroll(0, 0);
  return (
    <div className="contact-container">
      <Row xs={1} md={2} className="gy-5 w-100 mx-auto">
        <Col className=" contact-col-style left-col">
          <h1 className="contact-column-heading fw-bold">Send Us An Email</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="contact-input"
              {...register("name")}
              placeholder="Your Name"
            />
            <input
              className="contact-input"
              type="email"
              {...register("email")}
              placeholder="Your Email"
            />
            <textarea
              className="contact-textArea"
              rows="5"
              type="email"
              {...register("email")}
              placeholder="Write Message"
            />
            <input className="contact-btn" type="submit" value="Send" />
          </form>
        </Col>
        <Col className=" contact-col-style ">
          <h1 className="contact-column-heading fw-bold">Get in touch</h1>
          <Row md={2} xs={1} className="gy-2 contact-wrapper">
            <Col className="">
              <div className="rounded-3  contact-div">
                <h5>LOCATION</h5>
                <p className="text-secondary">123 Fake Street</p>
                <p className="text-secondary">USA,New York</p>
              </div>
            </Col>
            <Col>
              <div className="  rounded-3  contact-div">
                <h5> CONTACT US</h5>
                <p className="text-secondary">Phone : + 1 800 755 60 20</p>
                <p className="text-secondary">Email : contacts@company.com </p>
              </div>
            </Col>
            <Col>
              <div className=" rounded-3  contact-div">
                <h5>OUR HOURS</h5>
                <p className="text-secondary">For help with Navigator</p>
                <p className="text-secondary">Phone(03) 8559 5000</p>
              </div>
            </Col>

            <Col>
              <div className=" rounded-3 contact-div">
                <h5>FOLLOW US</h5>
                <div className="d-flex mt-4">
                  <div className="contact-iconDiv">
                    <h2 className="contactIcon">
                      <CgFacebook />
                    </h2>
                  </div>
                  <div className="contact-iconDiv">
                    <h2 className="contactIcon">
                      <CgTwitter />
                    </h2>
                  </div>
                  <div className="contact-iconDiv">
                    <h2 className="contactIcon">
                      <CgYoutube />
                    </h2>
                  </div>
                  <div className="contact-iconDiv">
                    <h2 className="contactIcon">
                      <CgInstagram />
                    </h2>
                  </div>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
