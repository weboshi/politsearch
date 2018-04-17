import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import Search from './Search'
import Navbar from '../Components/Navbar'
import './app.scss'

export default props =>
<BrowserRouter>
  <div className="app">
 
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/organization">Organizations</Link></li>
      <li><Link to="/search">Search</Link></li>
    </ul>

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/>
    <Route path="/search" component={Search}/>
  </div>
</BrowserRouter>
