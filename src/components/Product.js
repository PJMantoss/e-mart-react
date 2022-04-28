import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    }; 

    getProduct();
  }, []);

  return (
    <div>Product</div>
  )
}

export default Product;