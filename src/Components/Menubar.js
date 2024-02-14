import React from 'react'
import './Menubar.css'
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";


const Menubar = () => {
  return (
    <nav className='nav-container'>
        <div className='navbar'>
        <div className='nav-title'>
            <h1>Footstep</h1>
        </div>

        <input type='checkbox' id='check'/>
        <label htmlFor='check' id='open'><FaBars /></label>
            <ul>
                <li><a href='#'>men</a></li>
                <li><a href='#'>women</a></li>
                <li><a href='#'>collection</a></li>
                <li><a href='#'>lookbook</a></li>
                <li><a href='#'>sale</a></li>
            </ul>
        </div>
        

        <div className='nav-account'>
        <a href='#'><FaShoppingCart /></a>
        <a href='#'><FaUser /></a>
        </div>
    </nav>
  )
}

export default Menubar