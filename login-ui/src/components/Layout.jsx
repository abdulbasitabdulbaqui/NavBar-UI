import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBarCom from "./components/NavBarCom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
const Layout = () => {
  return (
    <div>
      <NavBarCom />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Layout;
