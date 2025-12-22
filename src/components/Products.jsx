import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import "./products.css";
import { toast } from "react-toastify";

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState("");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const products = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const navigate = useNavigate();
  const pagenum = Number(searchParams.get("page")) || 1;
  const handlePage = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };
  const handleBtn = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const fetchdata = async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://dummyjson.com/products?limit=0");
      const res = await data.json();
      console.log(res);
      setData(res?.products);
      setIsLoading(false);
    } catch (error) {
      setError("SOMETHING WENT WRONGE");
    }
  };
  const   handleCart = (product) => {
    // navigate("/cart");
    // console.log(product);
    toast.success(`${product.title} is Added`, {
      position: "top-right",
    });
    const prod = product;
    const cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
    localStorage.setItem("cardItems", JSON.stringify([...cardItems, prod]));
  };

  useEffect(() => {
    setCurrentPage(pagenum);
  }, [pagenum]);
  useEffect(() => {
    fetchdata();
  }, []);
  if (error)
    return (
      <h2 style={{ color: "red" }} className="load">
        Error: {error}
      </h2>
    );
  if (isLoading) {
    return <Loader />;
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // current group ka index
  const groupIndex = Math.floor((currentPage - 1) / 5);

  // slice me sirf 5 button ek group ke
  const visibleButtons = pageNumbers.slice(groupIndex * 5, groupIndex * 5 + 5);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Product List:</h1>

      <div className="row">
        {products.map((product) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-4 "
            key={product.id}
          >
            <Card
              className="liftCard"
              style={{ height: "100%", cursor: "pointer" }}
            >
              <Card.Img
                variant="top"
                src={product?.images[0]}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body onClick={() => navigate(`/products/${product.id}`)}>
                <Card.Title>{`Title: ${product?.title}`}</Card.Title>
                <Card.Text>{`Description: ${product?.description}`}</Card.Text>
                <Card.Text>{`Price: ${product?.price}`}</Card.Text>
                <span className="text-warning">
                  {"★".repeat(Math.floor(product?.rating))}
                  {"☆".repeat(5 - Math.floor(product?.rating))}
                </span>
                <span className="text-muted ms-2">({product.rating})</span>
                <br />
              </Card.Body>
              <Button onClick={() => handleCart({...product, quantity:1})} variant="primary">
                Add to Cart
              </Button>
            </Card>
          </div>
        ))}
        <div
          className="my-3 d-flex flex-wrap justify-content-center gap-2"
          style={{ maxWidth: "100%" }}
        >
          <Button
            as="button"
            disabled={currentPage === 1}
            className="Success btn"
            variant="success"
            onClick={() => handlePage(currentPage - 1)}
          >
            PREV
          </Button>

          {visibleButtons.map((num) => (
            <Button
              key={num}
              onClick={() => handlePage(num)}
              className={currentPage === num ? "active" : ""}
            >
              {num}
            </Button>
          ))}

          <Button
            as="button"
            disabled={currentPage === totalPages}
            className="Danger btn"
            variant="danger"
            onClick={() => handlePage(currentPage + 1)}
          >
            NEXT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
