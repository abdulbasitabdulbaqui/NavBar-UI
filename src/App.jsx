import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";

import Login from "./components/Login";
import NavBarCom from "./components/NavBarCom";
import Products from "./components/Products";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import CardDetail from "./components/CardDetail";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const location = useLocation();
  const [isLogin, setIsLogIn] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  return (
    <div>
      {!["/login", "/signup"].includes(location.pathname) && <NavBarCom />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:pid" element={<CardDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
