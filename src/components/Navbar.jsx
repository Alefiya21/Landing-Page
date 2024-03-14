import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="mx-auto flex flex-row items-center justify-between flex-wrap h-13 bg-gradient-to-r from-cyan-500 to-blue-5000 p-6 h-20">
          <h1 className="text-4xl font-bold mb-20">Welcome to <span className='text-fuchsia-700'>"Journalism Unveiled"</span></h1>
          <div className='flex flex-row gap-4 mb-20'>
          <Link to='/'>Home</Link>
          <Link to='/About'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
          </div>
    </div>
  )
}

export default Navbar
