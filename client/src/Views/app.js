import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import Search from './Search'
import { Navbar } from '../Components/Navbar'
import './app.scss'
import { Footer } from '../Components/Footer'

export default props =>
<BrowserRouter>
  <div className="app">
 <Navbar />

    <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/>
    <Route path="/search" component={Search}/>
    <Footer />
  </div>
</BrowserRouter>
