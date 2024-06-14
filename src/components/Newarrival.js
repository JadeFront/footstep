import React from 'react'
import './Bestseller.css'

const Newarrival = () => {
    const newarrival = [
        {
            img: './images/na1.webp',
            name: 'Recoil Oxford Shoes',
            price: '₱3,900.00',
            type: 'Sneakers'
        },
        {
            img: './images/na2.webp',
            name: 'Wiser Oxford Shoes',
            price: '₱6,995.00',
            type: 'Casual Shoes'
        },
        {
            img: './images/na3.webp',
            name: 'Loungeslide Slide Sandals',
            price: '₱2,495.00',
            type: 'Loafers'
        },
        {
            img: './images/na4.webp',
            name: 'Rosecloud Low-Top Sneakers',
            price: '₱4,995.00',
            type: 'Casual Shoes'
        },
        {
            img: './images/na5.webp',
            name: 'Sanddy Wedge Sandals',
            price: '₱3,795.00',
            type: 'Sandals'
        },
        {
            img: './images/na6.webp',
            name: 'Trowe Heeled Mary Janes',
            price: '₱5,595.00',
            type: 'Heels'
        },
        {
            img: './images/na7.webp',
            name: 'Blufferss-Wr Oxford Shoes',
            price: '₱4,995.00',
            type: 'Casual Shoes'
        },
        {
            img: './images/na8.webp',
            name: 'Drymos Oxford Shoes',
            price: '₱4,995.00',
            type: 'Casual Shoes'
        },
        {
            img: './images/na9.webp',
            name: 'Midcourt Low-Top Sneakers',
            price: '₱3,800.00',
            type: 'Casual Shoes'
        }
    ]

  return (
    <section className='seller'>
        <div className='seller-container'>
            <div className='seller-title'>
                <h1>New arrival</h1>
            </div>
            <div className='seller-card'>
                {newarrival.map((na) => (
                    <div className='card-container'>
                        <div className='card-image'>
                            <img src={na.img}/>
                        </div>
                        <h4 className='card-title'>{na.name}</h4>
                        <p className='card-type'>{na.type}</p>
                        <p className='card-price'>{na.price}</p>
                        <button className='card-button'>order</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Newarrival