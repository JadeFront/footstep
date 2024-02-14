import React from 'react'
import './Feedback.css'
import { FaStar, FaRegStar, FaLock, FaTruck, FaStarHalfAlt } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";

const Feedback = () => {

    const customer = [
        {
            img: './images/maria.png',
            name: 'Maria',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien maximus, ornare nibh ut, rhoncus ipsum. Praesent scelerisque placerat neque nec scelerisque.',
            rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]
        },
        {
            img: './images/juan.png',
            name: 'Juan',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien maximus, ornare nibh ut, rhoncus ipsum. Praesent scelerisque placerat neque nec scelerisque.',
            rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar />]
        },
        {
            img: './images/pedro.jpg',
            name: 'Pedro',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien maximus, ornare nibh ut, rhoncus ipsum. Praesent scelerisque placerat neque nec scelerisque.',
            rating: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />]
        }
    ]

  return (
    <div className='feedback-container'>
        <div className='quote'>
            <p>Every great journey starts 
                with a single step. Start 
                your journey with footstep
                footwear.</p>
        </div>

        <div className='feedback-title'>
                <h1>Our Customer Feedback</h1>
        </div>

        <div className='feedback'>
            
            {customer.map((feedback) => (
                <div className='feedback-card'>
                    <div className='feedback-profile'>
                        <img src={feedback.img}/>
                        <h1>{feedback.name}</h1>
                    </div>
                    <div className='feedback-content'>
                        <p>{feedback.feedback}</p>
                        <p>{feedback.rating}</p>
                    </div>
                </div>
            ))}

        </div>

        <div className='feedback-text'>
            <p><FaLock />Secure Payment</p>
            <p><FaTruck />Free Shipping</p>
            <p><FaArrowsRotate />Free Return</p>
        </div>
        
    </div>
  )
}

export default Feedback