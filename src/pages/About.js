import React from 'react'
import './About.css'
import Footer from '../components/Footer'
import aboutShoe from '../pages/about.webp'

const About = () => {
  return (
    <section className='about'>
      <div className='about-container'>
        <img src={aboutShoe}/>
        <div className='about-info'>
          <p>about</p>
          <h1>Footstep Footwear</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla lacus, volutpat sed ultrices a, feugiat non lacus. Proin eget faucibus lorem. Donec vel lobortis metus, et blandit felis. Sed a eros vitae purus dignissim auctor nec et odio. Etiam rhoncus molestie ipsum. Nam aliquam dolor a quam dapibus feugiat. Nullam mattis congue mauris, et volutpat orci semper in. Nulla facilisi. Morbi nulla sapien, feugiat id leo sit amet, interdum ornare mauris. Integer at lacinia felis. Suspendisse viverra tincidunt dictum. Pellentesque ornare dui a consequat consequat. Sed condimentum posuere fringilla.</p>
        </div>
      </div>

      <div className='about-grid-container'>
        <div className='grid-container'>
          <div className='grid-title'>
              <p>Why choose</p>
              <h1>Footstep Footwear</h1>
          </div>
          <div className='about-grid'>
          
            <div className='about-grid-1 grid'>
              <h1>Comfortability</h1>
              <p>We prioritize comfort in every shoe we offer.
              Experience unparalleled comfort with Footstep Footwear – where your comfort is our priority!
              </p>
            </div>

            <div className='about-grid-2 grid'>
              <h1>Durability</h1>
              <p>
                Footstep offer exceptional durability and value, keeping you comfortably on your feet for the long haul.
              </p>
            </div>

            <div className='about-grid-3 grid'>
              <h1>Quality Materials</h1>
              <p>At Footstep Footwear, we prioritize using high-quality materials to ensure our shoes offer the best in comfort, durability, and style.
                Footstep Footwear made from top-quality materials, ensuring you get the best in comfort, durability, and style with every pair.</p>
            </div>

            <div className='about-grid-4 grid'>
              <h1>Stylish</h1>
              <p>Step out in style with Footstep Footwear – where fashion meets function for the modern.</p>
            </div>

            <div className='about-grid-5 grid'>
              <h1>Grip</h1>
              <p>With Footstep Footwear, you can step confidently knowing your shoes are designed to keep you secure and stable on any terrain.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </section>
  )
}

export default About