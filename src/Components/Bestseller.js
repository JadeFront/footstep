import React from 'react'
import './Bestseller.css'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Bestseller = () => {

    const shoeList = [
        {
            img: './images/mbs1.webp',
            name: 'Grandspec Oxford Shoes',
            price: '₱2,700.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar />]
        },
        {
            img: './images/mbs2.webp',
            name: 'Edinburgh Lace-Up Shoes',
            price: '₱5,200.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]
        },
        {
            img: './images/mbs3.webp',
            name: 'Miraylie Lace-Up Shoes',
            price: '₱4,500.00',
            rating: [ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />]
        },

        {
            img: './images/wbs1.webp',
            name: 'Vivianne Heeled Mary Janes',
            price: '₱4,895.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />]
        },
        {
            img: './images/wbs2.webp',
            name: 'Rosecloud Low-Top Sneakers',
            price: '₱4,995.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />]
        },
        {
            img: './images/wbs3.webp',
            name: 'Gendadien Wedge Sandals',
            price: '₱2,600.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]
        },
    ];

    const newarrival = [
        {
            img: './images/na1.webp',
            name: 'Recoil Oxford Shoes',
            price: '₱3,900.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />]
        },
        {
            img: './images/na2.webp',
            name: 'Wiser Oxford Shoes',
            price: '₱6,995.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]
        },
        {
            img: './images/na3.webp',
            name: 'Loungeslide Slide Sandals',
            price: '₱2,495.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar/>]
        },
        {
            img: './images/na4.webp',
            name: 'Rosecloud Low-Top Sneakers',
            price: '₱4,995.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar />]
        },
        {
            img: './images/na5.webp',
            name: 'Sanddy Wedge Sandals',
            price: '₱3,795.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />]
        },
        {
            img: './images/na6.webp',
            name: 'Trowe Heeled Mary Janes',
            price: '₱5,595.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />]
        },
        {
            img: './images/na7.webp',
            name: 'Blufferss-Wr Oxford Shoes',
            price: '₱4,995.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />]
        },
        {
            img: './images/na8.webp',
            name: 'Drymos Oxford Shoes',
            price: '₱4,995.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar />]
        },
        {
            img: './images/na9.webp',
            name: 'Midcourt Low-Top Sneakers',
            price: '₱3,800.00',
            rating:[ <FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]
        }
    ]

  return (
    <div className='bestselleer-cotainer'>
        <div className='bestseller'>

            <h1>Our Best Seller</h1>
        
        <div className='shoe-container'>
            {shoeList.map((bestseller) => (
                <div className='shoe-card'>
                    <img src={bestseller.img}/>
                    <h4>{bestseller.name}</h4>
                    <p>{bestseller.price}</p>
                    <p>{bestseller.rating}</p>
                    
            <div className='card-button'>
                <button className='order'>order</button>
                <button className='card'>cart</button>
            </div>
                </div>
            ))}
            
        </div>
        </div>

        <div className='shop-container'>
            <div className='shop'>
                <div className='shop-men'>
                    <a href='#'>SHOP MEN</a>
                </div>

                <div className='shop-women'>
                    <a href='#'>SHOP WOMEN</a>
                </div>
            </div>
        </div>

        <div className='bestseller'>

            <h1>New Arrival</h1>
        
        <div className='shoe-container'>
            {newarrival.map((newshoes) => (
                <div className='shoe-card'>
                    <img src={newshoes.img}/>
                    <h4>{newshoes.name}</h4>
                    <p>{newshoes.price}</p>
                    <p>{newshoes.rating}</p>
                    
            <div className='card-button'>
                <button className='order'>order</button>
                <button className='card'>cart</button>
            </div>
                </div>
            ))}
            
        </div>
        </div>
    </div>
  )
}

export default Bestseller