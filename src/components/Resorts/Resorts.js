import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { BsFillBookmarkFill } from "react-icons/bs";

import "./Resorts.css";
import { Link } from "react-router-dom";
const Resorts = () => {
  const [resorts, setResorts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios.get("http://localhost:5000/allResorts").then((result) => {
      const data = result.data;
      setResorts(data);
    });
  }, []);

  return (
    <div className="events-container my-5">
      <Container>
        <h2>
          Explore Resort Hotels <br /> Find the Resort hotel or campground
          that's just right for you.
        </h2>
        <Row className="g-5">
          {resorts.map((resort) => (
            <Col md={12} key={resort._id}>
              <Row className="  border inside-row">
                <Col md={6} className="px-0">
                  <div className="h-100 overflow-hidden ser-image-div">
                    <img
                      className="rounded rounded-3 resort-image"
                      src={resort.image}
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={6}>
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
                            {resort.description.slice(0, 300)}
                          </p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-transparent border-0">
                      <Button
                        //   onClick={() => handleJoinEvent(event._id)}
                        className="book-btn-style border-0"
                      >
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
