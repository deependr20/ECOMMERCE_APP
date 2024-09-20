import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {products,currency,cartItems, updateQuantity,navigate} = useContext(Shopcontext)
  const [cartdata, setcartdata] = useState([])

  useEffect(()=>{
    const tempdata = []
    for(const items in cartItems){
      for (const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempdata.push({
            _id: items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    console.log(tempdata)
    setcartdata(tempdata)
  },[cartItems])

  return  cartdata.length > 0 ? (  
    <div className='border-t pt-14'>
        <div className='text-2xl mb-6'>
            <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div className=''>
            {cartdata.map((item,index) =>{
               const productdata = products.find((product) => product._id === item._id)
               return (
                <div key={index} className='py-4 border-t border-b text-gray-700 items-center gap-4 grid grid-cols-[4fr_.5fr_.5fr] sm:grid-cols-[4fr_2fr_.5fr]'>
                    <div className='gap-6 items-start flex'>
                        <img className='w-16 sm:w-20' src={productdata.image[0]} alt="" />
                        <div>
                            <p className='text-xs font-medium sm:text-lg'>{productdata.name}</p>
                            <div className='items-center flex gap-5 mt-2'>
                                <p>{currency}{productdata.price}</p>
                                <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                            </div>
                        </div>
                    </div>
                    <input type='number' onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size, Number(e.target.value))}  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'  min={1} defaultValue={item.quantity}/>
                    <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm;w-5 cursor-pointer' src={assets.bin_icon} alt="" />
                </div>
               )

            }) 
              }
        </div>
        <div className='flex  justify-end my-20'>
              <div className='w-full sm:w-[450px]'>
                  <CartTotal />
                  <div className='w-full text-end mt-6'>
                    <Link to={"/placeorder"} className='bg-black transition-opacity duration-1000 delay-1000 text-white px-8 py-3 text-small mt-8'>Proceed To Checkout</Link>
                  </div>
              </div>
        </div>
        
    </div>
  ) : <h1 className='text-6xl flex justify-center w-full h-[30vh] items-center ' >Cart is empty</h1>
}

export default Cart