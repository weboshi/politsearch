import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.scss';



export default class navbar extends Component {

  render() {
    return (
<Navbar default>
<Navbar.Header>
    <Navbar.Brand pullLeft>
    <Link href ='/' to="/">PolitSearch</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight >
    <NavItem eventKey={1} componentClass={Link} href='/' to="/">
      Home
      </NavItem>
      <NavItem eventKey={2} componentClass={Link} href='/about' to="/about">
      About
      </NavItem>
      <NavItem eventKey={3} componentClass={Link} href='/contact' to="/contact">
      Contact
      </NavItem>
      </Nav>
</Navbar>

    )
  }
  }

  // export default withRouter(searchState);