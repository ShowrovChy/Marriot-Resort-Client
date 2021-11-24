import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
const ManageAllBookings = () => {
  const [bookedResort, setBookedResort] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://powerful-headland-87669.herokuapp.com/manageAllBookings")
      .then((result) => {
        setBookedResort(result.data);
      });
  }, [isLoading]);

  // Handle Booking Remove
  const handleRemove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you want to delete this Booking?");
    if (proceed) {
      axios
        .delete(
          `https://powerful-headland-87669.herokuapp.com/deleteBooking/${id}`
        )
        .then((result) => {
          if (result.data.deletedCount) {
            setIsLoading(!false);
          }
        });
    }
  };
  // Handle Booking Remove
  const handleApprove = (id) => {
    setIsLoading(false);
    const proceed = window.confirm("Do you want to approve this Booking?");
    if (proceed) {
      axios
        .put(
          `https://powerful-headland-87669.herokuapp.com/approveBooking/${id}`
        )
        .then((result) => {
          if (result.data.modifiedCount) {
            setIsLoading(!false);
          }
        });
    }
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Booking Code</th>
            <th>Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {bookedResort.map((BR, index) => (
            <tr key={BR._id}>
              <td>{index + 1} </td>
              <td>{BR?.name}</td>
              <td>{BR?.email}</td>
              <td>{BR?.date}</td>
              <td>{BR?.BookingCode}</td>
              <td>
                <Button
                  variant="success"
                  className="text-white"
                  onClick={() => handleApprove(BR._id)}
                >
                  {BR?.status}
                </Button>
              </td>
              <td>
                <Button
                  variant="warning"
                  className="text-white"
                  onClick={() => handleRemove(BR._id)}
                >
                  <span className="fs-4">
                    {" "}
                    <MdDelete />{" "}
                  </span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllBookings;
