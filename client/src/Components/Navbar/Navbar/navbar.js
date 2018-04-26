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
    <Link to="/">PolitSearch</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
      <NavItem eventKey={1} componentClass={Link} to="/">
      Home
      </NavItem>
      <NavItem eventKey={2} componentClass={Link} to="/about">
      About
      </NavItem>
      <NavItem eventKey={3} componentClass={Link} to="/">
      Contact
      </NavItem>
      </Nav>
</Navbar>

    )
  }
  }

  // export default withRouter(searchState);