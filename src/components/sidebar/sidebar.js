import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open")
}

const sidebar = props => (
  <BrowserRouter>
    <aside className="sidebar">
      <button className="close-button" onClick={closeMenu}>x</button>
      <h3>Shopping Categories</h3>
      <ul>
        <li><a href="index.html">Women</a></li>
        <li><a href="index.html">Men</a></li>
      </ul>
    </aside>
  </BrowserRouter>
)

export default sidebar;