import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";

import "./Resorts.css";
import { Link } from "react-router-dom";
const Resorts = () => {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    axios
      .get("https://powerful-headland-87669.herokuapp.com/allResorts")
      .then((result) => {
        const data = result.data;
        setResorts(data);
      });
  }, []);

  return (
    <div className="resorts-container mb-5">
      <Container>
        <h1 className=" text-uppercase fw-bold ps-3">
          Explore <span className="text-warning">Resort</span> Hotels{" "}
        </h1>
        <h2 className="ps-3 fw-light text-secondary">
          Find the Resort hotel or campground that's just right for you.
        </h2>

        <Row className="gy-5 mx-auto ">
          {resorts.map((resort) => (
            <Col md={12} key={resort._id} className="pt-3">
              <Row className="   border inside-row ">
                <Col md={6} className="px-0">
                  <div className="h-100 overflow-hidden ser-image-div">
                    <img
                      className="rounded rounded-3 resort-image"
                      src={resort.image}
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={6} className="pt-3">
                  <Card className="bg-transparent py-0  border-0">
                    <Card.Body className="py-0">
                      <Card.Title>
                        <h2>{resort.name}</h2>
                      </Card.Title>
                      <Card.Text>
                        <div>
                          <h5 className="fw-normal text-primary mt-3">
                            {resort.area}
                          </h5>
                          <p>
                            {" "}
                            <small className=" border-bottom">
                              <em> {resort.booked} </em>
                            </small>{" "}
                          </p>
                          <p className="text-secondary">
                            {resort.description.slice(0, 200)} ...
                          </p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-transparent border-0">
                      <div className="d-flex justify-content-between">
                        <Button className="book-btn-style border-0">
                          <Link
                            className="text-decoration-none text-white"
                            to={`/booking/${resort._id}`}
                          >
                            {" "}
                            Book Resort
                            <span className="ms-2">
                              <BsFillBookmarkFill />
                            </span>{" "}
                          </Link>
                        </Button>
                        <div
                          id="packageWrapper"
                          className=" ms-5 bg-light py-2 px-4 rounded-3"
                        >
                          <h5 className="package-Style mb-0 text-primary">
                            Resort Package
                          </h5>
                          <div>
                            <span
                              id="durationStyle"
                              className=" ms-1 bg-light text-warning fw-bold"
                            >
                              {resort.duration}
                            </span>
                            <span
                              id="costStyle"
                              className=" ms-3 bg-light text-warning fw-bold fs-2 packagePriceStyle"
                            >
                              {resort.cost}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Resorts;
