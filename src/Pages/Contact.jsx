import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div className=''>
        <div className='text-center text-2xl border-t pt-10 '>
            <Title  text1={"CONTACT"} text2={"US"}/>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-x-28 gap-y-12 mb-28 '>
            <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
            <div className='flex flex-col items-start justify-center gap-6'>
                <p className='font-semibold text-xl text-gray-600 '>Our Store</p>
                <p className='text-gray-500'>54709 Willms Station <br /> Suite 380, Washington, USA</p>
                <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email:admin@forever.com</p>
                <p className='font-semibold text-xl text-gray-600 '>Careers at Forever</p>
                <p className='text-gray-500'>Learn more about our team and job openings.</p>
                <button className='border-black border  px-8 py-4 text-sm hover:bg-black hover:text-white'>Explore Jobs</button>
            </div>
        </div>
        <Newsletter />
    </div>
  )
}

export default Contact