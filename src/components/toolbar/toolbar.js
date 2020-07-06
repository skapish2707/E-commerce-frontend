import React from 'react';
import './toolbar.css'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import nike from '../../nike.png'


const toolbar = props => (
  <header className="toolbar">
    <div className="brand">
      <Link to="/"><img src={nike} alt="Nike"></img></Link>
    </div>
    <div className="header-links">
      <a href="/">Men</a>
      <a href="/">Women</a>
      <a href="Sale.html">Sale</a>
    </div>
    <div>
      <div class="search">
        <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
    <div className="header-links">
      <a href="bookmark.html">Bookmark</a>
      <a href="cart.html">Cart</a>
    </div>

  </header>
)

export default toolbar;
