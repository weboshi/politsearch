import React from 'react';
import './home-view.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';

export default props =>

<div className='home'>
  <h1>
    Welcome to My Local Politician.
  </h1>
  <div>
    Type in your state abbreviation to receive information on your representatives. 
  </div>
</div>

var apiUrl = 'http://www.opensecrets.org/api/?method=getLegislators&id='

