import React from 'react';
import { Route } from 'react-router-dom';
import {
  Search
} from '../../Components/Search';
import { 
  Paper 
} from '../../Components/Paper';
import './home-view.scss';
import { 
  Navbar2 
} from '../../Components/Navbar2';

export default ({ match }) =>
<div>
<Navbar2/>
<div className="main">
  <div className='welcome'>
  <div className='homemessage'> <message1 style={{fontSize:'32px'}}>Welcome to PolitSearch!</message1> <br/> <message2 style={{fontSize:'25px'}}> Type in your state to get information about your local representatives.</message2> </div>
  </div>
  <div className='search'>
    <div className="searchbar">
    <Search/>
    </div>
  </div>
</div>
</div>
