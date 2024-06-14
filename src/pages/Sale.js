import React from 'react'
import './Sale.css'
import Footer from '../components/Footer'

const Sale = () => {
  return (
    <section className='sale'>
      <div className='sale-container'>
        <h1>Currently, there are no sales available!</h1>
        <p>Please check back soon for our upcoming promotions and special offers!</p>
      </div>
      
      <Footer/>
    </section>
  )
}

export default Sale