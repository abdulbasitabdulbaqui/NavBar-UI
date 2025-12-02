import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchParams, setSearchParams] = useSearchParams();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
      setData(res.products);
      setIsLoading(false);
      return res.products;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setCurrentPage(pagenum);
  }, [pagenum]);
  useEffect(() => {
    fetchdata();
  }, []);
  if (isLoading) {
    return (
      <p>
        <Loader />
      </p>
    );
  }
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Product List:</h1>

      <div className="row">
        {currentItems.map((res) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-4 "
            key={res.id}
          >
            <Card className="liftCard" style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                src={res.images[0]}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{`Title: ${res.title}`}</Card.Title>
                <Card.Text>{`Description: ${res.description}`}</Card.Text>
                <Card.Text>{`Price: ${res.price}`}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
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
            className="Success mb-2 btn "
            variant="success"
            onClick={() => handlePage(currentPage - 1)}
          >
            PREV
          </Button>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              as="button"
              key={index}
              onClick={() => handlePage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
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
