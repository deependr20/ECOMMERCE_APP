import React, { useState } from 'react'

const Login = () => {
  const [currentstate, setcurrentstate] = useState('Login')
  const SubmitHandler = (e)=>[
      e.preventDefault()
  ]

  return (
   <form onSubmit={SubmitHandler} className='flex flex-col border bg-slate-100 shadow-xl p-12 pt-0  items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' >
      <div className='flex items-center gap-2 mb-2 mt-10'>
          <p className='text-5xl linear'>{currentstate}</p>
          <hr className='border-none h-[2px] w-8 bg-gray-800'/>
      </div>
      {currentstate === 'Login' ? '' : <input required type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' />}
      <input required type="Email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' />
      <input required type="Password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forget your password</p>
          {currentstate === 'Login' 
            ? <p onClick={()=> setcurrentstate('Sign up')} className='cursor-pointer'>Create account</p> 
            : <p onClick={()=> setcurrentstate('Login')} className='cursor-pointer'>Login here</p>
          }
      </div>
      <button  className='px-7 mt-3 py-2 bg-black text-sm text-white rounded'>{currentstate === 'login' ? 'Sign In' : 'Sign Up'}</button>

   </form>
  )
}

export default Login