import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const Searchbar = () => {
  const  {search,setsearch, showsearch, setshowsearch} = useContext(Shopcontext)
  const [visible, setvisible] = useState(false)
  const location = useLocation()
 useEffect(() => {
    setvisible(location.pathname.includes('collection' ) ? true : false)
    // if (location.pathname.includes('collection') ) {    //asie bhi kar sakte h
    //   setvisible(true)
    // } 
    // else{
    //   setvisible(false)
    // }
 }, [location])
 

  return  showsearch && visible ? (
      <div className='border-t border-b bg-gray-50 text-center  py-5'>
         <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
             <input value={search} onChange={(e)=>setsearch(e.target.value)} className='flex-1 outline-none bg-inherit  text-sm' type="text" placeholder='Search' />
             <img className='w-4' src={assets.search_icon} alt="" />
         </div>       
         <img onClick={()=>setsearch("")} className='inline w-3 cursor-pointer'  src={assets.cross_icon} alt="" />
      </div>
  ) : null
}

export default Searchbar