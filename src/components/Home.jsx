import React from "react";
import { Image } from "react-bootstrap";
import sinkImg from "../assets/sinkImg.jpg";
import mateBook from "../assets/mateBook.jpg";
import familyTree from "../assets/familyTree.jpg";
import whey from "../assets/whey.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [isLogin, setIsLogIn] = useState(
    localStorage.getItem("isLogin") === "true"
  );
  // Sample product data - replace with actual data from your API/state
  const featuredProducts = [
    {
      id: 1,
      name: "Wooden Bathroom Sink With Mirror",
      price: 99.99,
      image: sinkImg,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Huawei MateBook",
      price: 199.99,
      image: mateBook,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Family Tree Photo Frame",
      price: 79.99,
      image: familyTree,
      rating: 4.3,
    },
    { id: 4, name: "Protein Powder", price: 49.99, image: whey, rating: 4.6 },
  ];
  const navigate = useNavigate();

  const handleBtn = () => {
    if (isLogin) {
      navigate("/products");
    } else {
      navigate("/login");
    }
  };

  const handleCart = () => {
    if (isLogin) {
      navigate("/products");
    } else {
      navigate("/login");
    }
  };
  
  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-banner bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4">Welcome to Our Store</h1>
              <p className="lead mb-4">
                Discover amazing products at unbeatable prices. Shop the latest
                trends and enjoy free shipping on orders over $50.
              </p>
              <div className="d-flex gap-3">
                <button
                  onClick={handleBtn}
                  className="btn btn-light btn-lg px-4"
                >
                  Shop Now
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Featured Products</h2>
            <p className="text-muted">Check out our most popular items</p>
          </div>

          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0 product-card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="mb-2">
                      <span className="text-warning">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                      </span>
                      <span className="text-muted ms-2">
                        ({product.rating})
                      </span>
                    </div>
                    <p className="card-text fs-4 fw-bold text-primary mb-3">
                      ${product.price}
                    </p>
                    <button
                      onClick={handleCart}
                      className="btn btn-primary mt-auto"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button
              onClick={handleBtn}
              className="btn btn-outline-primary btn-lg"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo-section bg-light py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="p-4">
                <i className="bi bi-truck fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Free Shipping</h5>
                <p className="text-muted">On orders over $50</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4">
                <i className="bi bi-arrow-repeat fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Easy Returns</h5>
                <p className="text-muted">30-day return policy</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4">
                <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Secure Payment</h5>
                <p className="text-muted">100% secure transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .min-vh-50 {
          min-height: 50vh;
        }
        .product-card {
          transition: transform 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default Home;
