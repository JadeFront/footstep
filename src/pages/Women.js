import React, { useState } from 'react'
import './Men.css'
import '../components/Bestseller.css'
import Footer from '../components/Footer'

const Women = () => {
  const men = [
    {
      img: '../images/ws-1.webp',
      name: 'Palazzi Low-Top Sneakers',
      type: 'Sneakers',
      price: `₱ 4295.00`
    },
    {
      img: '../images/ws-2.webp',
      name: 'Allday Low-Top Sneakers',
      type: 'Sneakers',
      price: `₱ 4495.00`
    },
    {
      img: '../images/ws-3.webp',
      name: 'Quiltyn Jogger Sneakers',
      type: 'Sneakers',
      price: `₱ 4995.00`
    },
    {
      img: '../images/ws-4.webp',
      name: 'Iconistep Jogger Sneakers',
      type: 'Sneakers',
      price: `₱ 4695.00`
    },
    {
      img: '../images/ws-5.webp',
      name: 'Vivien Low-Top Sneakers',
      type: 'Sneakers',
      price: `₱ 3895.00`
    },
    {
      img: '../images/ws-6.webp',
      name: 'Yassu Wedge Sandals',
      type: 'Sandals',
      price: `₱ 4295.00`
    },
    {
      img: '../images/ws-7.webp',
      name: 'Lagoon Beach Sandals',
      type: 'Sandals',
      price: `₱ 3295.00`
    },
    {
      img: '../images/ws-8.webp',
      name: 'Naida Heeled Sandals',
      type: 'Sandals',
      price: `₱ 4295.00`
    },
    {
      img: '../images/ws-9.webp',
      name: 'Elina Slide Sandals',
      type: 'Sandals',
      price: `₱ 3295.00`
    },
    {
      img: '../images/ws-10.webp',
      name: 'Veadith2.0 Loafers',
      type: 'Loafers',
      price: `₱ 3795.00`
    },
    {
      img: '../images/ws-11.webp',
      name: 'Bagdish Loafers',
      type: 'Loafers',
      price: `₱ 4695.00`
    },
    {
      img: '../images/ws-12.webp',
      name: 'Miska Loafers',
      type: 'Loafers',
      price: `₱ 4695.00`
    },
    {
      img: '../images/ws-13.webp',
      name: 'Stessy2.0 Heeled Shoes',
      type: 'Heels',
      price: `₱ 4695.00`
    },
    {
      img: '../images/ws-14.webp',
      name: 'Enaegyn2.0 Heeled Sandals',
      type: 'Heels',
      price: `₱ 5695.00`
    },
    {
      img: '../images/ws-15.webp',
      name: 'Carnforth Heeled Shoes',
      type: 'Heels',
      price: `₱ 4900.00`
    },
    {
      img: '../images/ws-16.webp',
      name: 'Twirly Heeled Sandals',
      type: 'Heels',
      price: `₱ 5295.00`
    },
    {
      img: '../images/ws-17.webp',
      name: 'Braylynn Ballet Flats',
      type: 'Flats',
      price: `₱ 3795.00`
    },
    {
      img: '../images/ws-18.webp',
      name: 'Valegyn Slingback Flats',
      type: 'Flats',
      price: `₱ 3895.00`
    },
    {
      img: '../images/ws-19.webp',
      name: 'Amandine Slingback Flats',
      type: 'Flats',
      price: `₱ 3695.00`
    }
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
        <h1>Footstep Footwear's Women's Collection</h1>
        <p>Our selection of women's shoes is designed to complement every facet of your life, from chic heels and stylish flats to versatile sneakers. Crafted with high-quality materials and a keen eye for detail, our shoes ensure superior comfort, durability, and style. Whether you're dressing up for a special occasion or looking for everyday essentials, Footstep Footwear has the perfect pair to elevate your look and keep you stepping confidently. Explore our collection and discover your new favorites today!</p>
      </div>

      <div className='sort-container'>
        <div className='sort-options'>
          <button onClick={() => handleSort('All')}>All</button>
          <button onClick={() => handleSort('Sneakers')}>Sneakers</button>
          <button onClick={() => handleSort('Sandals')}>Sandals</button>
          <button onClick={() => handleSort('Heels')}>Heels</button>
          <button onClick={() => handleSort('Loafers')}>Loafers</button>
          <button onClick={() => handleSort('Flats')}>Flats</button>
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

export default Women
