import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Resorts = () => {
  const [resorts, setResorts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("https://powerful-headland-87669.herokuapp.com/allResorts")
      .then((result) => {
        const data = result.data;
        setResorts(data);
      });
  }, []);

  // Handling Join Event
  /*   const handleJoinEvent = (id) => {
    axios.get(`http://localhost:5000/singleEvents/${id}`).then((result) => {
      const data = result.data;
      data.email = user.email;

      axios
        .post(`http://localhost:5000/joinedEvents/${id}`, data)
        .then((result) => {
          console.log("this is result from events line 20 ", result);
        });
    });
  }; */
  return (
    <div className="events-container">
      <Container>
        <h2>
          Explore Resort Hotels <br /> Find the Resort hotel or campground
          that's just right for you.
        </h2>
        <Row className="g-5">
          {resorts.map((resort) => (
            <Col md={12} key={resort._id}>
              <Row>
                <Col md={6}>
                  <div className="h-100">
                    <img width="100%" src={resort.image} alt="" />
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <h4>{resort.name}</h4>
                    <h6>{resort.area}</h6>
                    <h6>{resort.booked}</h6>
                    <p>{resort.description.slice(0, 300)}</p>
                    <Button
                      //   onClick={() => handleJoinEvent(event._id)}
                      className="bg-success border-0"
                    >
                      Join event
                    </Button>
                  </div>
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
