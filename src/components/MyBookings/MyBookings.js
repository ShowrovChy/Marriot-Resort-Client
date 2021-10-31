import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Table, Button, Container } from "react-bootstrap";
const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://powerful-headland-87669.herokuapp.com/myBookings/${user?.email}`
      )
      .then((result) => setBookings(result?.data));
  }, [user.email, isLoading]);

  // Handle Booking Remove
  const handleRemove = (id) => {
    setIsLoading(false);
    axios
      .delete(
        `https://powerful-headland-87669.herokuapp.com/deleteBooking/${id}`
      )
      .then((result) => {
        console.log(result);
        if (result.data.deletedCount) {
          setIsLoading(!false);
        }
      });
  };
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
                <Button onClick={() => handleRemove(BR._id)}> Remove </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyBookings;
