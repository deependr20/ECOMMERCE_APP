import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { Link } from 'react-router-dom'

const Productitem = ({value}) => {
  const {_id, image, name , price} = value
  const {currency} = useContext(Shopcontext)
  // console.log(currency);
  

  return (
   <Link  to={`/product/${_id}`} className='text-gray-500 cursor-pointer'>
      <div className='overflow-hidden'>
           <img className='hover:scale-125 transition ease-in-out ' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm '>{name}</p>
      <p className='text-sm font-bold '>{currency}{price}</p>
   </Link>
  )
}

export default Productitem