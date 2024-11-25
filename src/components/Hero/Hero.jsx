import React from 'react'
import './Hero.css'
import HeroCover from '../../assets/hero-cover-1.png'

const Hero = () => {
  return (
    <div>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-5">
                    <div className='hero-subtitle text-primary'>Welcome</div>
                    <div className='hero-title'>Best Learning Opportunities</div>
                    <div className='hero-text pt-5'>Our goal is to make online education work for everyone</div>
                </div>
                <div className="col-6">
                    <div className='hero-img'>
                    <img src={HeroCover} alt='Learning Opportunities' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Hero
