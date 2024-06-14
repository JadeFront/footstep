import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {  FaUserAlt, FaBars } from "react-icons/fa";
import { IoFootstepsSharp } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [openClose, setOpenClose] = useState(false);

  const navButton = () => {
    setOpenClose(!openClose);
  }

  const closeNav = () => {
    setOpenClose(false);
  }

  return ( 
    <nav>
      <div className='nav-container'>
        <div className='nav-title'>
          <h1>Footstep <p> <IoFootstepsSharp /> </p></h1>
        </div>

        <div className='nav-option'>
          <div className='open-btn'>   
            <button onClick={navButton}><FaBars /></button>
          </div>

          <div className={`navlinks ${openClose ? "active" : ""}`}>
            <div className='close-btn'>
              <button onClick={navButton}><GrClose /></button>
            </div>
            <ul>
              <li>
                <Link to='/' onClick={closeNav}>Home</Link>
              </li>
              <li>
                <Link to='/about' onClick={closeNav}>About</Link>
              </li>
              <li>
                <Link to='/men' onClick={closeNav}>Men</Link>
              </li>
              <li>
                <Link to='/women' onClick={closeNav}>Women</Link>
              </li>
              <li>
                <Link to='/sale' onClick={closeNav}>Sale</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='nav-user'>
        <a className='user' href='#'>User <FaUserAlt /></a>
      </div>
    </nav>
  )
}

export default Navbar
