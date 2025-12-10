import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [final, setFinal] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogIn] = useState(
      localStorage.getItem("isLogin") === "true"
    );
const navigate = useNavigate()
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
    

    if (name === "" || email === "") {
      setError("All Fields Are Required");
      return;
    }
    if (name.length < 3) {
      setNameError("Min charachter of name should be 3");

      return;
    }
    if (email.length < 3) {
      setEmailError("Min charachter of email should be 3");

      return;
    }
      localStorage.setItem("isLogin", "true");
      window.dispatchEvent(new Event("storage"));
    setIsLogIn(true);
    console.log(final);
    setEmail("");
    setName("");   
    navigate("/");
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

          <label>USERNAME:</label>
          <input
            style={{ margin: "8px", padding: "10px", width: "90%" }}
            type="text"
            placeholder="ENTER YOUR NAME"
            onChange={handleName}
            value={name}
            className="w-100"
          />

          <p style={{ color: "red" }}>{nameError}</p>
          <p style={{ color: "red" }}>{error}</p>

          <label>PASSWORD:</label>
          <input
            style={{ margin: "8px", padding: "10px", width: "90%" }}
            type="text"
            placeholder="ENTER YOUR EMAIL"
            onChange={handleEmail}
            value={email}
            className="w-100"
          />
          <p style={{ color: "red" }}>{error}</p>
          <p style={{ color: "red" }}>{emailError}</p>

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
