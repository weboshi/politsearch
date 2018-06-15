import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import { Breadcrumb } from 'react-bootstrap';
import './about-view.scss';
import { 
  Navbar2 
} from '../../Components/Navbar2';

export default props =>
<div>
  <Navbar2/>
<div className='container'>
{/* <div className='breadcrumb'>
<Breadcrumb bsStyle='default' style={{padding:'0', margin:'0'}}>
  <Breadcrumb.Item active>About</Breadcrumb.Item>
</Breadcrumb>
</div> */}
<div className='about'>
  <div className='p1'>
  <h1 className='h1-p2'>
    About Our Purpose
    {/* <hr/> */}
  </h1>
  <div className='p1-body'>
      At PolitSearch, we believe that voters should have all the information they need when voting.  
    By making information such as voting records and financial contributions easily accessible, voters will have a clearer picture of their candidates before casting their votes.
  </div>
  </div>
 
 
  
  <div className='p2'>
  <h1 className='h2-p2'>
   Where Does the Information Come From?
  </h1>
  <div className='p2-body'>
    Our information on financial contributions is pulled from Google Civic Api, ProPublica, and Open Secrets at the Center for Responsive Politics. You can visit them below:
   </div>
   <div className='opensecrets'>
   <a href={'https://www.opensecrets.org/'}><img src={require('./opensecrets_databy250x88.gif')} alt={'OpenSecrets.org'} href={'https://www.opensecrets.org/'} /></a>
   </div>
  </div>
</div>
</div>
</div>

//Campaign contributions from corporations or PAC's (Political Action Committees) offer insight into what industries or political factions may influence their decisionmaking. 
//Voting records show how representatives are casting their votes and whether they are aligned with their platforms.