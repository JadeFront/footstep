import React, { useState } from 'react'
import './Men.css'
import '../components/Bestseller.css'
import Footer from '../components/Footer'

const Men = () => {
  const men = [
    {
      img: '../images/ms-1.webp',
      name: 'Thuram Low-Top Sneakers',
      type: 'Sneakers',
      price: `₱ 5295.00`
    },
    {
      img: '../images/ms-2.webp',
      name: 'Morrisey Low-Top Sneakers',
      type: 'Sneakers',
      price: `₱ 3995.00`
    },
    {
      img: '../images/ms-3.webp',
      name: 'Omono Low-Top Sneakers',
      type: 'Sneakers',
      price: `₱ 4995.00`
    },
    {
      img: '../images/ms-4.webp',
      name: 'Copper Slip-On Sneakers',
      type: 'Sneakers',
      price: `₱ 4995.00`
    },
    {
      img: '../images/ms-5.webp',
      name: 'Zev Jogger Sneakers',
      type: 'Sneakers',
      price: `₱ 5495.00`
    },
    {
      img: '../images/ms-6.webp',
      name: 'Inderpaul Slide Sandals',
      type: 'Sandals',
      price: `₱ 2195.00`
    },
    {
      img: '../images/ms-7.webp',
      name: 'Kennebunk Slide Sandals',
      type: 'Sandals',
      price: `₱ 4895.00`
    },
    {
      img: '../images/ms-8.webp',
      name: 'Canal Fishermam Sandals',
      type: 'Sandals',
      price: `₱ 4695.00`
    },
    {
      img: '../images/ms-9.webp',
      name: 'Hideo Slide Sandals',
      type: 'Sandals',
      price: `₱ 2695.00`
    },
    {
      img: '../images/ms-10.webp',
      name: 'Sardof Espadrilles',
      type: 'Casual Shoes',
      price: `₱ 4495.00`
    },
    {
      img: '../images/ms-11.webp',
      name: 'Orlovoflexx Loafers',
      type: 'Loafers',
      price: `₱ 6995.00`
    },
    {
      img: '../images/ms-13.webp',
      name: 'Idris Loafers',
      type: 'Loafers',
      price: `₱ 7995.00`
    },
    {
      img: '../images/ms-14.webp',
      name: 'Holtlanflex Loafers',
      type: 'Loafers',
      price: `₱ 7495.00`
    },
    {
      img: '../images/ms-15.webp',
      name: 'Journey Loafers',
      type: 'Loafers',
      price: `₱ 7295.00`
    },
    {
      img: '../images/ms-16.webp',
      name: 'Biondi-R Ankle Boots',
      type: 'Boots',
      price: `₱ 6200.00`
    },
    {
      img: '../images/ms-17.webp',
      name: 'Melrick Oxford Shoes',
      type: 'Casual Shoes',
      price: `₱ 5295.00`
    },
  ]

  const [sortedMen, setSortedMen] = useState(men)
  const [sortType, setSortType] = useState('All')

  const handleSort = (type) => {
    setSortType(type)
    if (type === 'All') {
      setSortedMen(men)
    } else {
      const sorted = men.filter(mn => mn.type === type)
      setSortedMen(sorted)
    }
  }

  return (
    <section className='men'>
      <div className='men-intro'>
        <h1>Footstep Footwear's Men's Collection</h1>
        <p>Our range of men's shoes is designed to cater to every aspect of your lifestyle, from professional attire to casual wear. Crafted with premium materials and meticulous attention to detail, our shoes offer unparalleled comfort, durability, and grip. Whether you’re looking for sleek dress shoes, comfortable sneakers, or rugged boots, Footstep Footwear has the perfect pair to elevate your style and keep you moving confidently. Explore our collection and find your perfect fit today!</p>
      </div>

      <div className='sort-container'>
        <div className='sort-options'>
          <button onClick={() => handleSort('All')}>All</button>
          <button onClick={() => handleSort('Sneakers')}>Sneakers</button>
          <button onClick={() => handleSort('Sandals')}>Sandals</button>
          <button onClick={() => handleSort('Casual Shoes')}>Casual Shoes</button>
          <button onClick={() => handleSort('Loafers')}>Loafers</button>
          <button onClick={() => handleSort('Boots')}>Boots</button>
        </div>

        <div className='seller-card' style={{ margin: '5rem 0' }}>
          {sortedMen.map((mn, index) => (
            <div className='card-container' key={index}>
              <div className='card-image'>
                <img src={mn.img} alt={mn.name} />
              </div>
              <h4 className='card-title'>{mn.name}</h4>
              <p className='card-type'>{mn.type}</p>
              <p className='card-price'>{mn.price}</p> 
              <button className='card-button'>Order</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default Men
