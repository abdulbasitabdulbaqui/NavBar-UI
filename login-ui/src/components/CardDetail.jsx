import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      setError("SOMETHING WENT WRONGE");
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [id]);
  if (error)
    return (
      <h2 style={{ color: "red" }} className="load">
        Error: {error}
      </h2>
    );
  if (!product) return <h2 className="load">LOADING.....</h2>;

  return (
    <div>
      <h2>{product?.title}</h2>
      <img src={product?.images?.[0]} width={250} />
      <p>{product?.description}</p>
      <h3>{product?.price}</h3>
    </div>
  );
};

export default CardDetail;
