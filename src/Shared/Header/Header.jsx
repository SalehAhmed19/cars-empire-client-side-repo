import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" className="nav-bg" variant="dark">
        <Container>
          <Navbar.Brand className="fw-bold font" as={Link} to="/">
            Cars-Empire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} className="font-2" to="/inventory">
                Manage Inventory
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} className="font-2" to="/add-item">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={Link} className="font-2" to="/my-items">
                    My Items
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} className="font-2" to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>{user?.displayName}</Nav.Link>
              {user ? (
                <Button
                  variant="transparent"
                  className="text-secondary text-light font-2"
                  onClick={handleSignout}
                >
                  Sign Out
                </Button>
              ) : (
                <Nav.Link as={Link} className="font-2" to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
