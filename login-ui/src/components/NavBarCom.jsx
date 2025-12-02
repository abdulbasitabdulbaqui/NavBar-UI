import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
export const NavBarCom = () => {
  const [isLogin, setIsLogIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
    localStorage.setItem("isLogin", "true");
    setIsLogIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.getItem("isLogin");
    setIsLogIn(false);
  };
  useEffect(() => {
    const status = localStorage.getItem("isLogin");
    setIsLogIn(status === "true");
  }, []);

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="ms-5 me-5 mt-2" >
        <Container fluid style={{ width: "100%" }}>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse
            id="main-navbar"
            className="d-flex justify-content-between"
          >
            <Nav className="me-auto" >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            {!isLogin && (
              <Button onClick={handleLogin} style={{ marginRight: "20px" }}>
                Login
              </Button>
            )}
            {isLogin && (
              <Button onClick={handleLogout} style={{ marginRight: "20px" }}>
                Logout
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBarCom;
