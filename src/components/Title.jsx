import React from 'react'

const Title = ({text1 , text2}) => {
  return (
    <div className='flex gap-2 justify-center items-center mb-3'>
        <p className='text-gray-500'>{text1} </p>
        <p className=' '>{text2}</p>
        <hr className='w-10 bg-black h-[2px]'/>
    </div>
  )
}

export default Title