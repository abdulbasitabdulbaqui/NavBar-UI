import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [final, setFinal] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setFinal({ name, email });
  }, [name, email]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(final);
    setEmail("");
    setName("");
    if (name === "" || email === "") {
      setError("All Fields Are Required");
    } else {
      navigate("/home");
    }
    localStorage.setItem("isLogin", true);
    const getItem = localStorage.getItem("isLogin");
    console.log(getItem);
  };

  return (
    <div
      style={{ height: "600px", width: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="d-flex justify-content-center col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 shadow p-3 mb-5 bg-white rounded shadow-lg ">
        <div className="w-100" style={{ marginTop: "60px" }}>
          <div style={{ textAlign: "center" }}>
            <h1>LOGIN PAGE</h1>
          </div>

          <label>NAME:</label>
          <input
            style={{ margin: "8px", padding: "10px", width: "90%" }}
            type="text"
            placeholder="ENTER YOUR NAME"
            onChange={handleName}
            value={name}
            className="w-100"
          />

          <p style={{ color: "red" }}>{error}</p>

          <label>EMAIL:</label>
          <input
            style={{ margin: "8px", padding: "10px", width: "90%" }}
            type="text"
            placeholder="ENTER YOUR EMAIL"
            onChange={handleEmail}
            value={email}
            className="w-100"
          />

          <p style={{ color: "red" }}>{error}</p>

          <div>
            <Button onClick={handleSubmit} className="w-75 mx-5">
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
