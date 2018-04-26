import React from 'react';
import './about-view.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';

export default props =>

<div className='about'>
  

  
  <div className='p1'>
  <h1>
    About Our Purpose
  </h1>
  <div className='p1-body'>
      At PolitSearch, we believe that voters should have all the information they need when going to the polls.  
    By making information such as voting records and financial contributions easily accessible, voters will have a clearer picture of their candidates before casting their votes.
  </div>
  </div>
 
 
  
  <div className='p2'>
  <h1 className='h2-p2'>
   Where Does the Information Come From?
  </h1>
  <div className='p2-body'>
    Our information on financial contributions is pulled from the Sunshine Foundation, which gathers governmentally mandated public information regarding financial disclosures.
   Representatives' voting records are pulled from the same database, which is also publically available information.  
   </div>
  </div>
</div>

//Campaign contributions from corporations or PAC's (Political Action Committees) offer insight into what industries or political factions may influence their decisionmaking. 
//Voting records show how representatives are casting their votes and whether they are aligned with their platforms.