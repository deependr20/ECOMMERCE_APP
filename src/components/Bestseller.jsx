import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title'
import { Link } from 'react-router-dom'

const Bestseller = () => {
    const {products,currency} = useContext(Shopcontext)
    const [Bestseller, setBestseller] = useState([])
    
    // console.log(Bestseller)
    useEffect(() => {
        setBestseller(products.filter(item => item.bestseller).slice(0,5))
    }, [])
  return (
    <div className='my-10 flex flex-col'>
        <div className='text-center py-8 sm:text-[2rem] leading-8  text-[1.5rem] mb-4'>
            <Title text1={"BESTSELLER"} text2 ={"COLLECTION"} />
            <p className='text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum, dolor sit amet consectetur culpa!  exercitationem  cupiditate ut.</p>
        </div>   
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 gap-y-6' >
            {Bestseller.map(item=> 
             <Link key={item._id} to={`/product/${item._id}`}>
                 <div className='overflow-hidden mb-2'>
                      <img className='hover:scale-125 transition ease-in-out ' src={item.image[0]} alt="" />
                 </div>
                 <p className='my-1 text-sm text-gray-600'>{item.name}</p>
                 <p>{currency}{item.price}</p>
             </Link>
            )}
         </div>
    </div>
  )
}

export default Bestseller
              