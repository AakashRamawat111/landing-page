import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'> Testimonial </p>
        <h1 className='primary-heading'>
            What They Are Saying
        </h1>
        <p className='primary-text'>
            Our customers provide valuable feedback about their experiences with us.
        </p>

      </div>

        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="" />
            <p>
                Great job in accommodating my dietary preferences. I felt well taken care of!
            </p>

            <div className='testimonials-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>

            <h2>John Doe</h2>
        </div>

    </div>
  )
}

export default Testimonial
