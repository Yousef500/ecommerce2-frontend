import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(match.params.id)
      const { data } = await axios.get(`/api/products/${match.params.id}/`);
      
      setProduct(data);
    };

    fetchProduct();
  }, [match.params.id]);


  return (
    <div>
      <Link to="/" className="btn btn-outline-warning my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color="#FEEB00"
              />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: <strong>${product.price}</strong>
            </ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col
                    className={
                      product.countInStock > 0
                        ? "text-success"
                        : "text-secondary"
                    }
                  >
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Button
                    variant="outline-success"
                    disabled={product.countInStock <= 0}
                  >
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
