import React from 'react'

const Home = () => {
  // Sample product data - replace with actual data from your API/state
  const featuredProducts = [
    { id: 1, name: 'Premium Headphones', price: 99.99, image: 'https://via.placeholder.com/300x300?text=Headphones', rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/300x300?text=Smart+Watch', rating: 4.8 },
    { id: 3, name: 'Wireless Speaker', price: 79.99, image: 'https://via.placeholder.com/300x300?text=Speaker', rating: 4.3 },
    { id: 4, name: 'Laptop Stand', price: 49.99, image: 'https://via.placeholder.com/300x300?text=Laptop+Stand', rating: 4.6 },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-banner bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4">Welcome to Our Store</h1>
              <p className="lead mb-4">
                Discover amazing products at unbeatable prices. Shop the latest trends and enjoy free shipping on orders over $50.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-light btn-lg px-4">Shop Now</button>
                <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img 
                src="https://via.placeholder.com/600x400?text=Hero+Image" 
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
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="mb-2">
                      <span className="text-warning">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                      </span>
                      <span className="text-muted ms-2">({product.rating})</span>
                    </div>
                    <p className="card-text fs-4 fw-bold text-primary mb-3">
                      ${product.price}
                    </p>
                    <button className="btn btn-primary mt-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button className="btn btn-outline-primary btn-lg">View All Products</button>
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
  )
}

export default Home