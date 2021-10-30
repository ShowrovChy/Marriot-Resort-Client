import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Table, Button, Container } from "react-bootstrap";
const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myBookings/${user?.email}`)
      .then((result) => setBookings(result?.data));
  }, [user.email]);
  return (
    <Container style={{ minHeight: "80vh" }}>
      <Table responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Booking Code</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((BR, index) => (
            <tr key={BR._id}>
              <td>{index + 1} </td>
              <td>{BR?.name}</td>
              <td>{BR?.email}</td>
              <td>{BR?.date}</td>
              <td>{BR?.BookingCode}</td>
              <td>
                Remobe
                {/* <Button onClick={() => handleRemove(BR._id)}> Remove </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyBookings;
