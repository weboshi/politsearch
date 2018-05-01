import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import About from './About'
import Contact from'./Contact'
import { Navbar } from '../Components/Navbar'
import './app.scss'
import { Footer } from '../Components/Footer'

export default props =>
<BrowserRouter>
  <div className="app">
 <Navbar />
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  <Footer />
  </div>
</BrowserRouter>
