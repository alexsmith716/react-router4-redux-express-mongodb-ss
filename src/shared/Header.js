import React from 'react';
import { Navbar, Nav, NavItem, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';

const Header = (props) => {

  return (
    <Navbar fluid>
      <Col sm={7}>
        <Navbar.Header>
          <Navbar.Brand>Issue Tracker</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/issues">
            <NavItem>Issues</NavItem>
          </LinkContainer>
          <LinkContainer to="/reports">
            <NavItem>Reports</NavItem>
          </LinkContainer>
        </Nav>
      </Col>
      <Col sm={5}>
        <Nav pullRight>
        </Nav>
      </Col>
    </Navbar>
  );
};

export default withRouter(Header);
