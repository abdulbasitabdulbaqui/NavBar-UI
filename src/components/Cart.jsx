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
    <div className="container-fluid p-4 bg-light">
  <div className="row">
    {/* LEFT SIDE CART */}
    <div className="col-md-8">
      <div className="bg-white border rounded p-4">

        {/* Product Info */}
        <div className="d-flex align-items-start gap-4 mb-4">
          {/* Image */}
          <img
            src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/m/4/u/-original-imahcrefyvh5dtsy.jpeg?q=90"
            className="img-fluid"
            style={{ height: "220px", objectFit: "cover" }}
          />

          {/* Details */}
          <div>
            <p className="fw-bold fs-5 mb-1">
              Samsung Galaxy F16 5G (Glam Green, 128 GB)
            </p>
            <p className="text-muted mb-2">4 GB RAM</p>

            <p className="fw-bold fs-5 mb-0">₹15,999</p>
          </div>
        </div>

        {/* Quantity + Remove */}
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <Button onClick={handleDecrement}>-</Button>

            <div
              className="border px-3 py-1 fw-bold"
              style={{ minWidth: "40px", textAlign: "center" }}
            >
              {counter}
            </div>

            <Button onClick={handleIncrement}>+</Button>
          </div>

          <Button className="btn btn-danger">
            Remove
          </Button>
        </div>

      </div>
    </div>
  </div>
</div>

  );
};

export default Cart;
