import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { Link, useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import Relatedproducts from '../components/Relatedproducts'

const Product = () => {
  const {productId} = useParams()
  // console.log(productId)
  const {products,currency,addtoCart} = useContext(Shopcontext)
  const [productdata, setproductdata] = useState(false)
  const [image, setimage] = useState('')
  const [size, setsize] = useState("")

  const fetchproductdata =  ()=>{
      products.map((item)=>{
        if (item._id === productId) {
          setproductdata(item)
          setimage(item.image[0])
          // console.log(item);
        } 
      })
  }
  //  console.log(products);
   
  useEffect(()=>{
    fetchproductdata()
  }, [productId,products])

  return productdata ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/*product data */}
        <div className='flex gap-12  flex-col sm:flex-row'>
            {/* product images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
                   {productdata.image.map((item,index)=> 
                       <img onClick={()=> setimage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} key={index} alt="" />
                   )}
                </div>
                <div className='w-full sm:w-[89%]'>
                     <img className=' w-full h-auto ' src={image} alt="" />
                </div>
            </div>
            {/* product info */}
            <div className='flex-1 '>
                <h1 className='font-medium text-2xl   '>{productdata.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                    <img className='w-3' src={assets.star_icon} alt="" />
                    <img className='w-3' src={assets.star_icon} alt="" />
                    <img className='w-3' src={assets.star_icon} alt="" />
                    <img className='w-3' src={assets.star_icon} alt="" />
                    <img className='w-3' src={assets.star_dull_icon} alt="" />
                    <p className='pl-2'>(122)</p>
                </div>
                <p className=' mt-4 text-3xl font-medium'>{currency}{productdata.price}</p>
                <p className='mt-4 text-gray-500 md:w-4/5 leading-[1.5rem]'>{productdata.description}</p>
                <div className='flex flex-col gap-4 my-5'>
                    <p>Select Size</p>
                    <div className='flex gap-2'>
                        {productdata.sizes.map((item,index) =>
                          <button onClick={()=> setsize(item)} key={index} className={`border ${item === size ?  "border-orange-500" : ""} text-black border-[1.8px] py-2 px-4 `}>{item}</button>
                        )}
                    </div>
                </div>
                <button onClick={()=> addtoCart(productdata._id , size)}  className='bg-black text-white text-sm py-3 px-8 mt-1 active:bg-gray-600'>Add to Cart</button>
                <hr className=' mt-8 sm:w-4/5' />
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% Original Product.</p>
                    <p>Cash on Delivery is available on this product.</p>
                    <p>Easy return and exchange policy within 7 days </p>
                </div>
            </div>
        </div>
        {/* product reviews */}
        <div className='mt-20'>
            <div className='flex '>
                <b className='border px-5 py-3 text-gray-600 text-sm'>Description</b>
                <p className='border px-5 py-3 text-gray-500 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>An e-commerce website is an online platform that facilates the buying and selling of products or services over the internet. it serves as a virtual marketplace where bussinesses and individuals can showcase their products, interact with customer, and conduct transaction without the need for a physical presence. E-commerce websites have gained immmense popularity due to their convinience, accessibility, and the global reach they offer.   </p>    
                <p>E-commerce websites typically display products or services along with detailed description, images,prices and any available variation (e.g.,sizes, colors). Each product usually has its own dedicated page with relevant information</p>   
            </div>
        </div>
        {/* display related products */}
        <Relatedproducts  category={productdata.category} subcategory={productdata.subcategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product