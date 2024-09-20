import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title'
import { Link } from 'react-router-dom'

const Relatedproducts = ({category}) => {
  
  const {products,currency} = useContext(Shopcontext)
  const [related, setrelated] = useState([])
 
    useEffect(() => {
        if (products.length >0 ){
          let productcopy = [...products]
          productcopy= productcopy.filter(item => category === item.category)
          setrelated(productcopy.slice(0,5))
        }
    }, [products])
    

  return (
      <Link to={"/collection"} className='cursor-pointer'>
        <div className='text-3xl mt-10'>
           <Title text1={"Realated"} text2={"Products"}/> 
        </div>
        <div className='grid grid-cols-3  md:grid-cols-4  lg:grid-cols-5 gap-x-4 mt-8  gap-y-8'>
            {related.map(item => 
              <div key={item._id}>
                <img src={item.image[0]} alt={item.name} />
                <p className='sm:text-sm text-xs  mt-3 font-medium text-gray-800'>{item.name}</p>
                <p className='sm:text-sm text-xs mt-1 text-gray-500 font-medium'>{item.price} {currency}</p>
              </div> // End of div tag for each product item
            )}
        </div>
      </Link>

  
  )
}

export default Relatedproducts