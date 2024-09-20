import React from 'react'
import { assets } from '../assets/assets'

const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 sm:py-20 py-16 text-xs sm:text-sm md-text-base text-gray-700 text-center'>
        <div className=''>
            <img className='w-16 m-auto mb-5' src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-700'>We Offer Hassle Free Exchange Policy</p>
        </div>
        <div className=''>
            <img className='w-16 m-auto mb-5' src={assets.quality_icon} alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-700'>We Provide 7 Days Free Return Policy</p>
        </div>
        <div className=''>
            <img className='w-16 m-auto mb-5' src={assets.support_img} alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-700'>We Provite 24/7 Customer Support </p>
        </div>
    </div>
  )
}

export default Ourpolicy