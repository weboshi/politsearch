import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import {Navbar} from 'react-bootstrap';



export default class navbar extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
  
  
  render() {
    return (
<Navbar/>
    )
  }
  }

  // export default withRouter(searchState);