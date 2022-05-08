import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div style={{ maxWidth: "100vw" }}>
      {/* React-Bootstrap Navbar */}
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bangla Motors</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav variant="white" defaultActiveKey="/home" className="ms-auto">
              <Nav.Link eventKey="link-1" as={Link} to="/home">
                Home
              </Nav.Link>
              {/*optional rendering  */}
              {user ? (
                <Nav.Link eventKey="link-2" onClick={() => signOut(auth)}>
                  Sign out
                </Nav.Link>
              ) : (
                <Nav.Link eventKey="link-2" as={Link} to="/login">
                  Log In
                </Nav.Link>
              )}

              <Nav.Link eventKey="link-4" as={Link} to="/blog">
                Blogs
              </Nav.Link>
              <Nav.Link eventKey="link-5" as={Link} to="/about">
                About Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
