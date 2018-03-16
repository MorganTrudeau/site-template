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
        <NavItem>
          <Link 
          className="nav-link" 
          activeStyle={{ color:'white',textDecoration:'none' }} 
          exact to="/">
            Home
        </Link>
        </NavItem>
        <NavItem>
          <Link  
          className="nav-link" 
          activeStyle={{ color:'white',textDecoration:'none' }} 
          to="/About">
            About
          </Link>
        </NavItem>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <MenuItem>Action</MenuItem>
          <MenuItem>Another action</MenuItem>
          <MenuItem>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem>Separated link</MenuItem>
        </NavDropdown>
        <NavItem>
          <Link 
          className="nav-link" 
          activeStyle={{ color:'white',textDecoration:'none' }} 
          to="/Contact">
            Contact
          </Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
