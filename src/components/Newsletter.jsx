import React from 'react'

const Newsletter = () => {
    const handlesubmit = (e)=>{
      e.preventDefault()
    }

  return (
    <div className='text-center'>
         <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
         <p className='text-gray-600 mt-2'> Lorem ipsum dolor, sit  adipisicing elit. Ipsum adipisci odio consequatur!</p>
         <form onSubmit={handlesubmit} className='flex sm:w-1/2 w-full mx-auto   my-5 '>
               <input required className='px-4 py-3 flex-1 outline-none border' type="email" placeholder='Enter your email' />
               <button className='bg-black text-xs md:text-sm text-white px-4 py-2' type='submit'>SUBSCRIBE</button>
         </form>
    </div>
  )
}

export default Newsletter