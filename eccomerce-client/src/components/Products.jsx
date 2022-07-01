import { useState, useEffect } from "react";
import styled from "styled-components";
import { Product } from "./Product";
import axios from "axios";

export const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category ? `http://localhost:5000/api/products?category=${category}` : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "asc") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((product) => <Product product={product} key={product._id} />)
        : products.slice(0, 8).map((product) => <Product product={product} key={product._id} />)}
    </Container>
  );
};
const Container = styled.div`
  padding: 20px;
display: flex;
flex-wrap: wrap;
`;
