import React from 'react'

import './Navbar.css'

const Navbar = props => (
  <header className="navBar">
   <nav className="navBar__navigation">
    <div></div>
    <div><a href="/">THE LOGO</a></div>
    <div>
      <ul>
        <li>products</li>
        <li>users</li>
      </ul>
    </div>
   </nav>
  </header>
)

export default Navbar
