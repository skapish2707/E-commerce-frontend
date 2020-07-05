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
      <a href="/" class="centre-nav">Women</a>
      <a href="/" class="centre-nav">Men</a>
      <a href="Sale.html" class="centre-nav">Sale</a>
      <a href="cart.html">Cart</a>
    </div>

  </header>
)

export default toolbar;
