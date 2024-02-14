import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home'>
            <div className='home-intro'>
                <h1>Take a step with confidence with footstep footwear.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras in faucibus quam. Vivamus sodales blandit quam a 
                    lobortis. Nunc sapien felis, vulputate in fermentum tempor, 
                    aliquam quis massa.
                </p>
            </div>
            
            <div className='buttons'>
                <a className='men' href='#'>Shop men</a>
                <a className='women' href='#'>shop women</a>
            </div>
        </div>
    </div>
  )
}

export default Home