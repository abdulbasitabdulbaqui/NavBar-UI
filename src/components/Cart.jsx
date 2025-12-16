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
          <div style={{ backgroundColor: "silver" }}>
            <div
              className="d-flex justify-content-between m-3 p-2"
              style={{ backgroundColor: "silver" }}
            >
              <div>
                <p> From Saved Address</p>
              </div>
              <div>
                <Button className="btn btn-light">Enter Delivery Pincode </Button>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between p-4">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/m/4/u/-original-imahcrefyvh5dtsy.jpeg?q=90"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <p>
                  Samsung Galaxy F16 5G (Glam Green, 128 GB)
                  <br />4 GB RAM
                </p>
                <p>
                  Seller:mmkekin
                  <br /> ₹15,999 ₹12,499 21% Off
                  <br />+ ₹79 Protect Promise Fee
                </p>
              </div>
              <div>
                <p>Delivery by Fri Dec 19</p>
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
                  <Button className="btn btn-secondary">Save for later</Button>
                </div>
                <div>
                  <Button className="btn btn-danger">Remove</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 p-5" style={{ backgroundColor: "white" }}>
          <h3>Price details</h3>
          <hr />
          <div className="d-flex gap-5  ">
            <div>
              <p>Price (1 item)</p>
              <p>Discount</p>
              <p>Protect Promise Fee</p>
              <hr />
              <h4>Total Amount</h4>
            </div>
            <div>
              <p>₹15,999</p>
              <p style={{ color: "green" }}>− ₹3,500</p>
              <p> ₹79</p>
              <hr />

              <h4>₹12,578</h4>
            </div>
          </div>
        </div>
      </div>
      <div  style={{backgroundColor:"silver"}} >
      <footer className="d-flex justify-content-between m-3 p-1"  >
        <div>
          <p>Policies:Returns Policy | Terms of use | Security | Privacy</p>
        </div>
        <div>
          <p>©2007-2025 E-commerce.com</p>
        </div>
        <div>
          <p>Need help? Visit the Help Center or Contact Us</p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Cart;
