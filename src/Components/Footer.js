import React from 'react'
import './Footer.css'
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footer'>
            <div className='footer-social'>
                <h1>follow us on our socials.</h1>
                <div className='social'>
                    <p><FaFacebookF /></p>
                    <p><FaInstagram /></p>
                    <p><FaXTwitter /></p>
                    <p><FaThreads /></p>
                    <p><FaPinterestP /></p>
                </div>
            </div>
            
            <div className='footer-content'>
                <div className='footer-intro'>
                    <h1>Footstep</h1>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing 
                        elit. Sed et sapien maximus, 
                        ornare nibh ut, rhoncus ipsum.
                         Praesent scelerisque 
                         placerat neque nec scelerisque.
                    </p>
                </div>
                <div className='footer-shop'>
                    <h1>Shop</h1>
                    <a href='#'>Shop Men</a>
                    <a href='#'>Shop Women</a>
                    <a href='#'>Lookbook</a>
                    <a href='#'>Gift Card</a>
                    <a href='#'>Sale</a>
                </div>
                <div className='footer-about'>
                    <h1>About</h1>
                    <a href='#'>Our Story</a>
                    <a href='#'>Our Maerials</a>
                    <a href='#'>Our Value</a>
                    <a href='#'>Sustainability</a>
                    <a href='#'>Manufacture</a>
                </div>
                <div className='footer-help'>
                    <h1>Need Help?</h1>
                    <a href='#'>FAQ's</a>
                    <a href='#'>Shipping & Return</a>
                    <a href='#'>Shoe Care</a>
                    <a href='#'>Size Cart</a>
                    <a href='#'>Contact Us</a>
                </div>
            </div>
            <div className='footer-credit'>
                <p>&#169;	2024 Footstep Footwear, all 
                    the shoes in this project ecommerce 
                    page are from&#32;	
                    <a href='https://aldoshoes.com.ph/' target='blank'>
                    &#32;	Aldoshoes.com.ph
                    </a>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer