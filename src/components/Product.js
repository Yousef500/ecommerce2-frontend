import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-1 rounded h-100">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title className='title'>{product.name}</Card.Title>
        </LinkContainer>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color="#FEEB00"
          />
        </Card.Text>

        <Card.Text as="h3" className="mt-2 mb-2">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
