import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title'

const CartTotal = () => {
    const {currency , delivery_fee , getcartamount } = useContext(Shopcontext)
  return (
    <div className='w-full '>
         <div className='text-2xl flex items-start '>
            <Title text1={"CART"} text2={"TOTALS"} />
         </div>
         <div className='flex flex-col gap-2 mt-2 text-sm '>
            <div className='flex justify-between'>
                <p>Subtotal </p>
                <p>{currency} {getcartamount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between '>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />    
            <div className='flex justify-between font-semibold text-lg'>
                <p>Total</p>
                <p className='font-semibold '>{currency} {getcartamount() === 0 ? 0 : getcartamount() + delivery_fee}</p>
            </div>
            
         </div>
    </div>
  )
}

export default CartTotal