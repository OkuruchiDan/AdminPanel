import React from "react";
import {Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const TabsContainer = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Nav variant="pills" defaultActiveKey="/panel/dashboard">
          <Nav.Item>
              <Nav.Link eventKey="/dashboard" as={Link} to="/panel/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="products" as={Link} to="/panel/products">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="suppliers" as={Link} to="/panel/suppliers">Suppliers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="settings" as={Link} to="/panel/settings">Settings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="errors" as={Link} to="/panel/errors">Errors</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
    </Container>
  );
};

export { TabsContainer };
