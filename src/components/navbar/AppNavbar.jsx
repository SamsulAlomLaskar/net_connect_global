import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../CSS/AppNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function AppNavbar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        className="navbarr"
        collapseOnSelect
        expand="lg"
        // bg="dark"
        // variant="dark"
      >
        <Container>
          <Navbar.Brand className="brand" href="/home">
            Manhattan Population Explorer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button className="navBtn">
                <Link
                  style={{ color: "#0072AA", textDecoration: "none" }}
                  to="/visual"
                >
                  Visualization(Bar Chart)
                </Link>
              </Button>
              <Button className="navBtn">
                <Link
                  style={{ color: "#0072AA", textDecoration: "none" }}
                  to="/stats"
                >
                  Statistics(Line Chart)
                </Link>
              </Button>
              <Button className="navBtn">
                <Link
                  style={{ color: "#0072AA", textDecoration: "none" }}
                  to="/data"
                >
                  Data(Negative Bar Chart)
                </Link>
              </Button>
            </Nav>
            <Nav>
              <Button className="navBtn">
                <Link
                  style={{ color: "#0072AA", textDecoration: "none" }}
                  to="/lineg"
                >
                  Line Graph
                </Link>
              </Button>
            </Nav>
            <Nav>
              <Button className="navBtn">
                <Link
                  style={{ color: "#0072AA", textDecoration: "none" }}
                  to="/about"
                >
                  About
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
