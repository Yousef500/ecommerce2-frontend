import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className='footer'>
      <Row>
        <Col className='text-center'>Copyright &copy; ProShop</Col>
      </Row>
    </Container>
  );
}

export default Footer;
