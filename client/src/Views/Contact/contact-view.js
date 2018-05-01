import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import './contact-view.scss';

export default props =>

<div className='contact'>
  <div className='p1'>
  <h1 className='h1-contact'>
    Contact
  </h1>
    <div className='p1-body'>
      Have any suggestions, ideas or recommendations for other civic minded projects? 
      All input is appreciated! Feel free to contact me through email or type a message below.
    </div>
    <div className='p1-links'>
    <a href="#" class="fa fa-twitter"></a>
    <a href="#" class="fa fa-linkedin"></a>
    <a href="#" class="fa fa-google"></a>
    </div>
    <div className='message-box'>
    <MuiThemeProvider>
    <TextField/>
    </MuiThemeProvider>
    </div>
  </div>
</div>