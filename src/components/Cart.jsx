import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

const Cart = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cardItems")) || []
  );

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  console.log("products", products);

  const handleDelete = (id, item) => {
    toast.error(`${item.title} is Deleted`);
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(dt);
    localStorage.setItem("cardItems", JSON.stringify(updatedProducts));
  };

  return (
    <>
      {products.map((item, index) => (
        <div key={index} className="container-fluid p-4 bg-light">
          <div className="row">
            <div className="col-md-8">
              <div className="bg-white border rounded p-4">
                <div className="d-flex align-items-start gap-4 mb-4">
                  <img
                    src={item?.images[0]}
                    className="img-fluid"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div>
                    <p className="fw-bold fs-5 mb-1">{item?.title}</p>
                    <p className="fw-bold fs-5 mb-0">${item?.price}</p>
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
                  <Button
                    onClick={() => handleDelete(item.id, item)}
                    className="btn btn-danger"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
