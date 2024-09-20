import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets, products } from '../assets/assets'
import Title from '../components/Title'
import Productitem from '../components/Productitem'

const Collection = () => {
 const {products,search,showsearch} = useContext(Shopcontext)
 const [showfilter, setshowfilter] = useState(false)
 const [filterproducts, setfilterproducts] = useState([])
 const [category, setcategory] = useState([])
 const [sorttype, setsorttype] = useState('')

 const togglecategory =(e)=>{ 
   if (category.includes(e.target.value)) {
         setcategory(prev => prev.filter(item => item !== e.target.value))
   } 
   else{
      setcategory(prev => [...prev,e.target.value])
   }
 }

const applyfilter = ()=>{
     let productsCopy = [...products]
    
     if (showsearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))
     }

     if (category.length >0){
      productsCopy = productsCopy.filter(item => category.includes(item.category)) 
     }
     setfilterproducts(productsCopy)
}

const sortproduct = ()=>{
      let fpcopy = [...filterproducts]
      switch (sorttype) {
         case 'low-high':
            setfilterproducts(fpcopy.sort((a,b)=> a.price - b.price))
            break;
         
         case 'high-low':
            setfilterproducts(fpcopy.sort((a,b)=> b.price - a.price))
            break;
          
         default:   
            applyfilter()
            break; 
      }
}
  
//  useEffect(() => {
//     setfilterproducts(products)
//  }, [])

 useEffect(() => {
    applyfilter()
 }, [category,search,showsearch])

 useEffect(() => {
    sortproduct()
 }, [sorttype])


//  useEffect(() => {
//     console.log(category);
//  }, [category])


  return (
    <div className='flex flex-col md:flex-row   gap-1 sm:gap-10 pt-10 border-t'>
       
        {/* filter option */}
        <div className='sm:w-[16rem] w-full'>
           <p onClick={()=>setshowfilter(prev=> !prev)} className='cursor-pointer my-2 text-xl flex items-center gap-2 '>
              FILTERS
              <img className={`h-3 sm:hidden ${showfilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="" />
           </p>
           {/* categoryb filter */}
           <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? "" : "hidden"} `}>
               <p className='mb-3 text-sm font-medium'>CATEOGARIES</p>
               <div className='flex flex-col gap-2 '>
                  <p className='flex gap-2'>
                     <input onChange={togglecategory} type="checkbox" value={'Men'} />Men
                     {/* <label htmlFor="all">Men</label> */}
                  </p>
                  <p className='flex gap-2'>
                     <input onChange={togglecategory} type="checkbox" value={'Women'}  />Women
                  </p>
                  <p className='flex gap-2'>
                     <input onChange={togglecategory} type="checkbox" value={'Kids'}  />Kids
                  </p>
               </div>
           </div> 

           {/* subcateogary filter */}
          
        </div>

        {/* Right side */}
      <div className='flex-1'>
            <div className='flex justify-between text-base sm:text-xl mb-4'>
                <Title  text1={"ALL"} text2 ={"COLLECTION"}/>
                {/* product sort */}
                <select onChange={(e)=>setsorttype(e.target.value)} className='border-2 border-gray-600  outline-none text-sm px-2'>
                   <option value="relevant">Sort by: Relevant</option>
                   <option value="low-high">Sort by: Low to High</option>
                   <option value="high-low">Sort by: High to Low</option>
                </select>
            </div>
         
        {/* product list */}
         <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 '>
            {filterproducts.map((item,index) => 
                <Productitem key={index}   value={item}/>
            )}
         </div>
      </div>

    </div>
  )
}

export default Collection