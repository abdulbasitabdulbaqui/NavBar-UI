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

const App = () => {
  const location = useLocation();
  const [isLogin, setIsLogIn] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  return (
    <div>
      {location.pathname !== "/login" && <NavBarCom />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:pid" element={<CardDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
