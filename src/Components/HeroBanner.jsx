import React from 'react'
import HeroPexel from '../assets/HeroPexel.jpg'

const HeroBanner = () => {
  return (
    <div className='bg-white mt-20 mb-10 px-5'>
      <div className='relative max-w-7xl mx-auto rounded-2xl md:h-[600px] h-[500px] flex justify-center items-center bg-cover bg-center' style={{ backgroundImage: `url(${HeroPexel})`, backgroundPosition: 'center', }}>
        <div className='absolute inset-0 bg-black/50 rounded-2xl flex justify-center items-center'>
          <div className='text-center text-white space-y-4'>
            <h1 className='lg:text-7xl md:text-6xl text-4xl font-bold flex'>Discover your style!</h1>
            <p className='flex justify-center md:text-xl text-sm'>Shop the latest trends and find your perfect look</p>
            <button className='bg-red-600 hover:bg-red-400 md:px-5 px-3 md:py-3 py-2 rounded-lg font-bold'>Shop Now</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default HeroBanner