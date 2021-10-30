import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Resorts = () => {
  const [resorts, setResorts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios.get("http://localhost:5000/allResorts").then((result) => {
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
        <h1>This is Events.</h1>
        <Row className="g-5">
          {resorts.map((resort) => (
            <Col md={3} key={resort._id}>
              <div className="h-100">
                <img width="100%" src={resort.image} alt="" />
                <h4>{resort.name}</h4>
                <Button
                  //   onClick={() => handleJoinEvent(event._id)}
                  className="bg-success border-0"
                >
                  Join event
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Resorts;
