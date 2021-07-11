import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((prod) => (
          <Col key={prod._id} sm={12} md={6} xl={3} className="mb-3">
            <Product product={prod} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
