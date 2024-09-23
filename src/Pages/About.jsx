import React, {  useState } from 'react';
import { gsap } from 'gsap';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletter from '../components/Newsletter';

const About = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    const handleImageClick = (e) => {
      if (!isAnimated) {
        // Animate the image on the first click
        gsap.to(e.target, {
          duration: 1,
          scale: 1,
          rotation: 360,
          ease: 'power2.out',
        })
      } 
      else{
         gsap.to(".bose", {    //class ka name bhi likh sakte ho ya uska e.target bhi use kar sakte ho
          scale:1.05,
          ease: 'power2.in',
          rotation:0
         })
      }
      // Toggle the animation state
      setIsAnimated(!isAnimated);
    };

  return (
    <div className=''>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img
            onClick={handleImageClick} // Add click handler
            className='w-full bose md:max-w-[450px] cursor-pointer'
            src={assets.about_img}
            alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online...</p>
            <b className='text-gray-800 '>Our Mission</b>
            <p>Our mission at Forever is to empower customers with choice, convenience, and confidence...</p>
          </div>
      </div>
      <div className='text-3xl mb-12'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 mt-4'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We meticulously select and vet each product...</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process...</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Support:</b>
            <p className='text-gray-600'>Our team of dedicated professionals is here to assist you...</p>
          </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default About;
