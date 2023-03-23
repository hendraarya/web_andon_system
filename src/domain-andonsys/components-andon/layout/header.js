import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./header.css";
import logoAndon from "../../assets-andon/picture/logo-andonsys.png";
// import "../../Assets/font/oswald/Oswald-VariableFont_wght.ttf";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const [users, setUser] = useState([]);

  // const logout = localStorage.removeItem("dataUser");
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const saved = localStorage.getItem("dataUser");
  const initialvalue = JSON.parse(saved);
  // console.log("user :", initialvalue)

  useEffect(() => {
    setUser(initialvalue);
  }, []);

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logoAndon}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />
          Andonsys
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/110T2RT">
            110T 2RT
          </Nav.Link>
          <Nav.Link as={Link} to="/60T2RT">
            60T 2RT
          </Nav.Link>
          <Nav.Link as={Link} to="/SIM_MACHINE">
            SIM Machine
          </Nav.Link>
          <NavDropdown title={<span>Others</span>} id="navbarScrollingDropdown">
            <NavDropdown.Item
              style={{ color: "darkgrey" }}
              as={Link}
              to="/Schedule"
            >
              Schedule
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "darkgrey" }}
              as={Link}
              to="/Report"
            >
              Report
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "darkgrey" }}
              as={Link}
              to="/About"
            >
              About
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "darkgrey" }}
              as={Link}
              to="/testing/field"
            >
              Trial auto field
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "darkgrey" }}
              as={Link}
              to="/testing/modal"
            >
              Trial add Modal
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* {users.map((user) => (
          <div key={user} style={{ marginRight: 15, color: "white" }}>
            Login as {user.staff_name}
          </div>
        ))} */}
        <button
          type="button"
          onClick={Logout}
          className="btn btn-outline-warning me-2"
        >
          Logout
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;
