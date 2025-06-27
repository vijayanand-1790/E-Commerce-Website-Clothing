import React, { useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordType = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='min-h-screen flex justify-center items-center mt-16 bg-gray-200'>
      <div className='md:max-w-md md:px-10 bg-white py-5 rounded-2xl pb-10 shadow-2xl shadow-gray-600'>

        <h2 className='md:text-3xl sm:text-2xl text-xl font-bold pt-5 pb-9 px-5'>Login to your account</h2>

        <div className='md:px-0 px-4'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='font-bold'> Email Address: </label>
            <input type="email" placeholder='Your Email' className='bg-gray-200 focus:outline-none w-full p-3 mt-1 rounded' />
          </div>

          <div className='flex flex-col mt-5 relative'>
            <label htmlFor="password" className='font-bold'> Password:</label>
            <input type={showPassword ? "text" : "password"} placeholder='Your Password' className='bg-gray-200 focus:outline-none w-full p-3 rounded mt-1' />
            <button onClick={togglePasswordType} className='absolute right-6 bottom-4 text-black/80 cursor-pointer'> {showPassword ? <FaEyeSlash /> : <FaEye />} </button>

          </div>

          <div className='flex w-full justify-center items-center shadow-2xl'>
            <button className='bg-red-500 text-white md:mt-5 mt-3 w-full py-2 rounded font-bold'>Login</button>
          </div>

          <div className='md:mt-4 mt-3 flex'>
            <h4 className='text-sm'>Don't have an account? <a href="#" className='text-red-500 underline'>Sign in</a> </h4>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Login