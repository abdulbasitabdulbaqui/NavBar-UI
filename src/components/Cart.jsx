import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

const Cart = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cardItems")) || []
  );

  const handleIncrement = (id) => {
    const updateProducts = products.map((item) => {
      if (item?.id === id) {
        item.quantity = item.quantity + 1;
      }
      return item;
    });
    localStorage.setItem("cards", JSON.stringify(updateProducts));
    setCounter(updateProducts);
  };

  const handleDecrement = (id) => {
    const updatedProducts = products.map((item) => {
      if (item?.id === id && item?.quantity > 1) {
        item.quantity = item.qunatity - 1;
      }
      return item;
    });
    localStorage.setItem("cards", JSON.stringify(updatedProducts));
    setCounter(updatedProducts);
  };
  console.log("products", products);

  const handleDelete = (id, item) => {
    toast.error(`${item?.title} is Deleted`);
    const updatedProducts = products.filter((item) => item?.id !== id);
    setProducts(updatedProducts);
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
                    <Button onClick={() => handleDecrement(item.id)}>-</Button>
                    <div
                      className="border px-3 py-1 fw-bold"
                      style={{ minWidth: "40px", textAlign: "center" }}
                    >
                      {item.quantity}
                    </div>
                    <Button onClick={() => handleIncrement(item.id)}>+</Button>
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
