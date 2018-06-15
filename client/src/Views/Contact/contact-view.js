import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import './contact-view.scss';
import { FormExample, NameForm, EmailForm } from '../../Components/FormExample';
import { Button } from 'react-bootstrap'
import { 
  Navbar2 
} from '../../Components/Navbar2';

export default props =>
<div>
  <Navbar2/>
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
    <div className='name-div'>
    <NameForm/>
    </div>
    <div className='email-div'>
     <EmailForm/>
    </div>
    <div className='email-div'>
    <FormExample/>
    </div>
    <Button type="submit">Submit</Button>
    </div>
  </div>
</div>
</div>