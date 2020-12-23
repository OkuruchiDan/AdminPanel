import React from "react";
import { Nav, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const TabsContainer = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Nav variant="pills" defaultActiveKey="/panel">
          <Nav.Item>
            <Nav.Link href="/panel">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="products">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="suppliers">Suppliers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="settings">Settings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="errors">Errors</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
    </Container>
  );
};

export { TabsContainer };
