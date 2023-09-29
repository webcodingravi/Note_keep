import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/keep-logo.png';

function Header() {
  return (
    <>
    <section className="header">
      <Container>
        <Row>
          <Col>
          <img src={Logo} alt="logo" />
          </Col>
        </Row>
      </Container>
    </section>
       
    </>
  )
}

export default Header;
