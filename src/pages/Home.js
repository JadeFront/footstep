import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Bestseller from '../components/Bestseller'
import Newarrival from '../components/Newarrival'
import Customerfeedback from '../components/Customerfeedback'
import Footer from '../components/Footer'

const Home = () => { 
  return (
    <section>
      <section className='home'>
        <div className='home-container'>
          <div className='home-intro'>
              <h1>
                Take a step with <span style={{color: '#B67352'}}>confidence</span>.
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras in faucibus quam. Vivamus sodales blandit quam a 
                lobortis. Nunc sapien felis, vulputate in fermentum tempor,
                aliquam quis massa.
              </p>

              <div className='home-btn'>
                <Link to='/men'>Shop men</Link>
                <Link to='/women'>Shop Women</Link>
              </div>
          </div>
        </div>
      </section>
      
      <Bestseller/>

      <div className='home-shop'>
        <div className='home-men'>
          <button className='home-shop-btn'>Shop Men</button>
        </div>

        <div className='home-women'>
          <button className='home-shop-btn'>Shop women</button>
        </div>
      </div>

      <Newarrival/>

      <div className='home-qoute'>
        <h1>Every great journey starts with a one step. </h1>
      </div>

      <Customerfeedback/>
      <Footer/>
    </section>
  )
}

export default Home