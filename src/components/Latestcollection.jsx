import {Shopcontext} from "../context/Shopcontext"
import { useContext, useEffect, useState } from 'react'
import Title from './Title'
import Productitem from "./Productitem"

const Latestcollection = () => {
  const [latestproduct, setlatestproduct] = useState([])
  const {products} = useContext(Shopcontext)
  // console.log(latestproduct)

  useEffect(() => { 
    setlatestproduct( products.slice(0,10))
  }, [])
  
  
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"} text2 ={"COLLECTION"} />
            <p className='text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum, dolor sit amet consectetur culpa!  exercitationem  cupiditate ut.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
           {latestproduct.map(item => <Productitem value={item} key={item._id} />)}
        </div>
    </div>
  )
}

export default Latestcollection