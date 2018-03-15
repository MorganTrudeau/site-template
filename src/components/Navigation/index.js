import React from 'react'
import Link from 'gatsby-link'

var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');

const Navigation = () => (
  <Navbar fluid inverse collapseOnSelect className={{ position:'relative' }}>
    <Navbar.Header>
      <Navbar.Brand>
        <h1>Company</h1>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/About">
          About
        </NavItem>
        <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
