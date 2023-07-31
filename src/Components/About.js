import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>

        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>

        <div className='about-section-text-container'>
            <p className='primary-subheading'>
                About
            </p>

            <h1 className='primary-heading'>
                Food is an important part of Balanaced Diet.
            </h1>

            <p className='primary-text'>
                Food is a cornerstone of a balanced diet, providing essential nutrients that support overall health and well-being.
            </p>

            <p className='primary-text'>
                A well-rounded diet helps maintain proper bodily functions, and supports the growth and repair of tissues.
            </p>

            <div className='about-buttons-container'>
                <button className='secondary-button'>
                    Learn More
                </button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill/>
                    Watch Video
                </button>


            </div>

        </div>
      
    </div>
  )
}

export default About
