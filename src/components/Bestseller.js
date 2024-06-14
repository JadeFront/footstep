import React from 'react'
import './Bestseller.css'

const Bestseller = () => {
 
    const bestSeller = [
        {
            img: './images/mbs1.webp',
            name: 'Grandspec Oxford Shoes',
            price: '₱2,700.00',
            type: 'Sneakers'
        },
        {
            img: './images/mbs2.webp',
            name: 'Edinburgh Lace-Up Shoes',
            price: '₱5,200.00',
            type: 'Dress Shoes'
        },
        {
            img: './images/mbs3.webp',
            name: 'Miraylie Lace-Up Shoes',
            price: '₱4,500.00',
            type: 'Dress Shoes'
        },

        {
            img: './images/wbs1.webp',
            name: 'Vivianne Heeled Mary Janes',
            price: '₱4,895.00',
            type: 'Heels'
        },
        {
            img: './images/wbs2.webp',
            name: 'Rosecloud Low-Top Sneakers',
            price: '₱4,995.00',
            type: 'Sneakers'
        },
        {
            img: './images/wbs3.webp',
            name: 'Gendadien Wedge Sandals',
            price: '₱2,600.00',
            type: 'Sandals '
        },
    ];
  return (
    <section className='seller'>
        <div className='seller-container'>
            <div className='seller-title'>
                <h1>Best Seller</h1>
            </div>
            <div className='seller-card'>
                {bestSeller.map((bs) => (
                    <div className='card-container'>
                        <div className='card-image'>
                            <img src={bs.img}/>
                        </div>
                        <h4 className='card-title'>{bs.name}</h4>
                        <p className='card-type'>{bs.type}</p>
                        <p className='card-price'>{bs.price}</p>
                        <button className='card-button'>order</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Bestseller