import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Products";
import About from "./components/About";
import Login from "./components/Login";
import NavBarCom from "./components/NavBarCom";
import Products from "./components/Products";
import { Routes, Route, useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && <NavBarCom />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
