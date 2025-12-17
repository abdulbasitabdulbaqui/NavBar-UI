import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-md-8">
          <div>
            <div className="d-flex justify-content-right p-4 gap-5">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/m/4/u/-original-imahcrefyvh5dtsy.jpeg?q=90"
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
              <div>
                <p style={{ fontSize: "30px", fontWeight: "bolder" }}>
                  Samsung Galaxy F16 5G (Glam Green, 128 GB)
                  <br />4 GB RAM
                </p>
                <br />
                <div className="d-flex gap-2">
                  <p style={{ fontWeight: "bolder", fontSize: "18px" }}>
                    ₹15,999
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-start p-4 gap-4  ">
              <div>
                <Button onClick={handleDecrement}>-</Button>
              </div>
              <div className="m-2">{counter}</div>
              <div>
                <Button onClick={handleIncrement}>+</Button>
              </div>
              <div className="d-flex gap-3 ">
               
                <div>
                  <Button className="btn btn-danger">Remove</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Cart;
