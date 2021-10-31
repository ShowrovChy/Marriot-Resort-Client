import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AddANewService from "../AddANewService/AddANewService";
import ManageAllBookings from "../ManageAllBookings/ManageAllBookings";
import "./Admin.css";
import { RiAddCircleLine } from "react-icons/ri";
import { MdManageSearch } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import AllResorts from "../AllResorts/AllResorts";
const Admin = () => {
  const [isActive, setIsActive] = useState("addService");
  window.scroll(0, 0);
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
            <li onClick={() => setIsActive("manageBookings")}>
              <h5 className="d-flex align-items-center">
                <span className="fs-3">
                  <MdManageSearch />{" "}
                </span>{" "}
                <span className="pt-2 ms-1">Manage All Bookings</span>
              </h5>
            </li>
            <li onClick={() => setIsActive("addService")}>
              {" "}
              <h5 className="d-flex align-items-center">
                {" "}
                <span className="fs-3">
                  <RiAddCircleLine />{" "}
                </span>{" "}
                <span className="pt-2 ms-1">Add New Resort</span>
              </h5>
            </li>
            <li onClick={() => setIsActive("allResorts")}>
              {" "}
              <h5 className="d-flex align-items-center">
                {" "}
                <span className="fs-3">
                  <FaHotel />{" "}
                </span>{" "}
                <span className="pt-2 ms-2">All Resorts</span>
              </h5>
            </li>
          </ul>
        </Col>
        <Col md={9} className="">
          {isActive === "addService" && <AddANewService />}
          {isActive === "manageBookings" && <ManageAllBookings />}
          {isActive === "allResorts" && <AllResorts />}
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
