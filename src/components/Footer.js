import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaSquareXTwitter, FaFacebook, FaSquareInstagram, FaSquareThreads, FaTiktok, FaSquarePinterest } from "react-icons/fa6";
import useScrollToTop from './UseScrollToTop';

const Footer = () => {
  useScrollToTop();

  return (
    <footer>
        <div className='footer-container'>
            <div className='footer-social'>
                <a href=''><FaFacebook /></a>
                <a href=''><FaSquareXTwitter /></a>
                <a href=''><FaSquareInstagram /></a>
                <a href=''><FaSquareThreads /></a>
                <a href=''><FaTiktok /></a>
                <a href=''><FaSquarePinterest /></a>
            </div>
            
            <div className='footer-content'>
                <div className='footer-footstep'>
                    <h2>Footstep</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien maximus, ornare nibh ut, rhoncus ipsum. Praesent scelerisque placerat neque nec scelerisque</p>
                </div>

                <div className='footer-shop'>
                    <h2>Shop</h2>
                    <Link to='/men'>Men</Link>
                    <Link to='/women'>Women</Link>
                    <Link to='/sale'>Sale</Link>
                </div>

                <div className='footer-about'>
                    <h2>About</h2>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>Our Story</Link>
                </div>

                <div className='footer-help'>
                    <h2>Customer Care</h2>
                    <Link to='/size'>Size Chart</Link>
                    <a to=''>Contact</a>
                </div>
            </div>

            <div className='footer-copyright'>
                <p>	&#169; 2024 Footstep Footwear, all the shoes in this project page are from&#32;<a href='https://aldoshoes.com.ph/' target='blank'>ALDO Philippines</a></p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
