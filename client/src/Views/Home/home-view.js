import React from 'react';
import { Route } from 'react-router-dom';
import {
  Search
} from '../../Components/Search';
import { 
  Paper 
} from '../../Components/Paper';
import './home-view.scss';

export default ({ match }) =>
<div className="main">
  <div className='welcome'>
  <h1> Welcome! <br/> Type in your state to get information about your local representatives. </h1>
  </div>
  <div className='search'>
    <div className="searchbar">
    <Search/>
    </div>
  </div>
</div>
