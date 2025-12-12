import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import Signup from "./Signup";
export const NavBarCom = () => {
  const [isLogin, setIsLogIn] = useState(
    localStorage.getItem("isLogin") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const updateLogin = () => {
      setIsLogIn(localStorage.getItem("isLogin") === "true");
    };

    window.addEventListener("storage", updateLogin);

    return () => window.removeEventListener("storage", updateLogin);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLogIn(false);
    navigate("/");
  };

  

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            E-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse
            id="main-navbar"
            className="d-flex justify-content-between"
          >
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={!isLogin ? "/login" : "/products"}>
                Products
              </Nav.Link>
            </Nav>
            {/* {!isLogin && (
                <Button onClick={handleLogin} style={{ marginRight: "20px" }}>
                  Login
                </Button>
              )}
              {isLogin && (
                <Button onClick={handleLogout} style={{ marginRight: "20px" }}>
                  Logout
                </Button>
              )} */}
            {isLogin ? (
              <>
                <Button onClick={handleLogout} style={{ marginRight: "20px" }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button onClick={handleLogin} style={{ marginRight: "20px" }}>
                  Login
                </Button>
            
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBarCom;
