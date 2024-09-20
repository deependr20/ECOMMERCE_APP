import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
  <div>
    <div className='flex flex-col md:flex-row gap-8  md:gap-x-12 md:gap-y-12 w-full my-20 text-sm tracking-normal leading-[1.2rem]'>
        <div className='sm:w-[70%] w-[92%] '>
           <img className='w-32 mb-5 ' src={assets.logo} alt="" />
           <p className='w-full sm:text-base text-sm md:w-2/3'>
               Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customer can easily discover, explore and purchase a wide range of products from the comfort of their homes 
           </p>
        </div>

          <div className=''>
              <p className='text-xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <p className='text-xl font-medium mb-5'>Get In Touch</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                  <li>+91 9174204019</li>
                  <li>contact@foreveryou.com</li>
              </ul>
            </div>
    </div> 
   <div className='text-center my-2 '>
      <hr />
      <p className='my-5'>Copyright 2024@ Forever.com - All Rights Reserved</p>
   </div>
  </div>
  )   
}

export default Footer