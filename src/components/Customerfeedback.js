import React from 'react'
import './Customerfeedback.css'

const Customerfeedback = () => {
    const feedback = [
        {
            img: './images/juan.png',
            name: 'Juan',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien maximus, ornare nibh ut, rhoncus ipsum. Praesent scelerisque placerat neque nec scelerisque'
        },
        {
            img: './images/maria.png',
            name: 'Maria',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien maximus, ornare nibh ut, rhoncus ipsum. Praesent scelerisque placerat neque nec scelerisque'
        },
        {
            img: './images/pedro.jpg',
            name: 'Pedro',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien maximus, ornare nibh ut, rhoncus ipsum. Praesent scelerisque placerat neque nec scelerisque'
        }
    ]
  return (
    <section className='customer-feedback'>
        <div className='customer-container'> 
            <div className='feedback-title'>
                <h1>Customer Feedback</h1>
            </div>

            <div className='feedback-container'>
                {feedback.map((fb) => (
                    <div className='feedback-card'>
                    <div className='feedback-info'>
                        <img src={fb.img}/>
                        <h1>
                            {fb.name}
                        </h1>
                    </div>
                    <p>
                        {fb.message}
                    </p>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Customerfeedback