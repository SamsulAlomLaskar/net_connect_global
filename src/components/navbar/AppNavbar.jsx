import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../CSS/AppNavbar.css";
import { useNavigate } from "react-router-dom";

export default function AppNavbar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        className="navbarr"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="brand" href="/home">
            Manhattan Population Explorer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/story" className="btn">
                Story
              </Nav.Link>
              {/* <Nav.Link href="/visual" className="btn ">
                Visualization(3d Bar Chart)
              </Nav.Link> */}
              <Nav.Link href="/stats" className="btn ">
                Statistics(Line Chart)
              </Nav.Link>
              <Nav.Link href="/data" className="btn ">
                Data(Horizontal Bar Chart)
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
