import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/">
        <p>DD</p>
      </NavLink>
      <nav className='flex'>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/projects">
          Projects
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar;