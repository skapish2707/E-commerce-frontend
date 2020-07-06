import React from 'react';
import './toolbar.css'
import { Route, Link, BrowserRouter } from 'react-router-dom'

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open")
}

const toolbar = props => (
  <header className="toolbar">
    <div className="brand">
      <button onClick={openMenu}>
        &#9776;
      </button>
      <Link to="/">Nike</Link>
    </div>
    <div className="header-links">
      <a href="/">Men</a>
      <a href="/">Women</a>
      <a href="Sale.html">Sale</a>
    </div>
    <div>
      <input type="text" name="" placeholder="search" />

    </div>
    <div className="header-links">
      <a href="bookmark.html">Bookmark</a>
      <a href="cart.html">Cart</a>
    </div>

  </header>
)

export default toolbar;
