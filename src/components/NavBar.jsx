import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Car for Sale
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/Auto">
              Autos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Suv">
              Suvs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Pickup">
              Pick Ups
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
