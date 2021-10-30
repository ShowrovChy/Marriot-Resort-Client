import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AddANewService from "../AddANewService/AddANewService";
import ManageAllBookings from "../ManageAllBookings/ManageAllBookings";
import "./Admin.css";
const Admin = () => {
  const [isActive, setIsActive] = useState("addNewService");
  return (
    <div>
      <Row>
        <Col md={3} className="border border-2 border-warning  ps-5">
          <h3 className="mt-3 text-warning">Admin DashBoard</h3>
          <ul className="admin-ul">
            <li onClick={() => setIsActive("manageServices")}>
              Manage AllBookings
            </li>
            <li onClick={() => setIsActive("addNewService")}>
              Add New Services
            </li>
          </ul>
        </Col>
        <Col md={9} className="border border-2 border-danger">
          {isActive === "addNewService" && <AddANewService />}
          {isActive === "manageServices" && <ManageAllBookings />}
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
