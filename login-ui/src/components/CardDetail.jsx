import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data); // <-- data set kiya
    };

    fetchData();
  }, [id]);
  if (!product) return <h2>Loading</h2>;
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.images} width={250}/>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
  );
};

export default CardDetail;
