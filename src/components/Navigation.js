import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div class="sideNavigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/draw">Draw Straw!</NavLink>
      <NavLink to="/status">Game Status</NavLink>
      <NavLink to="/results">Results</NavLink>
    </div>
  )
}

export default Navigation
