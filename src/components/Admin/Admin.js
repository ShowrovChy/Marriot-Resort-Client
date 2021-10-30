import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AddANewService from "../AddANewService/AddANewService";
import ManageAllBookings from "../ManageAllBookings/ManageAllBookings";
import "./Admin.css";
import { RiAddCircleLine } from "react-icons/ri";
import { MdManageSearch } from "react-icons/md";
const Admin = () => {
  const [isActive, setIsActive] = useState(!false);
  return (
    <div className="">
      <Row className="w-100 mt-5">
        <Col md={3} className="  ps-5 border-end border-2">
          <ul className="admin-ul ps-0">
            <li>
              <h4 className="mt-2 text-warning border-bottom border-2 border-dark ">
                Admin DashBoard
              </h4>
            </li>
            <li onClick={() => setIsActive(!false)}>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <MdManageSearch />{" "}
                </span>{" "}
                <span className="pt-2 ms-1">Manage All Bookings</span>
              </h5>
            </li>
            <li onClick={() => setIsActive(false)}>
              {" "}
              <h5 className="d-flex align-items-center">
                {" "}
                <span className="fs-3">
                  <RiAddCircleLine />{" "}
                </span>{" "}
                <span className="pt-2 ms-1">Add New Services</span>
              </h5>
            </li>
          </ul>
        </Col>
        <Col md={9} className="">
          {isActive === false && <AddANewService />}
          {isActive === !false && <ManageAllBookings />}
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
