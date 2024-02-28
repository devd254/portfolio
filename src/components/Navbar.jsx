import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/">
        <p className='bg-cyan-950 rounded-full h-15 w-15 text-center p-2 text-slate-200 border-4 border-rose-200'>
          DD
        </p>
      </NavLink>
      <nav className='flex space-x-2'>
        <NavLink to="/about">
          <div className='bg-cyan-950 rounded-md h-9 w-16 text-slate-200 text-center border-4 border-rose-200'>
            About
          </div>
        </NavLink>
        <NavLink to="/projects">
          <div className='bg-cyan-950 rounded-md h-9 w-20 text-slate-200 text-center border-4 border-rose-200'>
            Projects
          </div>
        </NavLink>
        <NavLink to="/contact">
          <div className='bg-cyan-950 rounded-md h-9 w-20 text-slate-200 text-center border-4 border-rose-200'>
            Contact
          </div>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar;