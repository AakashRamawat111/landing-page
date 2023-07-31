import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'


const Work = () => {
  
    const workInfoData= [
        {
            image:PickMeals,
            title: 'Pick Meals',
            text: 'Arrive at the restaurant at the scheduled pickup time to avoid delays.'
        },
        {
            image:ChooseMeals,
            title: 'Choose How Often',
            text: 'Choose a frequency that suits your busy schedule and lifestyle.'
        },
        {
            image:DeliveryMeals,
            title: 'Fast Deliveries',
            text: 'Save time by opting for quick delivery services.'
        }
    ]
  
  
    return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'> Work</p>
            <h1 className='primary-heading'>
                How It Works
            </h1>
            <p className='primary-text'>
                Choose Your Favourite Meals alongwith your suited frequency with faster delivery options. 
            </p>
            <div className='work-section-bottom'>
                {
                    workInfoData.map((data)=>(
                        <div className='work-section-info'>
                            <div className='info-boxes-img-container'>
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>

        </div>
      
    </div>
  )
}

export default Work
