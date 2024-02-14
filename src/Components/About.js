import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
        <div className='about'>
            <div className='about-image'>
                <img src='./images/about.jpg'/>
            </div>

            <div className='about-intro'>
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Cras in faucibus quam. 
                    Vivamus sodales blandit quam a lobortis. 
                    Nunc sapien felis, vulputate in fermentum
                     tempor, aliquam quis massa. Praesent 
                     ullamcorper, ligula vitae porttitor 
                     sagittis, arcu enim luctus urna, sed 
                     elementum neque tellus vitae eros. Nam 
                     sed diam nulla.
                </p>
                <a href='#'>read more</a>
            </div>
        </div>
        <div className='shoes-attributes'>
                <h1>Footstep Footwear</h1>
                
                <div className='attributes'>
                    <p>Comfortability</p>
                    <p>Durability</p>
                    <p>Quality Materials</p>
                    <p>Stylish</p>
                    <p>Grip</p>
                </div>
            </div>
    </div>
  )
}

export default About